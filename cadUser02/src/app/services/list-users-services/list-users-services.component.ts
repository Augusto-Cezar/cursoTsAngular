import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-list-users-services',
  templateUrl: './list-users-services.component.html',
  styleUrls: ['./list-users-services.component.css']
})
export class ListUsersServicesComponent {

  constructor (private http: HttpClient) {}
  
}
