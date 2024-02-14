import { Book } from "./book.model"

export interface BookRent {
    id?: string
    username: string
    startDate: string
    endDate: string
    bookIid: string
    book: Book
}