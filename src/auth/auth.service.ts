import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { LoginDto, RegisterDto } from './dto/auth.dto';
import { isEmptyOrUndefinedOrNull } from '../common/utils/EmptyOrUndefinedOrNull.utils';
import { User } from '../users/entities/user.entity';
import { EventsService } from 'src/events/events.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private eventService: EventsService,
  ) {}

  async login(payload: LoginDto, user: User) {
    const token = this.jwtService.sign({
      identifier: payload.identifier,
      sub: user.id,
    });

    this.eventService.notificationUserLogged({ id: user.id, identifier: user.identifier });
    return {
      access_token: token,
    };
  }

  async register(payload: RegisterDto) {
    const password = bcrypt.hashSync(payload.password, 10);
    const result = await this.usersService.create({
      identifier: payload.identifier,
      enabled: true,
      password,
    });
    delete result.password;

    const token = await this.jwtService.signAsync({
      username: payload.identifier,
      sub: result.id,
    });

    this.eventService.notificationUserRegistered({ id: result.id, identifier: result.identifier });

    return { access_token: token };
  }

  async validateUser(identifier: string, password: string): Promise<User> {
    const user = await this.usersService.findOneByIdentifier(identifier);
    if (isEmptyOrUndefinedOrNull(user)) {
      throw new UnauthorizedException('Invalid token');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (user && isMatch) {
      user.password = 'woff';
      delete user.password;
      return user as User;
    }
    return null;
  }
}
