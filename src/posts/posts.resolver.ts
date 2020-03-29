import { Resolver, Query, Args } from '@nestjs/graphql';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Post as PostEntity } from './entities/post.entity';

@Resolver()
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(returns => [Post])
  async posts(): Promise<PostEntity[]> {
    return this.postsService.getAll();
  }
}
