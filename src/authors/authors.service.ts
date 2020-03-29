import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Author } from './entities/author.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AuthorsService {
  constructor(
    @InjectRepository(Author)
    private authorsRepository: Repository<Author>,
  ) {}

  async getById(id: string): Promise<Author> {
    return this.authorsRepository.findOne({
      where: { id },
      relations: ['posts'],
    });
  }

  async getAll(): Promise<Author[]> {
    return this.authorsRepository.find({ relations: ['posts'] });
  }
}
