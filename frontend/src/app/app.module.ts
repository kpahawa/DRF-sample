import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { HttpModule, XSRFStrategy, CookieXSRFStrategy } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { Config } from './config/config';
import { ApiUrlFactory } from './services/api-url-factory.service';
import { HTTPService } from './services/http.service';
import { RouterModule } from '@angular/router';

import { ChatModule } from './chat/chat.module';
import { ChatRouting } from './chat/chat.routing';


@NgModule({
  declarations: [
	AppComponent,
  ],
  imports: [
	BrowserModule,
	// AppRoutingModule,
	FormsModule,
	ReactiveFormsModule,
	HttpModule,
	HttpClientModule,
	ReactiveFormsModule,
	ChatRouting,
	ChatModule.loadModule(),
  ],
  providers: [ApiUrlFactory,
	Config,
	HTTPService,
      RouterModule,
	{
	  provide: XSRFStrategy,
	  useValue: new CookieXSRFStrategy('csrftoken', 'X-CSRFToken')
	},
	DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
