import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.scss']
})
export class StaticComponent implements OnInit {

  mainDirection: string;

  fxFlexToggle = false;

  fxFlex: string;

  fxFlexWrap: string ='row';

  count = 0;

  row: string;

  col: string;

  LayoutDirection = [
   {direction: ['row', 'column', 'row-reverse', 'column-reverse']},
  ];

  //
  //
  fxLayoutAlign = [
    { MainAxis: ['none', 'start', 'center', 'end', 'space-around', 'space-between', 'space-evenly']},
    { CrossAxis:  ['none', 'start', 'center', 'end', 'stretch', ]}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  getdirection(direction){
    this.mainDirection = direction;
  }
  getRow(row){
  this.row = row;
  }

  getColumn(col){
  this.col = col;
  }

  togglefxFlex(){
    this.fxFlexToggle = !this.fxFlexToggle;


    if (this.fxFlexToggle){
       this.fxFlex = 'row';
    }else{
       this.fxFlex = 'column';
    }

  }
togglefxFlexWrap(){

  if (this.fxFlexToggle || !this.fxFlexToggle) {
      if (this.count === 3){
        this.count = 0;
      }else{
        this.count++;
      }
    }

  this.LayoutDirection.forEach(data => {
      this.fxFlexWrap = data.direction[this.count];
    });
}


}

