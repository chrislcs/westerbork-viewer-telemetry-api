import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LessThan, MoreThanOrEqual, Repository } from 'typeorm';

import { Session } from './session.entity';
import { SessionDto } from './dto/session.dto';
import { SessionsQueryDto } from './dto/sessions-query.dto';

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(Session)
    private readonly sessionsRepository: Repository<Session>,
  ) {}

  createOrUpdate(sessionDto: SessionDto): Promise<Partial<Session>> {
    return this.sessionsRepository.save(sessionDto);
  }

  findAll(query: SessionsQueryDto): Promise<Session[]> {
    const where: { [key: string]: any } = {};
    if (typeof query.startDateTime !== 'undefined') {
      where.createdAt = MoreThanOrEqual(query.startDateTime);
    }
    if (typeof query.endDateTime !== 'undefined') {
      where.createdAt = LessThan(query.endDateTime);
    }
    if (typeof query.onPremise !== 'undefined') {
      where.onPremise = query.onPremise;
    }
    if (typeof query.valid !== 'undefined') {
      where.valid = query.valid;
    }
    return this.sessionsRepository.find({
      take: query.limit,
      skip: query.offset,
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
