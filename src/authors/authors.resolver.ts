import { Resolver, Query, Args } from '@nestjs/graphql';
import { Author } from './author.model';
import { AuthorsService } from './authors.service';
import { Author as AuthorEntity } from './entities/author.entity';

@Resolver(of => Author)
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query(returns => Author)
  async author(@Args('id') id: string): Promise<AuthorEntity> {
    return this.authorsService.getById(id);
  }

  @Query(returns => [Author])
  async authors(): Promise<AuthorEntity[]> {
    return this.authorsService.getAll();
  }
}
