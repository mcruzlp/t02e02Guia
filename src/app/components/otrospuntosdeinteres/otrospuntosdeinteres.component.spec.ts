import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtrospuntosdeinteresComponent } from './otrospuntosdeinteres.component';

describe('OtrospuntosdeinteresComponent', () => {
  let component: OtrospuntosdeinteresComponent;
  let fixture: ComponentFixture<OtrospuntosdeinteresComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OtrospuntosdeinteresComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtrospuntosdeinteresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
