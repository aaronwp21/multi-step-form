import { NextApiRequest, NextApiResponse } from "next";

import {
  fetchAccounts,
  checkEmailClash,
  createAccount
} from '@/lib/api-functions/account/queries';

export const checkAccount = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { email } = req.query;

  try {
    let data = [];
    if (email) {
      data = await checkEmailClash(email);
    } else {
      data = await fetchAccounts();
    }
    res.status(200).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
}

export const addAccount = async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  const { accountObj } = req.body;

  try {
    const data = await createAccount(accountObj);
    res.status(201).json(data);
  } catch (err) {
    console.error(err);
    res.status(500).send(err)
  }
}