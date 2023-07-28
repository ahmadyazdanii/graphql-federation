import { UUID, randomUUID } from 'crypto';
import { Injectable } from '@nestjs/common';
import { User } from './users.interface';

@Injectable()
export class UsersRepository {
  private repository: User[];

  constructor() {
    this.repository = [];
  }

  isExists(email: string): boolean {
    for (let index = 0; index < this.repository.length; index++) {
      if (this.repository[index].email === email) {
        return true;
      }
    }

    return false;
  }

  insertOne(instance: Omit<User, 'id'>): User {
    const newUser = { id: randomUUID(), ...instance };

    this.repository.push(newUser);

    return newUser;
  }

  updateOne(id: UUID, instance: Partial<Omit<User, 'id'>>): User {
    for (let index = 0; index < this.repository.length; index++) {
      const user = this.repository[index];

      if (user.id === id) {
        const updatedUser = { ...user, ...instance };

        this.repository[index] = updatedUser;

        return updatedUser;
      }
    }

    return undefined;
  }

  deleteOne(id: UUID): User {
    for (let index = 0; index < this.repository.length; index++) {
      const user = this.repository[index];

      if (user.id === id) {
        return this.repository.splice(index, 1)[0];
      }
    }

    return undefined;
  }

  findAll(): User[] {
    return [...this.repository];
  }

  findById(id: UUID): User {
    for (let index = 0; index < this.repository.length; index++) {
      const user = this.repository[index];

      if (user.id === id) {
        return { ...user };
      }
    }

    return undefined;
  }
}
