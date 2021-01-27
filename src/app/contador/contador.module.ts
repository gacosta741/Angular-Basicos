import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { contadorComponet } from './contador.component';


@NgModule({

  declarations:[
    contadorComponet
  ],

  exports:[
    contadorComponet,
  ],

  imports:[
    CommonModule,

  ]

})

export class ContadorModule {

}
