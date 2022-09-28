import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule),
      },
      {
        path: 'user',
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
      },
      {
        path: 'user/:id',
        loadChildren: () => import('./pages/user/user.module').then(m => m.UserModule),
      }
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
