import React, { useState, useCallback, useEffect } from "react";
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
import {
  CartProduct,
  getAllProducts,
  getCart,
  addToCart,
} from "../../services/api";

// Interface ajustada
export default function HeaderCart() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartProduct[]>([]);

  const toggleCart = () => setIsOpen(!isOpen);

  const updateQuantity = useCallback((productId: string, change: number) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) =>
          item.productId === productId
            ? { ...item, quantity: Math.max(0, item.quantity + change) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.productId !== productId)
    );
  }, []);

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.price) * item.quantity,
    0
  );

  const handleCheckout = () => {
    console.log("Proceeding to checkout");
  };

  const handleAddToCart = async (productId: string) => {
    try {
      await addToCart(productId);
      const updatedCart = await getCart();
      setCartItems(updatedCart.items || []);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCart();
        setCartItems(response.items || []);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    };
    fetchData();
  }, []);

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
              <CartItemStyled key={item.productId}>
                <ItemInfo>
                  <ItemName>{item.name}</ItemName>
                  <ItemPrice>${Number(item.price).toFixed(2)}</ItemPrice>
                </ItemInfo>
                <QuantityControl>
                  <QuantityButton
                    onClick={() => updateQuantity(item.productId, -1)}
                    aria-label={`Decrease quantity of ${item.name}`}
                  >
                    <Minus size={16} />
                  </QuantityButton>
                  <span aria-label={`Quantity of ${item.name}`}>
                    {item.quantity}
                  </span>
                  <QuantityButton
                    onClick={() => handleAddToCart(item.productId)}
                    aria-label={`Increase quantity of ${item.name}`}
                  >
                    <Plus size={16} />
                  </QuantityButton>
                </QuantityControl>
                <RemoveButton
                  onClick={() => removeItem(item.productId)}
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
