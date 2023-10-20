import {OrderItem} from './order-item.model';

export interface Basket {
    orderItems: {[keys: string]: OrderItem};
    total: number;
    reducedTotal: number;
    absolutDiscount: number;
    percentageDiscount: number
}

export let emptyBasket: Basket = {
    orderItems: {},
    total: 0,
    reducedTotal: 0,
    absolutDiscount: 0,
    percentageDiscount: 0
}
