import { Component, OnInit, ElementRef } from '@angular/core';
import {ReportService} from './report.service';
import { DomSanitizer} from '@angular/platform-browser';
import { TmplAstBoundAttribute } from '@angular/compiler';





@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css'],
  providers:[ReportService]
})
export class ReportComponent implements OnInit {

  reports:any;
  reportToView:any ;
  objectUrl :string; 
  contentType:string;


  constructor(private rptsrvc:ReportService, private sanitizer:DomSanitizer) { 

    
  }

  ngOnInit() {
    this.getReports();
  }

  getReports():void {

    this.rptsrvc.getReports().subscribe(
        data=>{this.reports=data
    
        },
        error=>console.log(error),()=>console.log('done loading reports')


    );
  }


  showReport(report:any){
    console.log('This report has been clicked');
     this.contentType=this.getContentType(report.recipe);
     this.rptsrvc.getReport(report).subscribe(
      data=>{
        var file = new Blob([data], {type: this.contentType});
        var fileURL = URL.createObjectURL(file);
        this.objectUrl = fileURL;
       //window.open(this.objectUrl);
    
        },
        error=>console.log(error),
        ()=>console.log('done getting report' + report.name)

    )

  }

  getContentType(recipe:string):string {
    switch (recipe) {
      case 'chrome-pdf': return "application/pdf";
      case 'chrome-image': return  "application/pdf";
      case 'html-with-browser-client':  return "application/pdf";
      case 'text': return  "text/plain";
      case 'html-to-xlsx': return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      case 'xlsx': return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
      case 'html': return "text/plain";
      
    }

  }


}

