import { NgModule } from "@angular/core";
import { AdminComponent } from "./admin/admin.component";
import { UserComponent } from "./user/user.component";
import { EmployeeComponent } from "./employee/employee.component";
import { AppRoutingModule } from "./app.routes";
@NgModule({
    declarations:[
        AdminComponent,
        UserComponent,
        EmployeeComponent
    ],
    imports:[
        AppRoutingModule
    ]
})

export class AppModule{}