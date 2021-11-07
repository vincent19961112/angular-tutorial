import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  step = 0;

  constructor() { }

  ngOnInit(): void {
  }

   setStep(index: number) {
    this.step = index;
  }

}
