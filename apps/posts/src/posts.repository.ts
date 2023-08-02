import { UUID, randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';
import { Post } from './posts.interface';

@Injectable()
export class PostsRepository {
  private repository: Post[];

  constructor() {
    this.repository = [];
  }

  insertOne(instance: Omit<Post, 'id'>): Post {
    const newPost = { id: randomUUID(), ...instance };

    this.repository.push(newPost);

    return newPost;
  }

  updateOne(id: UUID, instance: Partial<Omit<Post, 'id'>>): Post {
    for (let index = 0; index < this.repository.length; index++) {
      const post = this.repository[index];

      if (post.id === id) {
        const updatedPost = { ...post, ...instance };

        this.repository[index] = updatedPost;

        return updatedPost;
      }
    }

    return undefined;
  }

  deleteOne(id: UUID): Post {
    for (let index = 0; index < this.repository.length; index++) {
      const post = this.repository[index];

      if (post.id === id) {
        return this.repository.splice(index, 1)[0];
      }
    }

    return undefined;
  }

  findAll(): Post[] {
    return [...this.repository];
  }

  findById(id: UUID): Post {
    for (let index = 0; index < this.repository.length; index++) {
      const post = this.repository[index];

      if (post.id === id) {
        return { ...post };
      }
    }

    return undefined;
  }

  findByUserId(user_id: UUID): Post[] {
    const userPosts: Post[] = [];

    for (let index = 0; index < this.repository.length; index++) {
      const post = this.repository[index];

      if (post.user_id === user_id) {
        userPosts.push(post);
      }
    }

    return userPosts;
  }
}
