import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AddProductService {

  constructor(private  httpClient: HttpClient) { }

  API_URL  =  'https://colombia-tokio.herokuapp.com/';

  addProduct(): void {
    this.httpClient.post(`${this.API_URL}/deportistas/`+id+`/participaciones/`+idP+'/video/comentarios', formData).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
  }
}
