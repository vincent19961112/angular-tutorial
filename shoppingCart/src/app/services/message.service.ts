import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MessageService {
  subject = new Subject();

  constructor() {}
  sendMsg(product) {
    console.log(product);
    this.subject.next(product);
  }

  getMsg() {
    return this.subject.asObservable();
  }
}
