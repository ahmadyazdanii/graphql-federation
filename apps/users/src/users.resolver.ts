import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  ResolveReference,
} from '@nestjs/graphql';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UUID } from 'crypto';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOne(@Args('id', { type: () => String }) id: UUID) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(
    @Args('id', { type: () => String }) id: UUID,
    @Args('updateUserInput') updateUserInput: UpdateUserInput,
  ) {
    return this.usersService.update(id, updateUserInput);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => String }) id: UUID) {
    return this.usersService.remove(id);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: UUID }): User {
    return this.usersService.findOne(reference.id);
  }
}
