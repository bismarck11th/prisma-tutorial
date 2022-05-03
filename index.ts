import { Prisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  /* CREATE
  await prisma.user.create({
    data: {
      name: 'Alice',
      email: 'alice@prisma.com',
      posts: {
        create: { title: 'Hello World' }
      },
      profile: {
        create: { bio: 'I like turtles' }
      }
    }
  });
  */
  
  /* READ
  const allUsers = await prisma.user.findMany({
    include: {
      posts: true,
      profile: true
    }
  });
  */
  
  /* UPDATE
  const post = await prisma.post.update({
    where: { id: 1 },
    data: { published: true }
  });
  */
  
  /* DELETE
  const deleteUser = await prisma.user.delete({
    where: { email: 'alice@prisma.com' }
  });
  */
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
