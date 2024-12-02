import { Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  {
    path: 'home',
    loadComponent: () => import('./shared/components/home/home.component').then((c) => c.HomeComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'details/:id',
    loadComponent: () => import('./shared/components/budget-details/budget-details.component').then((c) => c.BudgetDetailsComponent),
    canActivate: [AuthGuard]
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./shared/components/signup/signup.component').then((c) => c.SignupComponent)
  },

  { path: '**', redirectTo: 'home' }
];
