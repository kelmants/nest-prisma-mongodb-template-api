import { Injectable, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Injectable()
export class AppService {
  @UseGuards(JwtAuthGuard)
  getHello(): string {
    return 'Hello World!';
  }
}
