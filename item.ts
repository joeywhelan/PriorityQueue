/**
 * @fileoverview Class implementing a simple Item object for a priority queue implementation
 * @author Joey Whelan <joey.whelan@gmail.com>
 */

 export class Item {
    priority:number;
    value:object;

    constructor(priority:number, value:object) {
        this.priority = priority;
        this.value = value;
    }
 }