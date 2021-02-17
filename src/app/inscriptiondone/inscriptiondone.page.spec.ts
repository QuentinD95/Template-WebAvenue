import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InscriptiondonePage } from './inscriptiondone.page';

describe('InscriptiondonePage', () => {
  let component: InscriptiondonePage;
  let fixture: ComponentFixture<InscriptiondonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InscriptiondonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InscriptiondonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
