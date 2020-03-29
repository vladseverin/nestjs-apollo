import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { AuthorsModule } from './authors/authors.module';
import { PostsModule } from './posts/posts.module';
import {
  DB_CONNECTION_HOST,
  DB_CONNECTION_PORT,
  DB_CONNECTION_USERNAME,
  DB_CONNECTION_PASSWORD,
  DB_CONNECTION_DATABASE,
} from './environments';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: DB_CONNECTION_HOST,
      port: DB_CONNECTION_PORT,
      username: DB_CONNECTION_USERNAME,
      password: DB_CONNECTION_PASSWORD,
      database: DB_CONNECTION_DATABASE,
      entities: [join(__dirname, '../') + '**/*.entity.js'],
      dropSchema: true,
      synchronize: true,
    }),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    AuthorsModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
