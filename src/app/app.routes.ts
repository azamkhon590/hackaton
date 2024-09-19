import { Routes } from '@angular/router';
import { PhotoComponent } from './component/photo/photo.component';
import { AnimalsComponent } from './component/animals/animals.component';

export const routes: Routes = [
    {
        path: 'photo',
        component: PhotoComponent
    },
    {
        path: 'animals',
        component: AnimalsComponent
    }
];
