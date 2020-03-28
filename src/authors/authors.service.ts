import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Author } from './author.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}

  async getById(id: string): Promise<Author> {
    return this.authorsRepository.findOne({ id });
  }

  async getAll(): Promise<Author[]> {
    return this.authorsRepository.find();
  }
}
