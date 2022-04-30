import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';

import { Session } from './session.entity';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionsRepository: Repository<Session>,
  ) {}

  create(createSessionDto: CreateSessionDto): Promise<Session> {
    return this.sessionsRepository.save(createSessionDto);
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

  update(
    id: string,
    updateSessionDto: UpdateSessionDto,
  ): Promise<UpdateResult> {
    return this.sessionsRepository.update(id, updateSessionDto);
  }
}
