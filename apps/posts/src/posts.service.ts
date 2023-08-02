import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { UpdatePostInput } from './dto/update-post.input';
import { PostsRepository } from './posts.repository';
import { UUID } from 'crypto';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  create(createPostInput: CreatePostInput) {
    return this.postsRepository.insertOne(createPostInput);
  }

  findAll() {
    return this.postsRepository.findAll();
  }

  findOne(id: UUID) {
    const post = this.postsRepository.findById(id);

    if (!post) {
      throw new NotFoundException("The post doesn't exists");
    } else {
      return post;
    }
  }

  update(id: UUID, updatePostInput: UpdatePostInput) {
    const updatedPost = this.postsRepository.updateOne(id, updatePostInput);

    if (!updatedPost) {
      throw new NotFoundException("The post doesn't exists");
    } else {
      return updatedPost;
    }
  }

  remove(id: UUID) {
    const removedPost = this.postsRepository.deleteOne(id);

    if (!removedPost) {
      throw new NotFoundException("The post doesn't exists");
    } else {
      return removedPost;
    }
  }

  forUser(user_id: UUID) {
    return this.postsRepository.findByUserId(user_id);
  }
}
