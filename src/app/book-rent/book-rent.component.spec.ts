import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { BookRentComponent } from './book-rent.component';

describe('BookRentComponent', () => {
  let component: BookRentComponent;
  let fixture: ComponentFixture<BookRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [BookRentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(BookRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

});
