import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { InfoFormDisplayPage } from './pages/info-form-display/info-form-display.page';
import { InfoFormPage } from './pages/info-form/info-form.page';

const routes: Routes = [
  { 
    path: '', redirectTo: '/app-root', pathMatch: 'full' 
  },
  { 
    path: 'info-form',
    loadChildren: () => import('./pages/info-form/info-form.module').then( m => m.InfoFormPageModule),
  },
  { 
    path: 'info-form-display',
    loadChildren: () => import('./pages/info-form-display/info-form-display.module').then( m => m.InfoFormDisplayPageModule) 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
