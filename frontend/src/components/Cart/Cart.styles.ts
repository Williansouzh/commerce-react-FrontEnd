import { styled } from "styled-components";

// Types
export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

// Styled Components
export const CartContainer = styled.div`
  position: relative;
  z-index: 1;
  display: inline-block;
`;

export const CartIcon = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  position: relative;
  padding: 8px;
`;

export const CartCount = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  background-color: #e53e3e;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  font-weight: bold;
`;

export const CartDropdown = styled.div<{ isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: 0;
  background-color: white;
  border: 1px solid #e2e8f0;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  max-height: 400px;
  overflow-y: auto;
  z-index: 1000;
  display: ${(props) => (props.isOpen ? "block" : "none")};
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid #e2e8f0;
`;

export const ItemInfo = styled.div`
  flex-grow: 1;
  margin-right: 12px;
`;

export const ItemName = styled.p`
  margin: 0;
  font-weight: 500;
`;

export const ItemPrice = styled.p`
  margin: 4px 0 0;
  color: #718096;
  font-size: 14px;
`;

export const QuantityControl = styled.div`
  display: flex;
  align-items: center;
`;

export const QuantityButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
  color: #4a5568;

  &:hover {
    color: #2d3748;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

export const RemoveButton = styled(QuantityButton)`
  color: #e53e3e;

  &:hover {
    color: #c53030;
  }
`;

export const CartSummary = styled.div`
  padding: 12px;
  border-top: 1px solid #e2e8f0;
  font-weight: bold;
`;

export const CheckoutButton = styled.button`
  width: 100%;
  padding: 8px 16px;
  background-color: #4299e1;
  color: white;
  border: none;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #3182ce;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

export const EmptyCartMessage = styled.p`
  text-align: center;
  padding: 16px;
  color: #718096;
`;
