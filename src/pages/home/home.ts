import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import { map } from 'rxjs/operators';
import { SingleItem } from '../single-item/single-item';
declare var getEnv: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 public 
    name: string;
 
    constructor(private http: Http, private _navctrl: NavController) {
              //  console.log(newApp);
    }
 
    public addNewPlace() {
   console.log(getEnv);
        let data = {
            name: this.name
        };
       /* const v = process.env.API;
                console.log(v);*/
	this.http.post('http://localhost:8080/checkname', data)
      .subscribe(res => {
          this._navctrl.push(SingleItem)
        //console.log(res.json().message);
      });
     /* this.http.get('http://localhost:3000/checkname/' + this.name)
      .subscribe(response => {
            console.log('GET Response:', response);
        });*/
   /* this.http.post('http://localhost:8080/checkname', data).
            map(res => res.json()).subscribe(response => {
            console.log('POST Response:', response);
        });*/       
 
    }
 
}
