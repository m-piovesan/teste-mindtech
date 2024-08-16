import { prismaClient } from "../../config";

export class UserRepository {
  async findByEmail(email: string) {
    return prismaClient.user.findFirst({
      where: {
        email,
      },
    });
  }

  async create(email: string) {
    await prismaClient.user.create({
      data: {
        email,
      },
    });
  }

  async remove(email: string) {
    await prismaClient.user.delete({
      where: {
        email,
      },
    });
  }
}
