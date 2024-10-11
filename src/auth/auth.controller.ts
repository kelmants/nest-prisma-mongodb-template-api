import { ApiBody, ApiTags } from '@nestjs/swagger';
import { Body, Controller, HttpStatus, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { LocalAuthGuard } from './local-auth.guard';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { User } from '../users/entities/user.entity';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @ApiBody({ type: LoginDto })
  login(@Body() payload: LoginDto, @Req() req: Request, @Res() res: Response) {
    const { identifier, password }: LoginDto = payload;

    this.authService
      .login({ identifier, password }, req.user as User)
      .then((response) => {
        res.status(HttpStatus.ACCEPTED).json({ access_token: response.access_token });
      })
      .catch((reason) => {
        res.status(HttpStatus.SERVICE_UNAVAILABLE).json({ message: 'Not reason', reason });
      });
  }
  @Post('/register')
  @ApiBody({ type: RegisterDto })
  register(@Body() body: RegisterDto, @Res() res: Response) {
    this.authService
      .register({
        identifier: body.identifier,
        password: body.password,
      })
      .then((result) => {
        res.status(HttpStatus.CREATED).json({ access_token: result.access_token });
      })
      .catch((reason) => res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: 'error', reason }));
  }
}
