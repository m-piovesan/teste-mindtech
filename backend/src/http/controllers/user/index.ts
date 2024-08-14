import { Request, Response } from "express";
import { UserRepository } from "../../../database";

export class UserController {

  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository;
  }

  async create(req: Request, res: Response) {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    const user = await this.userRepository.findByEmail(email);
    if (user) {
      return res.status(409).json({ error: 'User already exists' });
    }

    await this.userRepository.create(email);
    return res.status(201).json({ message: 'User created successfully' });
  }
}