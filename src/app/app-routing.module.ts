import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {StartPageComponent} from './pages/start-page/start-page.component';
import {LoginComponent} from './pages/login/login.component';
import {EditComponent} from './pages/edit/edit.component';
import {CreateComponent} from './pages/create/create.component';

const appRoutes: Routes =[
    { path: '',
        component: StartPageComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'edit/:id',
        component: EditComponent
    },
    {
        path: 'create',
        component: CreateComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)]
})

export class AppRoutingModule { }
