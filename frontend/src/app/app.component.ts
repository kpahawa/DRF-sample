import { Component, OnInit, Inject } from '@angular/core';
import { LoaderService } from './services/loader.service';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private loaderService: LoaderService = LoaderService.getInstance();

  constructor() {}

  ngOnInit() {
    this.loaderService.removeSpinner();
  }
}
