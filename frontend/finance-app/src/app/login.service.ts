import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class apiService {
   endpoint = 'https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/'
  //  url = this.endpoint + "finance_db";
    dbUserName = 'apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
    dbPassword = '3bc2893c0a2a1ec42d9b17840b18447b';
    basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };
  add(db:String,doc: object): Observable<{}> {

    //  fresher- sample;
    
    const url=this.endpoint+db;
    return this.http.post(url, doc, this.httpOptions)
    // return this.http.post(this.url, formaValues, { headers: { Authorization: basicAuth } });
  }
  get(db:string): Observable<{}>{
    const url = this.endpoint+db+'/_all_docs?include_docs=true';
    return this.http.get(url,this.httpOptions);

  }
  login(datas:any) {
    const url=this.endpoint+'finance_db/_find';
    // let loginData={
    //   email:email
    //   // password:password
    // },
    let data ={ selector: {
      email : datas.email,
      password:datas.password
    }}

    // fields:["id","name","email"]
  return this.http.post(url,data,this.httpOptions)

  };

  
  

}



