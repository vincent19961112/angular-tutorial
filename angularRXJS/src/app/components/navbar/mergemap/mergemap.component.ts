import { Component , OnInit } from '@angular/core';
import { of, interval } from 'rxjs';
import { mergeMap, map } from 'rxjs/operators';


const  letters = of('a','b','c');

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

   result = letters.pipe(
      mergeMap(x=>interval(1000).pipe(map(i=>x+i))),
  );

  ngOnInit(): void {
    // this.result.subscribe(x=>console.log(x),error=>console.log(error))
  }
}
