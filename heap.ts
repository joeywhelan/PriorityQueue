/**
 * @fileoverview Interface for a heap data structure
 * @author Joey Whelan <joey.whelan@gmail.com>
 */
import {Item} from './item';

export enum Order {MIN, MAX};
export interface Heap {
    insert(item:Item):void;
    extract():Item;
    peek():Item;
    show():void;
    size():number;
};