import { Injectable } from '@nestjs/common';
import { CreateCommentInput } from './dto/create-comment.input';
import { UpdateCommentInput } from './dto/update-comment.input';
import { CommentsRepository } from './comments.repository';
import { UUID } from 'crypto';

@Injectable()
export class CommentsService {
  constructor(private readonly commentsRepository: CommentsRepository) {}

  create(createCommentInput: CreateCommentInput) {
    return this.commentsRepository.insertOne(createCommentInput);
  }

  findAll() {
    return this.commentsRepository.findAll();
  }

  findOne(id: UUID) {
    return this.commentsRepository.findById(id);
  }

  update(id: UUID, updateCommentInput: UpdateCommentInput) {
    return this.commentsRepository.updateOne(id, updateCommentInput);
  }

  remove(id: UUID) {
    return this.commentsRepository.deleteOne(id);
  }

  forUser(user_id: UUID) {
    return this.commentsRepository.findByUserId(user_id);
  }

  forPost(post_id: UUID) {
    return this.commentsRepository.findByPostId(post_id);
  }
}
