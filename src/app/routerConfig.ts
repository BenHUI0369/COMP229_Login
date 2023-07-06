import { Routes } from  '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { BusinessContactComponent } from './business-contact/business-contact.component';

const appRoutes : Routes = [
    {
        path: 'home',
        component: HomeComponent
    }, 
    {
        path: 'about',
        component: AboutComponent
    }, 
    {
        path: 'project',
        component: ProjectComponent
    },
    {
        path: 'service',
        component: ServiceComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'business-contact',
        component: BusinessContactComponent
    }
];

export default appRoutes;//export 的寫法, export default className