import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in.component';
import { LogInFormComponent } from './components';

@NgModule({
  declarations: [LogInComponent],
  imports: [CommonModule, LogInFormComponent],
})
export class LogInModule {}
