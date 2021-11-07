import { Component } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { fromEvent } from 'rxjs';

const myobserable = of(1,2,3,4);

const myobserver = {
  next: x => console.log('next:' + x),
  error: err => console.log('error:' + err),
  complete: () => {
    return console.log('complete');
  }
}

myobserable.subscribe(myobserver)

function seqenceSubscriber(observer){
  observer.next(1);
  observer.next(2);
  observer.next(3);
  observer.complete();

  return {unsubscribe() {}};
}

const sequence = new Observable(seqenceSubscriber);

sequence.subscribe({
  next(num){console.log(num);},
  complete(){console.log('finished sequence')}
})



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }



}
