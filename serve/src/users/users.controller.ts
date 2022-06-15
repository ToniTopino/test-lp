import { Controller, Get, Body, Patch, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Users API')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/profile/:id')
  @ApiOperation({
    summary: 'Get user by id',
    description: 'Get user by id',
  })
  @ApiOkResponse({ type: UserDto })
  requestUser(@Param('id') id: string): Promise<UserDto> {
    return this.usersService.requestUser(id);
  }

  @Patch('/profile/update')
  @ApiOperation({
    summary: 'Update user by id',
    description: 'Update user by id',
  })
  @ApiOkResponse({ type: UpdateUserDto })
  updateUser(@Body() updateUserDto: UpdateUserDto): Promise<UserDto> {
    return this.usersService.updateUser(updateUserDto);
  }
}
