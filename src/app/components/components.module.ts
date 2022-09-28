import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableComponent} from "./table/table.component";
import {LoaderComponent} from "./loader/loader.component";



@NgModule({
  declarations: [
    TableComponent,
    LoaderComponent
  ],
  exports: [
    LoaderComponent,
    TableComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
