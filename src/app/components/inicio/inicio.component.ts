import { MarvelService } from './../../services/marvel.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RespuestaAPIMarvel, Result } from '../../interfaces/IApiMarvelRespuesta';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit {
  newCaracteres: Result[] = [];

  constructor(private marvel: MarvelService) {}

  ngOnInit(): void {
    this.marvel.getCharactersv2().subscribe((res: RespuestaAPIMarvel) => {
      this.newCaracteres = res.data.results;
      console.log(res);
    })
  }
}