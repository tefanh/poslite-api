import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { hash } from 'src/auth/hashing';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findOne(login: string): Promise<UserEntity> {
    return await this.userRepository.findOne({ login: login });
  }

  async remove(login: string): Promise<void> {
    await this.userRepository.delete({ login: login });
  }

  async create(body: UserEntity): Promise<any> {
    const nobj: UserEntity = {
      ...body,
      password: await hash(body.password),
    };
    return await this.userRepository.insert({ ...nobj });
  }
}
