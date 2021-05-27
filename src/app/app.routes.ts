import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from "./components/characters/characters.component";
import { MembersComponent } from './components/members/members.component';

const APP_ROUTES: Routes = [
    { 
        path: '',
        redirectTo: 'characters',
        pathMatch: 'full',
    
      },
    { path: 'characters', component: CharactersComponent },    
    {path: 'members/:house', component:MembersComponent},
    
    
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);