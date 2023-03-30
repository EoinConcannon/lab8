import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
//import { MovieService } from '../Services/movie.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, HttpClientModule, NgFor],
  //providers:[MovieService] //ionic v7 import services
})
export class HomePage {
  constructor( private http:HttpClient) {

  }

myMovies:any[]=[];

  ionViewWillEnter(){
    this.GetMovieData().subscribe(
      (data)=>{
        this.myMovies = data.Search;
      }
    );
  }

  GetMovieData():Observable<any>{
    return this.http.get('http://www.omdbapi.com/?apikey=2ee2ed84&s=%27war%27');
  }
}
