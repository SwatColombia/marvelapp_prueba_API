import { MarvelService } from './../../services/marvel.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit  {

newCaracteres : any[] = [];

  constructor( private marvel : MarvelService ) {


    this.marvel.getCharactersv2().subscribe(res => {
      console.log(res);
    })



   }

  ngOnInit() {
    this.marvel.getCharactersv2().subscribe(res => {
      console.log(res);
    })
  }

  }

