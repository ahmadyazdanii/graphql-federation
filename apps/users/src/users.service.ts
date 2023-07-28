import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UUID } from 'crypto';
import { UsersRepository } from './users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly userRepository: UsersRepository) {}

  create(createUserInput: CreateUserInput) {
    if (this.userRepository.isExists(createUserInput.email)) {
      throw new UnprocessableEntityException(
        'User is exists with the email address',
      );
    } else {
      return this.userRepository.insertOne(createUserInput);
    }
  }

  findAll() {
    return this.userRepository.findAll();
  }

  findOne(id: UUID) {
    const user = this.userRepository.findById(id);

    if (!user) {
      throw new NotFoundException("The user doesn't exists");
    } else {
      return user;
    }
  }

  update(id: UUID, updateUserInput: UpdateUserInput) {
    const updatedUser = this.userRepository.updateOne(id, updateUserInput);

    if (!updatedUser) {
      throw new NotFoundException("The user doesn't exists");
    } else {
      return updatedUser;
    }
  }

  remove(id: UUID) {
    const removedUser = this.userRepository.deleteOne(id);

    if (!removedUser) {
      throw new NotFoundException("The user doesn't exists");
    } else {
      return removedUser;
    }
  }
}
