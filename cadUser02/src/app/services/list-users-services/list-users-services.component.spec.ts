import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListUsersServicesComponent } from './list-users-services.component';

describe('ListUsersServicesComponent', () => {
  let component: ListUsersServicesComponent;
  let fixture: ComponentFixture<ListUsersServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListUsersServicesComponent]
    });
    fixture = TestBed.createComponent(ListUsersServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
