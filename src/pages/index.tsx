import React, { useContext } from 'react';
import Head from 'next/head';
import { FormContext } from '@/components/contexts/form.context';
import SelectPlan from '@/components/SelectPlan';
import UserForm from '@/components/UserForm';
import Summary from '@/components/Summary';

export default function Home() {
  const { pageNum, confirmed, onUpdatePageNum, onUpdateConfirmed } =
    useContext(FormContext);

  return (
    <>
      <Head>
        <title>Multi Step Form</title>
      </Head>
      <div className="h-[100vh] flex">
        <div className="grid grid-rows-[minmax(175px,2fr),minmax(500px,3fr),75px] w-full sm:min-h-[800px] sm:w-[80%] sm:min-w-[630px] sm:max-w-[1000px] sm:m-auto sm:grid-rows-1 sm:grid-cols-[1fr,2fr] sm:bg-white sm:rounded-xl sm:outline sm:shadow-[12px_12px_0px_0px_rgba(0,0,0)]">
          <ol className="row-start-1 col-start-1 bg-secondary flex justify-center gap-4 pt-12 sm:flex-col sm:justify-start sm:pl-8 sm:m-4 sm:rounded-lg sm:gap-8 sm:min-w-[210px] sm:max-w-[250px]">
            <li className="flex items-start gap-4">
              <p
                className={`${
                  pageNum === 0 ? 'bg-accent' : 'text-white'
                } px-4 py-2 rounded-full outline outline-1 outline-accent`}
              >
                1
              </p>
              <div className="text-white hidden sm:inline">
                <p className="text-xs text-light-grey">STEP 1</p>
                <p className="text-md font-bold">SELECT PLAN</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <p
                className={`${
                  pageNum === 1 ? 'bg-accent' : 'text-white'
                } px-4 py-2 rounded-full outline outline-1 outline-accent`}
              >
                2
              </p>
              <div className="text-white hidden sm:inline">
                <p className="text-xs text-light-grey">STEP 2</p>
                <p className="text-md font-bold">YOUR INFO</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <p
                className={`${
                  pageNum === 2 ? 'bg-accent' : 'text-white'
                } px-4 py-2 rounded-full outline outline-1 outline-accent`}
              >
                3
              </p>
              <div className="text-white hidden sm:inline">
                <p className="text-xs text-light-grey">STEP 3</p>
                <p className="text-md font-bold">SUMMARY</p>
              </div>
            </li>
          </ol>
          <div className="row-start-1 row-end-3 col-start-1 sm:col-start-2 z-40 flex pt-24 sm:pt-0 sm:mb-4 sm:relative">
            <div className="w-[90%] h-[95%] m-auto bg-white rounded-xl p-8 relative sm:w-full sm:h-full sm:py-16 sm:max-w-[600px]">
              {pageNum === 0 ? (
                <SelectPlan />
              ) : pageNum === 1 ? (
                <UserForm />
              ) : (
                <Summary />
              )}
            </div>
          </div>
          <div className="bg-light-grey row-start-2 col-start-1"></div>
          <div className="grid items-center bg-white sm:hidden">
            {pageNum === 0 ? (
              <div className="justify-self-end pr-[5%]">
                <button
                  onClick={() => onUpdatePageNum(1)}
                  className="bg-primary py-3 px-6 rounded-lg text-primary-active"
                >
                  Next Step
                </button>
              </div>
            ) : pageNum === 1 ? (
              <div></div>
            ) : (
              <div
                className={`${
                  confirmed ? 'hidden' : ''
                } flex justify-between px-[5%]`}
              >
                <button
                  onClick={() => onUpdatePageNum(1)}
                  className="py-2 text-cool-grey font-semibold"
                >
                  Go Back
                </button>
                <button
                  onClick={() => onUpdateConfirmed()}
                  className="bg-primary py-3 px-6 rounded-lg text-primary-active"
                >
                  Confirm
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
