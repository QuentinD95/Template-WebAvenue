import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormulePage } from './formule.page';

describe('FormulePage', () => {
  let component: FormulePage;
  let fixture: ComponentFixture<FormulePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormulePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormulePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
