import React, { useState, useCallback } from "react";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";
import {
  CartItem,
  CartContainer,
  CartIcon,
  CartCount,
  CartDropdown,
  EmptyCartMessage,
  ItemInfo,
  ItemName,
  ItemPrice,
  QuantityControl,
  QuantityButton,
  RemoveButton,
  CartSummary,
  CheckoutButton,
} from "./Cart.styles";

export default function HeaderCart() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([
    { id: "1", name: "Product 1", price: 10, quantity: 2 },
    { id: "2", name: "Product 2", price: 15, quantity: 1 },
  ]);

  const toggleCart = () => setIsOpen(!isOpen);

  const updateQuantity = useCallback((id: string, change: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === id
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    console.log("Proceeding to checkout");
  };

  return (
    <CartContainer>
      <CartIcon
        onClick={toggleCart}
        aria-label="Shopping cart"
        aria-haspopup="true"
        aria-expanded={isOpen}
      >
        <ShoppingCart />
        {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
      </CartIcon>
      <CartDropdown isOpen={isOpen}>
        {cartItems.length === 0 ? (
          <EmptyCartMessage>Your cart is empty</EmptyCartMessage>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id}>
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>${item.price.toFixed(2)}</ItemPrice>
                </ItemInfo>
                <QuantityControl>
                  <QuantityButton
                    onClick={() => updateQuantity(item.id, -1)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    <Minus size={16} />
                  </QuantityButton>
                  <span aria-label={`Quantity of ${item.name}`}>
                    {item.quantity}
                  </span>
                  <QuantityButton
                    onClick={() => updateQuantity(item.id, 1)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    <Plus size={16} />
                  </QuantityButton>
                </QuantityControl>
                <RemoveButton
                  onClick={() => removeItem(item.id)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <X size={16} />
                </RemoveButton>
              </CartItem>
            ))}
            <CartSummary>
              <p>Total: ${totalPrice.toFixed(2)}</p>
              <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
            </CartSummary>
          </>
        )}
      </CartDropdown>
    </CartContainer>
  );
}
