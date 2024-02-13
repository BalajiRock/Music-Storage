import { Routes } from '@angular/router';
import { AboutComponent } from './MyComponents/about/about.component';
import { ListenComponent } from './MyComponents/listen/listen.component';
import { UploadSongsComponent } from './MyComponents/upload-songs/upload-songs.component';

export const routes: Routes = [
  { path:'Listen', component: ListenComponent },
  { path:'UploadSongs', component: UploadSongsComponent },
  { path:'About', component: AboutComponent },

];
