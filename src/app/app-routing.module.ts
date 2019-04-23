import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { UploadComponent } from './upload/upload.component';
import {MailmergeComponent} from './mailmerge/mailmerge.component'
const routes: Routes = [
  { path: 'reports', component: ReportComponent },
  { path: 'uploads', component: UploadComponent },
  { path: 'mailemerge', component: MailmergeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
