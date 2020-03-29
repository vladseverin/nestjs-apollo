import { ObjectType, Field, Int, ID } from '@nestjs/graphql';

@ObjectType({ description: `Post` })
export class Post {
  @Field(type => ID)
  id: string;

  @Field()
  title: string;

  @Field(type => Int, { nullable: true })
  votes?: number;

  @Field(type => Date, { nullable: true })
  createdAt: number;

  @Field(type => Date, { nullable: true })
  updatedAt: number;
}
