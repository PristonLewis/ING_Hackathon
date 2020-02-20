import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async(() => {

    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should set validation type', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.setValidationType('number');
    expect(component.validationType).toBe('number')
  })

  it('should do validation when type is number', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.setValidationType('number');
    component.inputEl= "12345";
    expect(component.validate()).toBeTruthy;
  })

  it('should do validation when type is letter', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.setValidationType('letter');
    component.inputEl= "abcd";
    expect(component.validate()).toBeTruthy;
  })

  it('should do validation when type is password', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.setValidationType('password');
    component.inputEl= "a1E@Wbc9";
    expect(component.validate()).toBeTruthy;
  })
  
  it('should do validation when type is number - negative', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.setValidationType('number');
    component.inputEl= "qwerty";
    expect(component.validate()).toBeFalsy;
  })

  it('should do validation when type is letter - negative', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.setValidationType('letter');
    component.inputEl= "12345";
    expect(component.validate()).toBeFalsy;
  })

  it('should do validation when type is password - negative', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    component.setValidationType('password');
    component.inputEl= "bc9";
    expect(component.validate()).toBeFalsy;
  })   
});
