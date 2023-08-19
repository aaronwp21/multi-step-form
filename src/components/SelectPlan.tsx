import React, { useContext, Fragment } from 'react';
import Image from 'next/image';
import { Switch } from '@headlessui/react';
import { FormContext } from './contexts/form.context';

function SelectPlan() {
  const { plan, frequency, onUpdatePageNum, onUpdateFrequency, onUpdatePlan } =
    useContext(FormContext);

  return (
    <>
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-3xl text-primary font-bold">Select your plan</h2>
        <p className="text-cool-grey font-semibold">
          Choose between monthly or yearly billing.
        </p>
      </div>
      <div className="flex flex-col gap-4 mb-8 sm:grid sm:grid-cols-3">
        <div
          className={`flex items-center gap-4 outline ${
            plan === 0
              ? 'outline-secondary bg-primary-active'
              : 'outline-light-grey'
          } hover:outline-secondary p-4 rounded-lg cursor-pointer sm:flex-col sm:min-w-[100px] sm:items-start`}
          onClick={() => onUpdatePlan(0)}
        >
          <div className="bg-bronze rounded-full p-2 inline-block max-w-[46px] max-h-[48px]">
            <Image
              src={'/medal_icon.png'}
              alt="Bronze Medal"
              height={30}
              width={30}
            />
          </div>
          <div className="grid grid-cols-[max-content] sm:grid-cols-1">
            <p className="text-primary text-lg font-semibold">Basic</p>
            <p className="text-cool-grey text-sm font-bold">
              {frequency === true ? '£5/mo' : '£50/yr'}
            </p>
            <p
              className={`text-primary text-sm ${
                frequency === true ? 'hidden' : ''
              }`}
            >
              Two months free
            </p>
          </div>
        </div>
        <div
          className={`flex items-center gap-4 outline ${
            plan === 1
              ? 'outline-secondary bg-primary-active'
              : 'outline-light-grey'
          } hover:outline-secondary p-4 rounded-lg cursor-pointer sm:flex-col sm:min-w-[100px] sm:items-start`}
          onClick={() => onUpdatePlan(1)}
        >
          <div className="bg-silver rounded-full p-2 inline-block max-w-[46px] max-h-[48px]">
            <Image
              src={'/medal_icon.png'}
              alt="Silver Medal"
              height={30}
              width={30}
            />
          </div>
          <div className="grid grid-cols-[max-content] sm:grid-cols-1">
            <p className="text-primary text-lg font-semibold">Advanced</p>
            <p className="text-cool-grey text-sm font-bold">
              {frequency === true ? '£7.50/mo' : '£75/yr'}
            </p>
            <p
              className={`text-primary text-sm ${
                frequency === true ? 'hidden' : ''
              }`}
            >
              Two months free
            </p>
          </div>
        </div>
        <div
          className={`flex items-center gap-4 outline ${
            plan === 2
              ? 'outline-secondary bg-primary-active'
              : 'outline-light-grey'
          } hover:outline-secondary p-4 rounded-lg cursor-pointer sm:flex-col sm:min-w-[100px] sm:items-start`}
          onClick={() => onUpdatePlan(2)}
        >
          <div className="bg-gold rounded-full p-2 inline-block max-w-[46px] max-h-[48px]">
            <Image
              src={'/medal_icon.png'}
              alt="Gold Medal"
              height={30}
              width={30}
            />
          </div>
          <div className="grid grid-cols-[max-content] sm:grid-cols-1">
            <p className="text-primary text-lg font-semibold">Pro</p>
            <p className="text-cool-grey text-sm font-bold">
              {frequency === true ? '£10/mo' : '£100/yr'}
            </p>
            <p
              className={`text-primary text-sm ${
                frequency === true ? 'hidden' : ''
              }`}
            >
              Two months free
            </p>
          </div>
        </div>
      </div>
      <div className="bg-light-grey p-3 flex items-center justify-center gap-6 rounded-md">
        <p
          className={`text-sm ${
            frequency === true ? 'text-primary' : 'text-cool-grey'
          } font-bold`}
        >
          Monthly
        </p>
        <Switch
          checked={!frequency}
          onChange={() => onUpdateFrequency()}
          as={Fragment}
        >
          {({ checked }) => (
            <button
              className={`${
                checked ? 'bg-primary' : 'bg-primary'
              } relative inline-flex h-6 w-11 items-center rounded-full`}
            >
              <span
                className={`${
                  checked ? 'translate-x-6' : 'translate-x-1'
                } inline-block h-4 w-4 transform rounded-full bg-white transition`}
              />
            </button>
          )}
        </Switch>
        <p
          className={`text-sm ${
            frequency === false ? 'text-primary' : 'text-cool-grey'
          } font-bold`}
        >
          Yearly
        </p>
      </div>
      <div>
        <button onClick={() => onUpdatePageNum(1)} className="bg-primary py-3 px-6 rounded-lg text-primary-active hidden sm:inline-block sm:absolute sm:bottom-4 sm:right-0 sm:mr-8">
          Next Step
        </button>
      </div>
    </>
  );
}

export default SelectPlan;
