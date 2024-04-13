import { RouterModule, Routes } from "@angular/router";
import { ViewsComponent } from "./views.component";
import { HomeComponent } from "./components/home/home.component";
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { MenuComponent } from "./components/menu/menu.component";
import { InfoComponent } from "./components/info/info.component";

const routes:Routes=[
    {path:'',component:ViewsComponent,children:[
        {path:'home',component:HomeComponent},
        {path:'about-us',component:AboutUsComponent},
        {path:'menu',component:MenuComponent},
        {path:'info',component:InfoComponent}
    ]}
];

export const ViewsRoutingModule=RouterModule.forChild(routes);