import '@/lib/api-functions/db';
import Account from './model';

type accountObject = {
  name: string;
  email: string;
  phoneNumber: string | null;
  subscription: object
}

export const fetchAccounts = async (query={}) => {
  return await Account.find(query).exec();
}

export const checkEmailClash = async (newEmail: string | string[]) => {
  return await Account.findOne({email: newEmail}).exec();
}

export const createAccount = async (accountObj: accountObject) => {
  const newAccount = new Account({
    name: accountObj.name,
    email: accountObj.email,
    phoneNumber: accountObj.phoneNumber,
    subscription: accountObj.subscription
  });
  const result = await newAccount.save();
  return result;
}