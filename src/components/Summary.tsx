import React, { useContext, useState } from 'react';
import Image from 'next/image';
import { FormContext } from './contexts/form.context';

function Summary() {
  const { plan, frequency, userInfo, confirmed, onUpdatePageNum } =
    useContext(FormContext);

  const plans = ['Basic', 'Advanced', 'Pro'];

  const monthlyPrices = ['£5/mo', '£7.50/mo', '£10/mo'];

  const yearlyPrices = ['£50/yr', '£75/yr', '£100/yr'];

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
        </div>
      )}
    </>
  )
}

export default Summary