import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserClassProgressCreateInput[] = [
  {
    userId: '123',
    classId: 'ABC',
    watched: false
  },
  {
    userId: '456',
    classId: 'DEF',
    watched: true
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const userClassProgress = await prisma.userClassProgress.create({
      data: u,
    })
    console.log(`Created userclassprogress with userID: ${userClassProgress.userId}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
