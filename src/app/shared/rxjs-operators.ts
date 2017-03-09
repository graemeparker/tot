import { Observable } from 'rxjs/Observable';
import { environment } from './../../environments/environment';

// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/single';

declare module 'rxjs/Observable' {
  interface Observable<T> {
    debug: (...any) => Observable<T>;
  }
}

// Custom operators
const isDebugging = environment.rxJsDebugger;

Observable.prototype.debug = function (message: string) {
  return this.do(
    nextValue => {
      if (isDebugging) {
        console.groupCollapsed(message);
        if (Array.isArray(nextValue)) {
          console.table(nextValue);
        } else {
          // tslint:disable-next-line:no-console
          console.debug(nextValue);
        }
        console.groupEnd();
      }
    },
    error => {
      if (isDebugging) {
        console.error(message, error);
      }
    },
    () => {
      if (isDebugging) {
        // tslint:disable-next-line:no-console
        console.info(`${message} - completed`);
      }
    }
  );
};
