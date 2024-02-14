import { Component ,EventEmitter ,Output} from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SongData } from '../data';

@Component({
  selector: 'app-upload-songs',
  standalone: true,
  imports: [RouterModule, HttpClientModule, FormsModule],
  templateUrl: './upload-songs.component.html',
  styleUrl: './upload-songs.component.css'
})
export class UploadSongsComponent {

  songName : String = ""
  genre : String = ""
  fav : boolean = false
  audio:any;
  constructor(private http: HttpClient) {}
	title = 'api-angular';
  getFile(event:any){
    this.audio = event.target.files[0]
    console.log("file",this.audio);

  }
  onSubmit(){
    const data = {
      SongName:this.songName,
      genre:this.genre,
      fav:this.fav
    }
    console.log(this.audio)
    const formData = new FormData();
    formData.append("audiofile",this.audio);
    // formData.append("SongName",this.songName);
		this.http.post<any>('http://127.0.0.1:5000/PostDataToServer', data).subscribe(data => {
        console.log(data)})

  }
}
