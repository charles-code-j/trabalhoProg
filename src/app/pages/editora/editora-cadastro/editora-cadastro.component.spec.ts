import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {  EditoraCadastroComponent } from './editora-cadastro.component';

describe('EditoraCadastroComponent', () => {
  let component: EditoraCadastroComponent;
  let fixture: ComponentFixture<EditoraCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditoraCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditoraCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
