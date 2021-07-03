import { Routes } from '@angular/router';
import { CreteNewPostComponent } from '../../post-components/crete-new-post/crete-new-post.component';

export const ADMINAVENTURAS_ROUTERS : Routes = [
    { path : 'createAventura', component : CreteNewPostComponent },
    { path : '**', pathMatch : 'full', redirectTo : 'adminAventuras' }
];