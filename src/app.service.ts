import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getStatusApi(): string {
    return 'Api Rodando';
  }
}
