import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HTTPService } from '../../../services/http.service';
import { ApiUrlFactory } from '../../../services/api-url-factory.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private roomName = '';
  private userName = '';
  private randInt: number;
  private randMessage: string;

  constructor(private router: Router, private http: HTTPService, private factory: ApiUrlFactory) { }

  ngOnInit() {
    const baseURL = this.factory.getBaseUrl() + 'chat/';
    const backendURL = baseURL + 'home';
    this.http.getObject(backendURL).subscribe(
        data => {
          console.log("data", data);
          this.randInt = data.int;
          this.randMessage = data.message;
        }
    );
  }

  createChatRoom() {
    alert("Functionality not developed");
  }

}
