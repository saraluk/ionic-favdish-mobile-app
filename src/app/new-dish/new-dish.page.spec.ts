import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewDishPage } from './new-dish.page';

describe('NewDishPage', () => {
  let component: NewDishPage;
  let fixture: ComponentFixture<NewDishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewDishPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewDishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
