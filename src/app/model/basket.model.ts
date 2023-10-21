import {OrderItem} from './order-item.model';

export interface Basket {
    orderItems: {[keys: string]: OrderItem};
    itemsOrder: string[];
    total: number;
    reducedTotal: number;
    absolutDiscount: number;
    percentageDiscount: number
}

export let emptyBasket: Basket = {
    orderItems: {},
    itemsOrder: [],
    total: 0,
    reducedTotal: 0,
    absolutDiscount: 0,
    percentageDiscount: 0
}
