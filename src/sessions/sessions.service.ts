import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, MoreThanOrEqual, Repository } from 'typeorm';

import { Session } from './session.entity';
import { SessionDto } from './session.dto';
import { SessionsQuery } from './sessions-query.validator';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionsRepository: Repository<Session>,
  ) {}

  createOrUpdate(sessionDto: SessionDto): Promise<Partial<Session>> {
    return this.sessionsRepository.save(sessionDto);
  }

  findAll(options: SessionsQuery): Promise<Session[]> {
    const where: { [key: string]: any } = {};
    if (typeof options.startDateTime !== 'undefined') {
      where.createdAt = MoreThanOrEqual(options.startDateTime);
    }
    if (typeof options.endDateTime !== 'undefined') {
      where.createdAt = LessThan(options.endDateTime);
    }
    if (typeof options.onPremise !== 'undefined') {
      where.onPremise = options.onPremise;
    }
    if (typeof options.valid !== 'undefined') {
      where.valid = options.valid;
    }
    return this.sessionsRepository.find({
      take: options.limit,
      skip: options.offset,
      where,
    });
  }

  async findOne(id: string): Promise<Session> {
    const session = await this.sessionsRepository.findOneBy({ id });
    if (!session) {
      throw new NotFoundException();
    }
    return session;
  }
}
