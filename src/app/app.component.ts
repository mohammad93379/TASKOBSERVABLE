import { Component } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  title = 'TASKOBSERVABLE';
}
    const observable = new Observable(subscriber => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    setTimeout(() => {
      subscriber.next(4);
      subscriber.complete();
    }, 3000);
  });
  console.log('just before subscribe');
  observable.subscribe(
  {
    next(x) { console.log('got value ' + x); },
    error(err) { console.error('something wrong occurred: ' + err); },
    complete() { console.log('done'); }
  });
console.log('just after subscribe');

//function foo() {
//  console.log('Hello');
//  return 42;
//}

//const x = foo.call(0); // same as foo()
//console.log(x);
//const y = foo.call(0); // same as foo()
//console.log(y);


const foo = new Observable(subscriber => {
  console.log('Hello');
  subscriber.next(42);
});
 
foo.subscribe(x => {
  console.log(x);
});
foo.subscribe(y => {
  console.log(y);
});