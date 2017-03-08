import { TestBed, async } from '@angular/core/testing';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture, component, element;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule.forRoot()],
      declarations: [AppComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    element = fixture.debugElement.nativeElement;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'Tot'`, () => {
    expect(component.title).toEqual('Tot');
  });

  it('should render title in tag with id #tot-title', () => {
    expect(element.querySelector('#tot-title').textContent).toEqual('Tot');
  });

  it('should render version in tag with id #tot-version', () => {
    expect(element.querySelector('#tot-version').textContent).toEqual('v0.0.1');
  });
});
