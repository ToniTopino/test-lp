import { Injectable } from '@nestjs/common';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectFirebaseAdmin, FirebaseAdmin } from 'nestjs-firebase';
import { isEmpty } from 'lodash';

@Injectable()
export class UsersService {
  private readonly userCollection = this.firebase.db.collection('users');

  constructor(
    @InjectFirebaseAdmin() private readonly firebase: FirebaseAdmin,
  ) {}

  async requestUser(id: string): Promise<any> {
    const user = await this.userCollection.doc(id).get();
    return isEmpty(user.data()) ? {} : user.data();
  }

  async updateUser(updateUserDto: UpdateUserDto): Promise<UpdateUserDto> {
    const user = await this.requestUser(updateUserDto.id);
    return isEmpty(user)
      ? this.create(updateUserDto)
      : this.dataUpdateUser(user, updateUserDto);
  }

  async create(userDto: UserDto): Promise<any> {
    return await this.userCollection
      .doc(userDto.id)
      .set(userDto)
      .then(() => this.userCollection.doc(userDto.id).get())
      .then((res) => res.data());
  }

  async dataUpdateUser(
    user: UserDto,
    updateUserDto: UpdateUserDto,
  ): Promise<any> {
    updateUserDto.score = user.score
      ? (user.score += updateUserDto.score) //Add scores to a user
      : (user.score = 1);
    return await this.userCollection
      .doc(user.id)
      .update(updateUserDto)
      .then(() => this.userCollection.doc(user.id).get())
      .then((res) => res.data());
  }
}
