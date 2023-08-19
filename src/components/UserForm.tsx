import React, { useContext } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormContext } from './contexts/form.context';

const schema = yup
  .object()
  .shape({
    name: yup.string().max(100).trim().required(),
    email: yup.string().email().max(100).trim().required(),
    phoneNumber: yup
      .string()
      .matches(
        /^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/,
        {
          excludeEmptyString: true,
          message: 'Please enter a vaild UK number.',
        },
      )
      .trim(),
  })
  .required();

const defaults = {
  name: '',
  email: '',
  phoneNumber: '',
};

function UserForm() {
  const { userInfo, onUpdatePageNum, onUpdateUserInfo } =
    useContext(FormContext);

  const {
    handleSubmit,
    formState: { errors, isValid, isDirty, isSubmitting },
    reset,
    register,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: userInfo ? userInfo : defaults,
  });

  const onSubmit: SubmitHandler<{
    name: string;
    email: string;
    phoneNumber: string | undefined;
  }> = (data) => {
    onUpdateUserInfo(data);
    onUpdatePageNum(2);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col h-full">
      <div className="mb-4">
        <h2 className="text-3xl text-primary font-bold mb-2">Personal Info</h2>
        <p className="text-cool-grey font-semibold">
          Please provide your name, email address, and optional phone number.
        </p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-md">
            <label htmlFor="name" className="text-primary">
              Name
            </label>
            <p className="text-error">
              {errors.name ? errors.name.message : ''}
            </p>
          </div>
          <input
            placeholder="Alex Smith"
            type="text"
            id="name"
            defaultValue={userInfo ? userInfo.name : defaults.name}
            {...register('name')}
            className={`outline ${
              errors.name
                ? 'outline-error focus:error'
                : 'outline-light-grey focus:outline-secondary'
            } py-2 px-3 rounded-md`}
          />
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex justify-between text-md">
            <label htmlFor="email" className="text-primary">
              Email Address
            </label>
            <p className="text-error">
              {errors.email ? errors.email.message : ''}
            </p>
          </div>
          <input
            placeholder="alexsmith@gmail.com"
            type="text"
            id="email"
            defaultValue={userInfo ? userInfo.email : defaults.email}
            {...register('email')}
            className={`outline ${
              errors.email
                ? 'outline-error focus:error'
                : 'outline-light-grey focus:outline-secondary'
            } py-2 px-3 rounded-md`}
          />
        </div>
        <div className="flex flex-col gap-1 mb-12">
          <div className="flex justify-between text-md">
            <label htmlFor="phoneNumber" className="text-primary">
              Phone Number
            </label>
            <p className="text-error">
              {errors.phoneNumber ? errors.phoneNumber.message : ''}
            </p>
          </div>
          <input
            placeholder="e.g. 07123456789"
            type="text"
            id="phoneNumber"
            defaultValue={
              userInfo ? userInfo.phoneNumber : defaults.phoneNumber
            }
            {...register('phoneNumber')}
            className={`outline ${
              errors.phoneNumber
                ? 'outline-error focus:error'
                : 'outline-light-grey focus:outline-secondary'
            } py-2 px-3 rounded-md`}
          />
        </div>
        <button
          onClick={() => onUpdatePageNum(0)}
          className="absolute left-0 bottom-[-77px] py-2 rounded-lg text-cool-grey font-semibold"
        >
          Go Back
        </button>
        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="absolute right-0 bottom-[-80px] bg-primary py-3 px-6 rounded-lg text-primary-active disabled:bg-cool-grey"
        >
          Next Step
        </button>
      </div>
    </form>
  );
}

export default UserForm;
