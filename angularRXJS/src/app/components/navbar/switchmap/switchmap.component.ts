import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switchmap',
  templateUrl: './switchmap.component.html',
  styleUrls: ['./switchmap.component.scss']
})

export class SwitchmapComponent implements OnInit {

  num :number= 112211;


  constructor() { }

  ngOnInit(): void {
    this.isPalindrome(this.num);
    console.log(this.isPalindrome(this.num))
  }
 isPalindrome(x: number): boolean {
if(x<0){
  return false;
}
let digits = Math.floor(Math.log10(0)+1)
console.log(digits,Math.log10(0),Math.log10(0)+1)
while (digits>1) {
  const mask =Math.pow(10,digits-1);

  const first = Math.floor(x/mask);

  const last = Math.floor(x%10);

  if(first !== last){
    return false;
  }

  x= Math.floor(x % mask);

  x = Math.floor(x/10);

  digits-=2;
}
return true

}

}

