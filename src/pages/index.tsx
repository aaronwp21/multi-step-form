import React, { useContext } from 'react';
import { FormContext } from '@/components/contexts/form.context';
import SelectPlan from '@/components/SelectPlan';

export default function Home() {
  const { pageNum } = useContext(FormContext);

  return (
    <div className="h-[100vh] grid grid-rows-[minmax(175px,2fr),minmax(450px,3fr),minmax(69px,75px)]">
      <ol className="row-start-1 col-start-1 bg-secondary flex justify-center gap-4 pt-12">
        <li className="flex items-start gap-4">
          <p
            className={`${
              pageNum === 0 ? 'bg-accent' : 'text-white'
            } px-4 py-2 rounded-full outline outline-1 outline-accent`}
          >
            1
          </p>
          <div className="text-white hidden">
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
          <div className="text-white hidden">
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
          <div className="text-white hidden">
            <p className="text-xs text-light-grey">STEP 3</p>
            <p className="text-md font-bold">SUMMARY</p>
          </div>
        </li>
      </ol>
      <div className="row-start-1 row-end-3 col-start-1 z-50 flex pt-24">
        <div className="w-[90%] h-[95%] m-auto bg-white rounded-xl p-8">
          {pageNum === 0 ? (
            <SelectPlan />
          ) : pageNum === 1 ? (
            // <UserForm />
            <div>Page 2</div>
          ) : (
            // <Summary />
            <div>Page 3</div>
          )}
        </div>
      </div>
      <div className="bg-light-grey row-start-2 col-start-1"></div>
      <div>footer</div>
    </div>
  );
}
