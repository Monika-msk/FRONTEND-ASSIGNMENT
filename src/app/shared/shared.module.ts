import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component';
import { SidebarComponent } from './components/sidebar.component';

@NgModule({
  declarations: [HeaderComponent, SidebarComponent],
  exports: [HeaderComponent, SidebarComponent],
  imports: [CommonModule]
})
export class SharedModule { }
