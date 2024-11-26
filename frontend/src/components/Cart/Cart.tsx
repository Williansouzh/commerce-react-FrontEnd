import React, { useState } from "react";
import { ShoppingCart, Plus, Minus, X } from "lucide-react";
import {
  CartItem as CartItemStyled,
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
import { CartItem, useCart } from "../../contexts/CartContext";
import { CartProduct } from "../../services/api";

export default function HeaderCart() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems, addToCart, removeFromCart } = useCart();

  const toggleCart = () => setIsOpen(!isOpen);

  const totalItems = cartItems.reduce(
    (sum: number, item: CartItem) => sum + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (sum: number, item: CartItem) => sum + Number(item.price) * item.quantity,
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
            {cartItems.map((item: CartItem) => (
              <CartItemStyled key={item.productId}>
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>${Number(item.price).toFixed(2)}</ItemPrice>
                </ItemInfo>
                <QuantityControl>
                  <QuantityButton
                    onClick={() => removeFromCart(item.productId)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    <Minus size={16} />
                  </QuantityButton>
                  <span aria-label={`Quantity of ${item.name}`}>
                    {item.quantity}
                  </span>
                  <QuantityButton
                    onClick={() =>
                      addToCart({
                        productId: item.productId,
                        name: item.name,
                        price: item.price,
                        quantity: 1,
                      })
                    }
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    <Plus size={16} />
                  </QuantityButton>
                </QuantityControl>
                <RemoveButton
                  onClick={() => removeFromCart(item.productId)}
                  aria-label={`Remove ${item.name} from cart`}
                >
                  <X size={16} />
                </RemoveButton>
              </CartItemStyled>
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
