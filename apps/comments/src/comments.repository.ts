import { UUID, randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';
import { Comment } from './comments.interface';

@Injectable()
export class CommentsRepository {
  private repository: Comment[];

  constructor() {
    this.repository = [];
  }

  insertOne(instance: Omit<Comment, 'id'>): Comment {
    const newComment = { id: randomUUID(), ...instance };

    this.repository.push(newComment);

    return newComment;
  }

  updateOne(id: UUID, instance: Partial<Omit<Comment, 'id'>>): Comment {
    for (let index = 0; index < this.repository.length; index++) {
      const comment = this.repository[index];

      if (comment.id === id) {
        const updatedComment = { ...comment, ...instance };

        this.repository[index] = updatedComment;

        return updatedComment;
      }
    }

    return undefined;
  }

  deleteOne(id: UUID): Comment {
    for (let index = 0; index < this.repository.length; index++) {
      const comment = this.repository[index];

      if (comment.id === id) {
        return this.repository.splice(index, 1)[0];
      }
    }

    return undefined;
  }

  findAll(): Comment[] {
    return [...this.repository];
  }

  findById(id: UUID): Comment {
    for (let index = 0; index < this.repository.length; index++) {
      const comment = this.repository[index];

      if (comment.id === id) {
        return { ...comment };
      }
    }

    return undefined;
  }

  findByUserId(user_id: UUID) {
    const userComments: Comment[] = [];

    for (let index = 0; index < this.repository.length; index++) {
      const post = this.repository[index];

      if (post.user_id === user_id) {
        userComments.push(post);
      }
    }

    return userComments;
  }

  findByPostId(post_id: UUID) {
    const PostComments: Comment[] = [];

    for (let index = 0; index < this.repository.length; index++) {
      const post = this.repository[index];

      if (post.post_id === post_id) {
        PostComments.push(post);
      }
    }

    return PostComments;
  }
}
