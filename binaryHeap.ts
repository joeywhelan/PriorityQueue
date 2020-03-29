/**
 * @fileoverview Class implementing the binary heap data structure
 * @author Joey Whelan <joey.whelan@gmail.com>
 */
import { v4 as uuidv4 } from 'uuid';
import {Order} from './heap';
import {Heap} from './heap';
import {Item} from './item';


export class BinaryHeap implements Heap {
    private order:Order;
    private heap:Item[];

    constructor(items:Item[], order:Order = Order.MIN) {
        this.order = order;
        this.heap = new Array();
        for (let i=0; i<items.length; i++) {
            this.insert(items[i]);
        }
    }

    extract():Item {
        let top = this.heap[0];
        let bottom = <Item> this.heap.pop();
        if (this.heap.length > 0) {
            this.heap[0] = bottom;
            this.siftDown(0);
        }
        else {}
        return top;
    };

    insert(item:Item):void {
        this.heap.push(item);
        this.siftUp(this.heap.length-1);
    };

    peek():Item {
        return this.heap[0];
    };

    show():void {
        console.log(this.heap);
    }

    size():number {
        return this.heap.length;
    }

    private getParent(idx: number):number {
        return idx > 0 ? Math.trunc((idx - 1) / 2) : 0;
    }

    private siftDown(idx:number):void {
        let leftIdx:number;
        let rightIdx:number;
        let currentPos:number;
        let sorted:boolean = false;

        while (!sorted) {
            leftIdx = 2 * idx + 1;
            rightIdx = 2 * idx + 2;
            currentPos = idx;
            switch (this.order) {
                case Order.MIN: {
                    if (rightIdx < this.heap.length &&
                        this.heap[currentPos].priority > this.heap[rightIdx].priority) {
                        currentPos = rightIdx;
                    }
                    else {}
                  
                    if (leftIdx < this.heap.length &&
                        this.heap[currentPos].priority > this.heap[leftIdx].priority) {
                        currentPos = leftIdx;
                    }
                    else {}

                    if (currentPos == idx) {
                        sorted = true;
                    }
                    else {
                        this.swap(idx, currentPos);
                        idx = currentPos;
                    }
                    break;
                }
                case Order.MAX: {
                    if (rightIdx < this.heap.length && 
                        this.heap[currentPos].priority < this.heap[rightIdx].priority) {
                         currentPos = rightIdx;
                    }
                    else {}
                    
                    if (leftIdx < this.heap.length && 
                        this.heap[currentPos].priority < this.heap[leftIdx].priority) {
                        currentPos = leftIdx;
                    }
                    else {}

                    if (currentPos == idx) {
                        sorted = true;
                    }
                    else {
                        this.swap(idx, currentPos);
                        idx = currentPos;
                    }
                    break;
                }
                default: {
                    sorted = true;
                    break;
                }
            }
        }
    }

    private siftUp(idx:number):void {
        let parent:number;
        let sorted:boolean = false;

        while (!sorted) {
          parent = this.getParent(idx)
          switch (this.order) {
              case Order.MIN: {
                if (this.heap[idx].priority < this.heap[parent].priority) {
                    this.swap(idx, parent);
                    idx = parent;
                }
                else {
                    sorted = true;
                }
                break;
              }
              case Order.MAX: {
                if (this.heap[idx].priority > this.heap[parent].priority) {
                    this.swap(idx, parent);
                    idx = parent;
                }
                else {
                    sorted = true;
                }
                break;
              }
              default: {
                  sorted = true;
                  break;
              }
          }  
        }
    }

    private swap(idx1:number, idx2:number):void {
        let tmp = this.heap[idx1];
        this.heap[idx1] = this.heap[idx2]
        this.heap[idx2] = tmp;
    }
}

function demo():void {
    let list:Item[] = Array();

    for (let i=0; i<5; i++) {
        let p:number = Math.floor(Math.random() * 20);
        let v:object = new Object(uuidv4());
        list.push(new Item(p,v))
    }

    let binHeap:BinaryHeap = new BinaryHeap(list);
    binHeap.show();

    while (binHeap.size() > 0) {
        let top = binHeap.extract();
        console.log('');
        console.log('top: ' + top.priority);
        binHeap.show();
    }
}

demo();