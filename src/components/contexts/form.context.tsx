import React, { createContext, useState, useCallback } from 'react';

type userInfo = {
  name: string;
  email: string;
  phoneNumber: string | undefined;
};

type FormContextProps = {
  onUpdatePageNum: (num: number) => void;
  onUpdatePlan: (num: number) => void;
  onUpdateFrequency: () => void;
  onUpdateUserInfo: (data: userInfo) => void;
  pageNum: number;
  plan: number;
  frequency: boolean;
  userInfo: userInfo;
};

export const FormContext = createContext<FormContextProps>({
  onUpdatePageNum: () => null,
  onUpdatePlan: () => null,
  onUpdateFrequency: () => null,
  onUpdateUserInfo: () => null,
  pageNum: 0,
  plan: 0,
  frequency: true,
  userInfo: { name: '', email: '', phoneNumber: '' },
});

export const FormProvider = ({ children }: React.PropsWithChildren) => {
  const [pageNum, setPageNum] = useState(0);
  const [plan, setPlan] = useState(0);
  const [frequency, setFrequency] = useState(true);
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const onUpdatePageNum = useCallback((num: number) => {
    setPageNum(num);
  }, []);

  const onUpdatePlan = useCallback((num: number) => {
    setPlan(num);
  }, []);

  const onUpdateFrequency = useCallback(() => {
    setFrequency((prevState) => !prevState);
  }, []);

  const onUpdateUserInfo = useCallback((data: userInfo) => {
    const { name, email, phoneNumber } = data;

    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      name,
      email,
      phoneNumber: phoneNumber !== undefined ? phoneNumber : '',
    }));
  }, []);

  return (
    <FormContext.Provider
      value={{
        onUpdatePageNum,
        onUpdatePlan,
        onUpdateFrequency,
        onUpdateUserInfo,
        pageNum,
        plan,
        frequency,
        userInfo,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};