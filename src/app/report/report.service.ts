import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
providedIn:'root'
})
export class ReportService {
api_root =  "http://localhost:5488";
api_list = "/odata/templates";
api_report="/api/report"

  constructor(private http: HttpClient) { }

  getReports(){
    return this.http.get(this.api_root + this.api_list);
  }

  getReport(report:any):Observable<Blob>{

    const headerDict = {
      'Content-Type': 'application/json'
    }
    
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
      responseType:'arraybuffer' as 'json'
    };
   
   const reportObject = {
      template:{
          shortid:report.shortid
      }
    }
    
    const data = JSON.stringify(reportObject);
    return this.http.post<Blob>(this.api_root + this.api_report,data, requestOptions)

  }


}

