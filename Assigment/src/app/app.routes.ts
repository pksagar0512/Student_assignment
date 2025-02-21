import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin/admin.component'
import {UserComponent} from './user/user.component'
import {EmployeeComponent} from './employee/employee.component'
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {path:'',component:UserComponent},
    {path:'User',component:UserComponent},
    {path:'Employee',component:EmployeeComponent},
    {path:'Admin',component:AdminComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}
