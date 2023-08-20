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
  onUpdateConfirmed: () => void;
  setShowModal: (bool: boolean) => void;
  pageNum: number;
  plan: number;
  frequency: boolean;
  userInfo: userInfo;
  confirmed: boolean;
  showModal: boolean;
};

export const FormContext = createContext<FormContextProps>({
  onUpdatePageNum: () => null,
  onUpdatePlan: () => null,
  onUpdateFrequency: () => null,
  onUpdateUserInfo: () => null,
  onUpdateConfirmed: () => null,
  setShowModal: () => null,
  pageNum: 0,
  plan: 0,
  frequency: true,
  userInfo: { name: '', email: '', phoneNumber: '' },
  confirmed: false,
  showModal: false,
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
  const [confirmed, setConfirmed] = useState(false);
  const [showModal, changeShowModal] = useState(false);

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

  const onUpdateConfirmed = useCallback(() => {
    setConfirmed(true);
  }, [])

  const setShowModal = useCallback((bool: boolean) => {
    changeShowModal(bool);
  }, [])

  return (
    <FormContext.Provider
      value={{
        onUpdatePageNum,
        onUpdatePlan,
        onUpdateFrequency,
        onUpdateUserInfo,
        onUpdateConfirmed,
        setShowModal,
        pageNum,
        plan,
        frequency,
        userInfo,
        confirmed,
        showModal
      }}
    >
      {children}
    </FormContext.Provider>
  );
};