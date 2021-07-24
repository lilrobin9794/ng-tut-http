import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";

@Injectable()
export class HttpService{
  constructor(private httpClient: HttpClient){  }

  sendData(user: any){
    const body = JSON.stringify(user);
    const headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    return this.httpClient.post("https://ng-http-9db98-default-rtdb.firebaseio.com/data.json", body, { headers: headers });
  }

  getData(){
    return this.httpClient
      .get<any>("https://ng-http-9db98-default-rtdb.firebaseio.com/data.json")
      .pipe(
        map((response: Response) => {
          let users: any = [];
          for(let x in response){
            users.push(response[x]);
          }

          return users;
        })
      );
  }
}