import prisma from "../../lib/prismaDb";
import { Prisma } from "@prisma/client";

interface Formdata {
  name: string;
  email: string;
  password: string;
}

export default async function createUser({ formdata }: { formdata: Formdata }) {
  const user = await prisma.user.create({
    data: {
      name: formdata.name,
      email: formdata.email,
      password: formdata.password,
    } as Prisma.UserCreateInput,
  });

  return user;
}
