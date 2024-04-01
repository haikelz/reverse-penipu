import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import axios from 'axios';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  async function sendMessage() {
    try {
      while (true) {
        const response = await axios.get(
          `https://api.telegram.org/bot6953428289:AAF6HdVeyFcujjTrsPHwFOq34wDhEYn0Jyk/sendMessage?parse_mode=markdown&chat_id=6875782931&text="Sesungguhnya, dosa itu atas orang-orang yang berbuat zalim kepada manusia dan melampaui batas di muka bumi tanpa hak. Mereka itu mendapat azab yang pedih. (QS Asysyura [42]: 42)." `,
        );

        console.log(response.data);
      }
    } catch (err) {
      console.error(err.message);
    }
  }

  sendMessage();
  sendMessage();
  sendMessage();
  sendMessage();

  await app.listen(3000);
}

bootstrap();
