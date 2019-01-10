import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RoomComponent } from './components/room/room.component';

const ChatRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'room/:roomName', component: RoomComponent },

];

@NgModule({
    imports: [RouterModule.forRoot(ChatRoutes)],
    exports: [RouterModule]
})
export class ChatRouting {}
