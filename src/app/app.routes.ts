import { Routes } from '@angular/router';
import { CounterComponent } from './component/counter/counter.component';
import { BasicFormComponent } from './component/basic-form/basic-form.component';
import { PropertyBindingComponent } from './component/property-binding/property-binding.component';
import { ControlSatatementComponent } from './component/control-satatement/control-satatement.component';
import { NestedLoopComponent } from './component/nested-loop/nested-loop.component';
import { StyleBindingComponent } from './component/style-binding/style-binding.component';
import { UsersComponent } from './component/users/users.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AboutComponent } from './component/about/about.component';
import { AboutMeComponent } from './component/about/about-me/about-me.component';
import { AboutCompanyComponent } from './component/about/about-company/about-company.component';

export const routes: Routes = [
    {path:'', component: CounterComponent},
    {path:'counter', component: CounterComponent},
    {path:'property-binding',component:PropertyBindingComponent},
    {path:'control-statement',component:ControlSatatementComponent},
    {path:'nested-loop',component:NestedLoopComponent},
    {path:'style-binding',component:StyleBindingComponent},
    {path:'basic-form',component:BasicFormComponent},
    {path:'user',component:UsersComponent},
    {path:'user/:id',component:UsersComponent},
    {path:'about',component:AboutComponent, children: [
        {path:'me',component:AboutMeComponent},
        {path:'company',component:AboutCompanyComponent},
    ]},
    {path:'**',component:PageNotFoundComponent}
];
