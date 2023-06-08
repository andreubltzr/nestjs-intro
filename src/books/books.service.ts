import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
  findAll(params): any {
    return params > length
      ? `findAll funcionando con ${params}`
      : 'findAll funcionando';
  }

  findBook(bookId: string) {
    return `findBook funcionando con bookId ${bookId}`;
  }
}
