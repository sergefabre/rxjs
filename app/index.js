"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
console.log('Hello !');
var timer$ = (0, rxjs_1.timer)(1000);
timer$.pipe((0, rxjs_1.tap)(function () { return console.log('Start'); })).subscribe(function () { return console.log('End'); });
