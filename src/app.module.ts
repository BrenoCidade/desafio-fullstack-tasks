import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { PrismaService } from './database/prisma.service';
import { AppController } from './app.controller';

@Module({
  imports: [TasksModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule { }
