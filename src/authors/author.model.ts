import { ObjectType, Field, Int, ID } from '@nestjs/graphql';
import { Post } from '../posts/post.model';

@ObjectType({ description: `Author` })
export class Author {
  @Field(type => ID)
  id: string;

  @Field({ nullable: true })
  firstName?: string;

  @Field({ nullable: true })
  lastName?: string;

  @Field(type => [Post], { nullable: 'items' })
  posts: Post[];
}
