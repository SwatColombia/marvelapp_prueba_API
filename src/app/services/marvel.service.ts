import { Injectable } from '@angular/core';// esto quiere decir que este servicio se puede inyectar en otro componente
import { HttpClient,HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({// a veces este decorador viene vacio y cuando vinen vacion podremos crear una uunica instancia
  providedIn: 'root'//esta es una forma automatica de importar servicios
})
export class MarvelService {

constructor(private http :HttpClient) {

}
getQuery( query : string ){

  const url = `https://gateway.marvel.com:443/v1/public/${ query }`
  //getCharacters() {

  const headers = new HttpHeaders({
      'ts' :'1',
      'hash' : '810769ff9c72785b2d75b7f6f3aad258',
      'apikey': 'e57edbf4df58748839ebec5783eb9672'


  });
  return this.http.get(url, { headers });
    //const KEY = 'e57edbf4df58748839ebec5783eb9672';

    //this.http.get('https://gateway.marvel.com:443/v1/public/characters?apikey='+ KEY, {headers});

  }

getCharacters(){


  return this.getQuery('?apikey=e57edbf4df58748839ebec5783eb9672')
          .pipe( map( data => ['characters']));

}

getCharactersv2() {

  let params = new HttpParams();

  params.append('ts', 1);
  params.append('hash', '810769ff9c72785b2d75b7f6f3aad258');
  params.append('apikey', 'e57edbf4df58748839ebec5783eb9672')

  // return this.http.get(`http://gateway.marvel.com/v1/public/characters`, {params:params})
  return this.http.get(`http://gateway.marvel.com/v1/public/characters?ts=1&hash=810769ff9c72785b2d75b7f6f3aad258&apikey=e57edbf4df58748839ebec5783eb9672`)

}


}






