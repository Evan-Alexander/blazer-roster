import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlazerDetailComponent } from './blazer-detail/blazer-detail.component';
import { ManagerComponent } from './manager/manager.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'blazer/:id',
    component: BlazerDetailComponent
  },
  {
    path: 'manager',
    component: ManagerComponent
  }
 ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
