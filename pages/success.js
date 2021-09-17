import React, { useEffect } from 'react';
import {useShoppingCart} from 'use-shopping-cart';

function Success() {
    const {clearCart} = useShoppingCart();
    useEffect(() => {
        clearCart();
    }, [clearCart]);
    return <h1>You have successfully bought something, thank you</h1>
}

export default Success;