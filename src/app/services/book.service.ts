import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { Book } from '../models/book.model';
import { ApiResponse } from '../models/api.response';
import { Pagination } from '../models/pagination';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  list(name: string, author: string) {
    let url = `${environment.urlAPI}/book?`
    if(name) {
      url = `${url}name=${name}&`
    }
    if(author) {
      url = `${url}author=${author}&`
    }
    return this.http.get<Pagination<Book>>(url);
  }

  getById(id: string) {
    return this.http.get<ApiResponse<Book[]>>(`${environment.urlAPI}/book/${id}`);
  }

  save(book: Book) {
    return this.http.post<Book>(`${environment.urlAPI}/book`, book);
  }

  update(id: string, book: Book) {
    return this.http.put<Book>(`${environment.urlAPI}/book/${id}`, book);
  }

  delete(id: string) {
    return this.http.delete<Book>(`${environment.urlAPI}/book/${id}`);
  }
}
