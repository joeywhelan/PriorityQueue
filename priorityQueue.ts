/**
 * @fileoverview Class implementing the binary heap data structure
 * @author Joey Whelan <joey.whelan@gmail.com>
 */
import { v4 as uuidv4 } from 'uuid';
import {Item} from './item';
import {BinaryHeap} from './binaryHeap';

export class PriorityQueue {
    heap:BinaryHeap;

    constructor(items:Item[]){
        this.heap = new BinaryHeap(items);
    }

    insert(item:Item):void {
        this.heap.insert(item);
    }

    isEmpty():boolean {
        return this.heap.size() == 0;
    }

    peek():Item {
        return this.heap.peek();
    }

    pull():Item {
        return this.heap.extract();
    }

    show():void {
        this.heap.show();
    }
}

function demo():void {
    let list:Item[] = Array();

    for (let i=0; i<10; i++) {
        let p:number = Math.floor(Math.random() * 20);
        let v:object = new Object(uuidv4());
        list.push(new Item(p,v))
    }

    let pq:PriorityQueue = new PriorityQueue(Array());
    for (let i=0; i<10; i++) {
        let p:number = Math.floor(Math.random() * 20);
        let v:object = new Object(uuidv4());
        pq.insert(new Item(p,v))
    }
    
    pq.show();

    while (!pq.isEmpty()) {
        let top = pq.pull();
        console.log('top: ' + top.priority + ' ' + top.value);
    }
}

demo();