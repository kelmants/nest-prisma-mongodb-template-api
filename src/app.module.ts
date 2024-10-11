import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { LocationsModule } from './locations/locations.module';
import { AddressesModule } from './addresses/addresses.module';
import { ProfilesModule } from './profiles/profiles.module';
import { EventsModule } from './events/events.module';

@Module({
  imports: [UsersModule, AuthModule, LocationsModule, AddressesModule, ProfilesModule, EventsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
