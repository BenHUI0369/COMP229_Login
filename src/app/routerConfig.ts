import { Routes } from  '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { AboutComponent } from './about/about.component';

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
    }
];

export default appRoutes;//export 的寫法, export default className