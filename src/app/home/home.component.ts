import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public titulo = 'pagina principal';

  constructor() {
    this.titulo = 'Pagina principal';
   }

  ngOnInit() {
    console.log('Se ha cargado el componente home.component.ts');
  }

}
