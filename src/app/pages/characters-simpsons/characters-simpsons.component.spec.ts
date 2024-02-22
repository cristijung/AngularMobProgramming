import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersSimpsonsComponent } from './characters-simpsons.component';

describe('CharactersSimpsonsComponent', () => {
  let component: CharactersSimpsonsComponent;
  let fixture: ComponentFixture<CharactersSimpsonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharactersSimpsonsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CharactersSimpsonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
