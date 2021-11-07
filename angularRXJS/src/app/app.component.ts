import { Component,OnInit } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  observable = Observable.create((observer:any)=>{
    try {
      observer.next('hey guys');
      observer.next('how are you?');
      setInterval(()=>{
        observer.next('I am good')
      },2000)
    } catch (err) {
      observer.error(err)
    }
  });
   observer = this.observable.subscribe(
      (x:any)=>this.addItem(x),
      (error:any)=>this.addItem(error),
      ()=>this.addItem('completed')
    )

  ngOnInit(): void {
    setTimeout(() => {
      this.observer.unsubscribe();
    }, 6001);
  }

  addItem(val:any){
    let node = document.createElement('li');
    let textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
  }

  title = 'angularRXJS';
}
