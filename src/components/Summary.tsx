import React, { useContext } from 'react';
import Image from 'next/image';
import { FormContext } from './contexts/form.context';

function Summary() {
  const {
    plan,
    frequency,
    userInfo,
    confirmed,
    onUpdateConfirmed,
    onUpdatePageNum,
  } = useContext(FormContext);

  const plans = ['Basic', 'Advanced', 'Pro'];

  const monthlyPrices = ['£5/mo', '£7.50/mo', '£10/mo'];

  const yearlyPrices = ['£50/yr', '£75/yr', '£100/yr'];

  const onConfirm = async () => {
    try {
      const subscriptionObj = {
        plan: plans[plan],
        frequency: frequency ? 'Monthly' : 'Yearly',
        cost: frequency ? monthlyPrices[plan] : yearlyPrices[plan]
      }
      const accountObj = {
        name: userInfo.name,
        email: userInfo.email,
        phoneNumber: userInfo.phoneNumber ? userInfo.phoneNumber : null,
        subscription: subscriptionObj
      }
      const response = await fetch(`/api/account/${userInfo.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          accountObj: accountObj
        })
      })
      if (!response.ok) {
        throw response;
      }
      const res = await response.json();
      onUpdateConfirmed();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      {confirmed ? (
        <div className="self-center h-full flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <Image src={'/check.png'} alt="Check icon" height={80} width={80} />
            <h2 className="text-3xl text-primary font-bold">Thank you!</h2>
            <p className="text-cool-grey font-semibold max-w-[75%] text-center">
              Thanks for confirming your subscription. We hope you enjoy using
              our platform!
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <h2 className="text-3xl text-primary font-bold mb-2">Finishing up</h2>
          <p className="text-cool-grey font-semibold mb-12">
            Double check everything looks OK before confirming.
          </p>
          <div className="bg-light-grey p-4 rounded-lg">
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-primary font-bold">
                  {plans[plan]} ({frequency ? 'Monthly' : 'Yearly'})
                </p>
                <p
                  onClick={() => onUpdatePageNum(0)}
                  className="text-sm text-cool-grey font-semibold underline cursor-pointer inline-block"
                >
                  Change
                </p>
              </div>
              <div>
                <p className="text-lg text-secondary font-bold">
                  {frequency ? monthlyPrices[plan] : yearlyPrices[plan]}
                </p>
              </div>
            </div>
            <hr className="text-cool-grey mb-4" />
            <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                <p>Name:</p>
                <p>{userInfo.name}</p>
              </div>
              <div className="flex justify-between">
                <p>Email:</p>
                <p>{userInfo.email}</p>
              </div>
              {userInfo.phoneNumber ? (
                <div className="flex justify-between">
                  <p>Phone Number:</p>
                  <p>{userInfo.phoneNumber}</p>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="hidden sm:inline-block">
            <button
              onClick={() => onUpdatePageNum(1)}
              className="absolute py-2 text-cool-grey font-semibold sm:bottom-6 sm:left-8"
            >
              Go Back
            </button>
            <button
              onClick={() => onConfirm()}
              className="bg-primary py-3 px-6 rounded-lg text-primary-active hidden sm:inline-block sm:absolute sm:bottom-4 sm:right-0 sm:mr-8"
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Summary;
