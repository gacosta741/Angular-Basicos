import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})

export class ListadoComponent  {

 public heroesBorrados: string = '' ;

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor'];


  borrandoHeroe(){

    this.heroesBorrados =  this.heroes.shift() || '';

  }



}
