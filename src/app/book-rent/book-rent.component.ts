import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';
import { BookRentService } from '../services/book-rent.service';
import { BookRent } from '../models/book-rent.model';

@Component({
  selector: 'app-book-rent',
  templateUrl: './book-rent.component.html',
  styleUrls: ['./book-rent.component.css']
})
export class BookRentComponent implements OnInit {

  constructor(
    private bookRentService: BookRentService,
    private bookService: BookService,
  ) { }

  username: any
  bookId: any

  booksRent: BookRent[] = []
  books: Book[] = []

  showAlert = false
  messageAlert = ""
  classAlert = ""

  ngOnInit(): void {
    this.getBooksRent()
    this.bookService.list().subscribe(data => {
      this.books = data.content
    })
  }

  getBooksRent() {
    this.bookRentService.list().subscribe(data => {
      this.booksRent = data.content
      this.booksRent.forEach(b => {
        b.startDate = b.startDate.substring(0, b.startDate.length - 7);
        b.endDate = b.endDate.substring(0, b.endDate.length - 7);
      })
    })
  }

  rentBook() {
    this.bookRentService.rent(this.username, this.bookId).subscribe(data => {
      if (data.error) {
        this.showAlert = true
        this.messageAlert = data.error
        this.classAlert = 'alert-danger'
        return
      }
      this.showAlert = true
      this.messageAlert = "Aluguel de livro realizado com sucesso!"
      this.classAlert = 'alert-success'
      this.getBooksRent()
    })
  }

  returnBook(rent: BookRent) {
    this.bookRentService.returnBook(rent.id as string).subscribe(data => {
      if (data.error) {
        this.showAlert = true
        this.messageAlert = data.error
        this.classAlert = 'alert-danger'
        return
      }
      this.showAlert = true
      this.messageAlert = "Devolução de livro realizado com sucesso!"
      this.classAlert = 'alert-success'
      this.getBooksRent()
    })
  }



  newRent() {
    this.username = null
    this.bookId = null
  }


}
