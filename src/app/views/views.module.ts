import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewsComponent } from './views.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ViewsRoutingModule } from './views-routing.module';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { InfoComponent } from './components/info/info.component';



@NgModule({
  declarations: [
    ViewsComponent,
    HomeComponent,
    AboutUsComponent,
    MenuComponent,
    InfoComponent
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    RouterModule
  ]
})
export class ViewsModule { }
