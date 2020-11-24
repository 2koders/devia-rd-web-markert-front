import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/landing/home/home.component';
import { IndexComponent } from './pages/market/index/index.component';

const routes: Routes = [
  {
    path: '', 
     component: HomeComponent, 
    children: [{
      // path: ''
    }]
  },
  {
    path: 'market', 
    component: IndexComponent, 
    children: [{
      // path: ''
    }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
