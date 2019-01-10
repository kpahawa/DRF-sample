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

  constructor(private router: Router, private http: HTTPService) { }

  ngOnInit() {
  }

  createChatRoom() {
    if (this.roomName.length > 0 && this.userName.length > 0) {
      sessionStorage.setItem('user', this.userName);
      this.router.navigate(['room', this.roomName]);
    }
  }

}
