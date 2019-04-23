import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-mailmerge',
  templateUrl: './mailmerge.component.html',
  styleUrls: ['./mailmerge.component.css']
})
export class MailmergeComponent implements OnInit {
  filename:string;
  mergeFileStreamForm = new FormGroup( {
    file : new FormControl(''),
    args :new FormControl('')
    }
  )

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit(files: FileList){


    const formData = new FormData();
    
    formData.append("args", this.mergeFileStreamForm.controls.args.value);
    formData.append("file", files[0],files[0].name); 
    this.filename = files[0].name;
    this.http.post("http://localhost:2394/api/document/mergefilestream",formData, {responseType:'blob' as 'json'}).subscribe(

      (data : any) => this.downloadFile(data),
       (error) => 
        {
           
         
           return console.log(error);
         },
  
        () => console.log('done login to reports')
  
      )
  }
  downloadFile(data: any) {
    const url= window.URL.createObjectURL(data);
    var link = document.createElement('a');
    link.href = url;
    link.download = this.filename;
    link.click();
    }

  
}
