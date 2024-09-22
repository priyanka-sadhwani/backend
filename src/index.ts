import { Prisma, PrismaClient } from '@prisma/client'
import express from 'express'
import {ZenStackMiddleware} from "@zenstackhq/server/express";
import cors from 'cors';

const prisma = new PrismaClient()
const app = express()

app.use(express.json())

app.use(cors())

// app.post(`/addUserClassProgress`, async (req, res) => {
//   const { userId, classId, watched } = req.body
//
//   const result = await prisma.userClassProgress.create({
//     data: {
//       userId,
//       classId,
//       watched
//   }})
//   res.json(result)
// })
//
// app.get('/userClassProgress', async (req, res) => {
//   const users = await prisma.userClassProgress.findMany()
//   res.json(users)
// })

app.use(
    "/api/z",
    ZenStackMiddleware({
      // get enhanced Prisma client which uses Zenstack access policies over base Prisma client
      getPrisma: (request) => prisma,
    })
)

const server = app.listen(3000, () =>
  console.log(`
🚀 Server ready at: http://localhost:3000
⭐️ See sample requests: http://pris.ly/e/ts/rest-express#3-using-the-rest-api`),
)
