import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { RoomComponent } from './components/room/room.component';


@NgModule({
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [HomeComponent, RoomComponent],
  exports: [HomeComponent]
})
export class ChatModule {
  static loadModule(): ModuleWithProviders {
    return {
      ngModule: ChatModule,
      providers: []
    };
  }
}
