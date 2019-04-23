import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
providedIn:'root'
})
export class ReportService {
api_root =  "http://localhost:83";
api_list = "/api/reportserver/v2/reports";
api_report="/api/reportserver/v2/reports/{id}"
api_login="/Token"

  constructor(private http: HttpClient) { }
  getReports(accessToken:string){
    //const accessToken = this.getReportToken();
    const headerDict = {
      'Authorization': 'Bearer ' + accessToken
    }

    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict)
    };

    return this.http.get(this.api_root + this.api_list,requestOptions);
  }

  login(username:string,password:string){
    var loginData= "grant_type=password&username=" + username +"&password=" + password;
    const headerDict = {
      'Content-Type': 'x-www-form-urlencoded'
    }   
    const requestOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(headerDict),
    };    
   return  this.http.post(this.api_root + this.api_login,loginData, requestOptions);
  }


}

