import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubinfoComponent } from './githubinfo.component';

describe('GithubinfoComponent', () => {
  let component: GithubinfoComponent;
  let fixture: ComponentFixture<GithubinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
