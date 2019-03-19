import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import {ReportService} from './report.service';
import { DomSanitizer} from '@angular/platform-browser';
import { TelerikReportViewerComponent } from '@progress/telerik-angular-report-viewer';
import { FormControl, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers:[ReportService]
})

export class ReportComponent implements OnInit {
  @ViewChild('viewer1') viewer: TelerikReportViewerComponent;
  reports:any;
  reportServerTokenKey:string="";
  loginErrorMessage:string;
  loginForm = new FormGroup( {
    username : new FormControl('',Validators.required),
    password :new FormControl('',Validators.required)
    }
  )
  constructor(private rptsrvc:ReportService, private sanitizer:DomSanitizer) { 

    
  }

  ngOnInit() {

    this.reportsInIt();
    console.log(this.loginForm.valid)
  }

  reportsInIt(){
      if (this.reportServerTokenKey !==""){
        this.getReports();
      };
  }

  getReports(): void {

    this.rptsrvc.getReports(this.reportServerTokenKey).subscribe(
      data => {
        this.reports = data
      },
      error => console.log(error), () => console.log('done loading reports')
    );
  }


  showReport(selectedReport:any){
    console.log('This report has been clicked');
    const rs:any = {
      report:'ID/' + selectedReport.Id+ '/',
      ParameterValues:{},
      authenticationToken:this.reportServerTokenKey
    
    };
    this.viewer.setAuthenticationToken(this.reportServerTokenKey);
    this.viewer.setReportSource(rs);
   }

  onLoginSubmit(){
    
      this.rptsrvc.login(this.loginForm.controls.username.value,this.loginForm.controls.password.value).subscribe(
        (data: any) => {
      this.loginErrorMessage="";
      this.reportServerTokenKey = data.access_token;
      this.getReports();
    },
     (error) => 
      {
         
         this.loginErrorMessage = error.error.error_description;
         return console.log(error);
       },

      () => console.log('done login to reports')

    )
    
  }



}

