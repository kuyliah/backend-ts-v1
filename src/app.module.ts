import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import config from './config/keys';
import 'dotenv/config';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_URI), SharedModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
