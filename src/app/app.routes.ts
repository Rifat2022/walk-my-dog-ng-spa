import { Routes } from '@angular/router';
import { DogsListComponent } from './dogsList/dogs-list.component';
import { DogViewComponent } from './dogView/dog-view.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'list' },
    { path: 'list', component: DogsListComponent },
    { path: 'details/:index', loadComponent: () => import('./dogView/dog-view.component').then(m => m.DogViewComponent) }
];
