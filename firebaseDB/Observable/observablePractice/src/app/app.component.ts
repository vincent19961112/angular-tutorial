import { Component } from '@angular/core';
import { nextTick } from 'process';
import { Observable } from 'rxjs';

const foo = new Observable(subscribler => {
  console.log('Hello');
  subscribler.next(42);
})

foo.subscribe(x=>{
console.log(x);
  })

foo.subscribe(y=>{
  console.log(y)
})

console.log('-------')

const foo1 = new Observable(subscribler =>{
  console.log('before');
  subscribler.next(42);
  subscribler.next(100);
  subscribler.next(200);
})

console.log('before');
foo1.subscribe(x=>{
  console.log(x);
})
console.log('after')


console.log('---createObserable---');

const observable = new Observable(function subscribe(subscriber){
  const id = setInterval(()=>{
    subscriber.next('hi')
  },1000)
})
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'observablePractice';

}
