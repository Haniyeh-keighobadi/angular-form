import { TmplAstBoundText } from '@angular/compiler';
import { Component,Input,OnInit,Output,EventEmitter } from '@angular/core';
@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css']
  })

  
  
  export class CardComponent  {
    value:any;
    @Input() name: string='بخش اول';
    @Output() onNameChange:EventEmitter<any>=new EventEmitter<any>();
    @Output() onFamilyChange:EventEmitter<any>=new EventEmitter<any>();


    nameChange(e:any){
        this.value=e.target.value;
        console.log("name changed to :",this.value);
        this.onNameChange.emit(e.target.value)
    }




   familyChange(e:any){
        this.value=e.target.value;
        console.log("family changed to :",this.value);
        this.onFamilyChange.emit(e.target.value)
    }


    

  }