import { createRouter } from "next-connect";
import type { NextApiRequest, NextApiResponse } from "next";
import {
  checkAccount,
  addAccount
} from '@/lib/api-functions/account/controllers';

const baseRoute = '/api/account/:email?';

const router = createRouter<NextApiRequest, NextApiResponse>();

router
  .get(baseRoute,async (req, res) => {
    checkAccount(req, res);
  })
  .post(baseRoute, async (req, res) => {
    addAccount(req, res);
  })

export default router.handler({
  onError: (err, req, res) => {
    console.error(err);
    res.status(500).end('Error')
  },
  onNoMatch: (req, res) => {
    res.status(404).end('Page not found')
  }
})