import { delay, tap, timer } from 'rxjs';

console.time('Start');
console.log('Hello !');

const timer$ = timer(2000);

timer$.pipe(tap(() => console.log('Start'))).subscribe(() => console.timeEnd('Start'));
