import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [HttpService]
})
export class AppComponent {
  title = 'AngularHttp';
  users: any = [];
  asyncUsers: any = this.httpService.getData();

  constructor(private httpService: HttpService){  }

  onSubmit(username: string, email: string){
    this.httpService.sendData({username, email})
    .subscribe(data => console.log(data), error => console.log(error));
  }

  onGetData(){
    this.httpService.getData().subscribe(data => this.users = data);
  }
}
