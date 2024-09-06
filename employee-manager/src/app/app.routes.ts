import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { EmployeesComponent } from './employees/employees.component';
import { HoursComponent } from './hours/hours.component';
import { AboutComponent } from './about/about.component';
import { RouteGuardService } from './service/route-guard.service';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'Employees', component: EmployeesComponent, canActivate: [RouteGuardService]},
    { path: 'Hours', component: HoursComponent, canActivate: [RouteGuardService]},
    { path: 'About', component: AboutComponent, canActivate: [RouteGuardService]},
    { path: 'Login', component: LoginComponent},
    { path: 'Logout', component: LogoutComponent, canActivate: [RouteGuardService]},
    { path: '**', component: ErrorPageComponent},
];
