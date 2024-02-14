import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Book } from '../models/book.model';
import { Pagination } from '../models/pagination';
import { BookRent } from '../models/book-rent.model';
import { ApiResponse } from '../models/api.response';

@Injectable({
  providedIn: 'root'
})
export class BookRentService {

  constructor(private http: HttpClient) { }

  list() {
    return this.http.get<Pagination<BookRent>>( `${environment.urlAPI}/book-rent`);
  }

  rent(username: string, bookId: string) {
    return this.http.post<ApiResponse<BookRent>>(`${environment.urlAPI}/book-rent/rent`, { username, bookId });
  }

  returnBook(id: string) {
    return this.http.post<ApiResponse<BookRent>>(`${environment.urlAPI}/book-rent/return/${id}`, null);
  }

}
