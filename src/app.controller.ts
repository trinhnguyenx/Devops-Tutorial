import { Controller, Get, Response } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello, world!77797777999';
  }
}
