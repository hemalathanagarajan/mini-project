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

  //-----
  store(data: any) {
    console.log(data);
    this.temp = data;
    this.pusharray.push(data);
    console.log(this.pusharray)
  }
  //------------
  add(db:String,doc: object): Observable<{}> {

    console.log(doc);
    const url=this.endpoint+db;
    return this.http.post(url, doc, this.httpOptions)
  }
  test_get(id:any)
  {
    return this.http.get<any>('http://localhost:8000/getdata/'+id);
  }
  // budget_get(id:any)
  // {
  //   return this.http.get<any>('http://localhost:8000/getbudgetdata/'+id);
  // }

  //----- angular - couch connection get function
  get(db:string): Observable<{}>{
    
    const url = this.endpoint+db+'/_all_docs?include_docs=true';
   return this.http.get(url,this.httpOptions);

  }
  getDocsByID(db: string,id: string): Observable<{}> {
  

    const url = this.endpoint + db + '/'+id;
    return this.http.get(url, this.httpOptions)
  }
  storedata(formvalue:any)
  {
    console.log(formvalue);
    return this.http.post<any>('http://localhost:8000/postdata/',formvalue);
  }
  //-----
  // budget_list(formvalue:any)
  // {
  //   console.log(formvalue);
  //   return this.http.post<any>('http://localhost:8000/budget/',formvalue);
  // }
  // expense_list(formvalue:any)
  // {
  //   console.log(formvalue);
  //   return this.http.post<any>('http://localhost:8000/expense/',formvalue);
  // }


  //---------angular-to -couch connection get(login-not working)
  login_test(datas:any) {
    const url=this.endpoint+'finance_db/_find';
    let data ={ selector: {
      email : datas.email,
      password:datas.password
    }},

  fields:["id","name","email"]
  return this.http.post(url,data,this.httpOptions)

  } 
  //--------
  fetchDetails(datas:any){
    const url=this.endpoint+'finance_db/_find';
    console.log(datas);
    // let data={
    //   selector:{
    //     "type": "expense",
    //      "user": "b0453769f279da791dd9a4c653b56121",
    //   }
    // },
    // fields:["home","food","cloth"]

    return this.http.post(url,datas,this.httpOptions);


  }
  //-------


  //--------------node to couch-----------
// getUser(){
// return this.http.get('http://localhost:8000/getUser/');
// }
// getUserId(id:any) {
//   return this.http.get('http://localhost:8000/getUserId/${id}');
// }
//----------

//----- want to work
// updateData(formValues: any, db: any, id: any,  changedValue: any) {
//     const url = this.endpoint + db + "/" + id;
//      const basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);

//     return this.http
//       .put(
//         url,
//         JSON.stringify(changedValue)
//       )
//   }
}
