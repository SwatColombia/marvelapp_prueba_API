import { Component, Input, OnInit} from '@angular/core';
import { Router} from '@angular/router'



@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent  {

  @Input()characters :any[] = [];

constructor ( private router : Router){}

  verCharacters( item: any){

    let charactersId;

    if (item.type === 'characters' ){
     charactersId = item.id;
    }else {
      charactersId = item.characters[0].id;

    }

    this.router.navigate(['/characters',charactersId])//esta es la mavegacion a la pagina artist y a el id de artista


  }

}
