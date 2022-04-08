import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Session } from './session.entity';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionsRepository: Repository<Session>,
  ) {}

  create(): Promise<Session> {
    return this.sessionsRepository.save({});
  }

  findAll(): Promise<Session[]> {
    return this.sessionsRepository.find();
  }

  async findOne(id: string): Promise<Session> {
    const session = await this.sessionsRepository.findOneBy({ id });
    if (!session) {
      throw new NotFoundException();
    }
    return session;
  }
}
