import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  espanol=true;
  ingles=false;

  constructor() { }

  ngOnInit(): void {
  }

  spanish(){
    console.log('espanol')
    console.log(this.espanol)
    if(this.ingles=true){
      this.ingles=false;
      this.espanol=true;
      console.log('no funcionas')
    }else{
      this.espanol=true;
    }
    
  }

  english(){
    if(this.espanol=true){
      this.espanol=false;
      this.ingles=true;
    }else{
      this.ingles=true
    }
  }

}
