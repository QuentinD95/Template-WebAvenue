import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LafasPage } from './lafas.page';

describe('LafasPage', () => {
  let component: LafasPage;
  let fixture: ComponentFixture<LafasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LafasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LafasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
