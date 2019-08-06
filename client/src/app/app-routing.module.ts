import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DividerComponent } from '../app/divider/divider.component';
import { HomeComponent } from './home/home.component';
import { OutputComponent } from './output/output.component';

const appRoutes: Routes = [
   { path: '' , component : HomeComponent},
   { path: 'playground' , component: DividerComponent },
   {path: 'output', component: OutputComponent}
];

@NgModule({
    imports: [ RouterModule.forRoot(
      appRoutes,
      { useHash: true }
    )],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }