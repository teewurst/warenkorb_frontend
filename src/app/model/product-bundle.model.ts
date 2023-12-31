
export interface ProductBundle {
    sourceProduct: string;
    targetProduct: string;
    absolutDiscount: number;
}

export let emptyProductBundle: ProductBundle = {
    sourceProduct: '',
    targetProduct: '',
    absolutDiscount: 0,
}

export let productBundles: ProductBundle[] = [
    {
        sourceProduct: '2222-abcde-2222',
        targetProduct: '5555-abcde-5555',
        absolutDiscount: 3.99,
    }
];
