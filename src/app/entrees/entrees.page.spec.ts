import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EntreesPage } from './entrees.page';

describe('EntreesPage', () => {
  let component: EntreesPage;
  let fixture: ComponentFixture<EntreesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EntreesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
