import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { KeyManagementComponent } from './key-management/key-management.component';
import { ProfileComponent } from './profile/profile.component';


const routeConfig: Routes = [
    {
      path: '',
      component: HomeComponent,
      title: 'Home'
    },
    {
      path: 'about',
      component: AboutComponent,
      title: 'About'
    },
    {
      path: 'login',
      component: LoginComponent,
      title: 'login'
    },
    {
      path: 'keys',
      component: KeyManagementComponent,
      title: 'keys'
    },
    {
      path: 'profile',
      component: ProfileComponent,
      title: 'profile'
    }
  ];
  
  export default routeConfig;