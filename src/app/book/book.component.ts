import { Component, OnInit } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor(
    private bookService: BookService
  ) { }

  ngOnInit(): void {
    this.getBooks()
  }

  nameFilter = ""
  authorFilter = ""

  idEdition: any
  name: any
  publishingCompany: any
  author: any

  books: Book[] = []

  showAlert = false
  messageAlert = ""

  getBooks() {
    this.bookService.list(this.nameFilter, this.authorFilter).subscribe(data => {
      this.books = data.content
    })
  }

  save() {
    this.saveOrUpdate().subscribe(data => {
      this.showAlert = true
      this.messageAlert = "Livro cadastrado com sucesso!"
      this.idEdition = undefined
      this.getBooks()
    })
  }

  saveOrUpdate() {
    const body = {
      author: this.author,
      name: this.name,
      publishingCompany: this.publishingCompany
    }
    if(this.idEdition) {
      return this.bookService.update(this.idEdition, body)
    }
    return this.bookService.save(body)
  }

  delete(id: string | undefined) {
    if (!id) return
    this.bookService.delete(id).subscribe(data => {
      this.showAlert = true
      this.messageAlert = "Livro removido com sucesso!"
      this.getBooks()
    })
  }

  newBook() {
    this.author = null
    this.name = null
    this.publishingCompany = null
    this.idEdition = null
  }

  edit(book: Book) {
    this.author = book.author
    this.name = book.name
    this.publishingCompany = book.publishingCompany
    this.idEdition = book.id as string
  }


}
