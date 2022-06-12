import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fields } from '@syncfusion/ej2-dropdowns';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
   endpoint = 'https://75b0afe3-3fa7-477b-8352-bdcfcd522a16-bluemix.cloudantnosqldb.appdomain.cloud/'
    dbUserName = 'apikey-v2-2djdlrrbf736ap4aa6rlre2x1j1wf65v1ti1e8x2bihn';
    dbPassword = '3bc2893c0a2a1ec42d9b17840b18447b';
    basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
temp:any;
pusharray:any;
array:any;

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };

  
  add(db:string,doc: object): Observable<{}> {

    console.log(doc);
    const url=this.endpoint+db;
    return this.http.post(url, doc, this.httpOptions)
  }
  login_Get(id:any)
  {
    return this.http.get<any>('http://localhost:8000/getdata/'+id);
  }
 

  get(db:string): Observable<{}>{
    
    const url = this.endpoint+db+'/_all_docs?include_docs=true';
   return this.http.get(url,this.httpOptions);

  }
  // getbyId(id:any): Observable<{}>{
    
  //   const url = this.endpoint+'finance_db/'+ id ;
  //  return this.http.get(url,this.httpOptions);

  // }
  // getbyId(db:string, id:number): Observable<{}> {
  //   const url = this.endpoint + db + id;
  //   return this.http.get(url, this.httpOptions);
  // }
  
  storedata(formvalue:any)
  {
    console.log(formvalue);
    return this.http.post<any>('http://localhost:8000/postdata/',formvalue);
  }
  
  getLocation(location:any,fields: any) {
    let url = this.endpoint + 'finance_db/_find'
    let typedData = {
     selector: {
      type: "location",
      "city" : location
    },
     fields: fields
    };
    return this.http.post(url, typedData, this.httpOptions);
  }

  getDataByTypeandId(type:string,id:any) {
    let url = this.endpoint + 'finance_db/_find'
    let typedData = {
     selector: {
      type: "location",
      "city" : location
    },
     fields: Fields
    };
    return this.http.post(url, typedData, this.httpOptions);
  }
  
  getbyId(id:any) {
    let url = this.endpoint + 'finance_db/_find'
    let typedData = {
      "selector": {
        "_id": "d9b71f697951442aa22e426ce61ad213"
     }
    };
    return this.http.post(url, typedData, this.httpOptions);
  }
 
  fetchDetails(datas:any){
    const url=this.endpoint+'finance_db/_find';
    console.log(datas);
  
    return this.http.post(url,datas,this.httpOptions);
  }

  updateDataUser(changedValue: object, id: number, rev: number) {
    const changeObj = changedValue;
    const url = `${this.endpoint + 'finance_db/'}/${id}?rev=${rev}`;
    return this.http.put(url, changeObj, this.httpOptions);
  }

  delete(id: any,rev:any): Observable<{}>  {
        console.log(id);
        console.log(rev);
      const url = this.endpoint+'finance_db/'+id+'?rev='+rev;
      return this.http.delete(url,this.httpOptions)
      }
      
       
  

  fetchlist( type:string, id:any) {
    const url=this.endpoint+'finance_db/' + '_design/' +'view1/' + '_view/' + 'new-view' + '?include_docs=true';
    const list ={
      "keys":[type + id]
    }
    
    return this.http.post(url,list,this.httpOptions);

  }
 }
