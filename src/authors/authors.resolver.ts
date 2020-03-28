import { Resolver, Query, Args } from '@nestjs/graphql';
import { Author } from './author.model';
import { AuthorsService } from './authors.service';

@Resolver(of => Author)
export class AuthorsResolver {
  constructor(private authorsService: AuthorsService) {}

  @Query(returns => Author)
  async author(@Args('id') id: string): Promise<Author> {
    return this.authorsService.getById(id);
  }

  @Query(returns => [Author])
  async authors(): Promise<Author[]> {
    return this.authorsService.getAll();
  }
}
