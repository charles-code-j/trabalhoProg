import { EditoraPesquisaComponent } from './editora-pesquisa.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('EditoraPesquisaComponent', () => {
  let component: EditoraPesquisaComponent;
  let fixture: ComponentFixture<EditoraPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoraPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoraPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
