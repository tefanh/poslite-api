import { Controller, Delete, Get, Param, Post, Request } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get(':login')
  findOne(@Param('login') login: string) {
    return this.userService.findOne(login);
  }

  @Post()
  create(@Request() req) {
    return this.userService.create(req.body);
  }

  @Delete(':login')
  delete(@Param('login') login: string) {
    return this.userService.remove(login);
  }
}
