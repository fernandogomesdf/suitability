import { CommonModule } from '@angular/common';
import { LoginGuard } from './../guards/login.guard';
import { ToastModule } from 'primeng/toast';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header.component';
import { NgModule } from '@angular/core';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ProgressBarModule } from 'primeng/progressbar';

@NgModule({
  imports: [
    IonicModule,
    ToastModule,
    CommonModule,
    ConfirmDialogModule,
    ProgressBarModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
  ],
  providers: [LoginGuard]
})
export class HeaderModule { }
