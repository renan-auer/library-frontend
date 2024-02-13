import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { YearsWithMultipleWinnersComponent } from '../components/years-with-multiple-winners/years-with-multiple-winners.component';
import { StudiosWinnersComponent } from '../components/studios-winners/studios-winners.component';
import { ProducersIntervalBetweenWinsComponent } from '../components/producers-interval-between-wins/producers-interval-between-wins.component';
import { MoviesWinnersByYearComponent } from '../components/movies-winners-by-year/movies-winners-by-year.component';
import { HttpClientModule } from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule ],
      declarations: [DashboardComponent, YearsWithMultipleWinnersComponent, StudiosWinnersComponent, ProducersIntervalBetweenWinsComponent, MoviesWinnersByYearComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('should create four div with .card class', () => {
    const fixture = TestBed.createComponent(DashboardComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    const elements = compiled.getElementsByClassName('card')
    expect(elements).toHaveSize(4);
  });

});
