
export interface OrderItem {
    productId: string;
    additionalAbsoluteDiscount: number;
    amount: number;
}

export let emptyOrderItem = {
    productId: '',
    additionalAbsoluteDiscount: 0,
    amount: 0,
}
