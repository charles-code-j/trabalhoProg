import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LivroPesquisaComponent } from './livro-pesquisa.component';

describe('LivroPesquisaComponent', () => {
  let component: LivroPesquisaComponent;
  let fixture: ComponentFixture<LivroPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivroPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LivroPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
