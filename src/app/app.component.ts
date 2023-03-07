import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  name1:string='بخش اول';
  tboxvalue:any;
  title = 'component';
  tbox(e:any){

  }
  fam(e:any){}
  
}
