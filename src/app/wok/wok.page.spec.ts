import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WokPage } from './wok.page';

describe('WokPage', () => {
  let component: WokPage;
  let fixture: ComponentFixture<WokPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WokPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WokPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
