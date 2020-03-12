import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarmainComponent } from './navbarmain/navbarmain.component';
import { TestModule } from '../test/test.module';



@NgModule({
  declarations: [
    NavbarComponent,
    NavbarmainComponent
  ],
  imports: [
    CommonModule,
    TestModule
  ],
  exports: [
    NavbarComponent,
    NavbarmainComponent
  ]
})
export class DashboardModule { }
