import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSongsComponent } from './upload-songs.component';

describe('UploadSongsComponent', () => {
  let component: UploadSongsComponent;
  let fixture: ComponentFixture<UploadSongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadSongsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadSongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
