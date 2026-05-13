import { createContext, useContext, useEffect, useState, useRef } from "react";
import { useAuth } from "./AuthContext";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { currentUser } = useAuth();
  const cartKey = currentUser ? `cart_${currentUser.email}` : "cart_guest";

  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [loadedKey, setLoadedKey] = useState(null);
  const prevUserRef = useRef(currentUser);

  // Load cart when user changes
  useEffect(() => {
    const isLogin = !prevUserRef.current && currentUser;

    const savedCart = localStorage.getItem(cartKey);
    const parsedSavedCart = savedCart ? JSON.parse(savedCart) : [];

    setCartItems((prevCart) => {
      // If logging in from guest state, merge the current guest cart into the registered cart
      if (isLogin && prevCart.length > 0) {
        const mergedCart = [...parsedSavedCart];
        prevCart.forEach((guestItem) => {
          const existing = mergedCart.find((item) => item.id === guestItem.id);
          if (existing) {
            existing.quantity += guestItem.quantity;
          } else {
            mergedCart.push(guestItem);
          }
        });

        // Clear the guest cart so it doesn't linger forever
        localStorage.setItem("cart_guest", JSON.stringify([]));
        return mergedCart;
      }
      return parsedSavedCart;
    });

    setLoadedKey(cartKey);
    prevUserRef.current = currentUser;
  }, [cartKey, currentUser]);

  // Save cart whenever it changes natively
  useEffect(() => {
    // Only save to local storage if we have fully finished loading the cart
    // for the *current* user. This prevents the previous user's cart from
    // overwriting the new user's localStorage when the cartKey changes.
    if (loadedKey === cartKey) {
      localStorage.setItem(cartKey, JSON.stringify(cartItems));
    }
  }, [cartItems, cartKey, loadedKey]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const uniqueId = `${product.id}-${product.selectedSize || "default"}-${product.selectedGrind || "default"}`;
      const existing = prevItems.find((item) => {
        const itemUniqueId = `${item.id}-${item.selectedSize || "default"}-${item.selectedGrind || "default"}`;
        return itemUniqueId === uniqueId;
      });

      if (existing) {
        return prevItems.map((item) => {
          const itemUniqueId = `${item.id}-${item.selectedSize || "default"}-${item.selectedGrind || "default"}`;
          if (itemUniqueId === uniqueId) {
            return {
              ...item,
              quantity: item.quantity + (product.quantity || 1),
            };
          }
          return item;
        });
      }

      return [
        ...prevItems,
        {
          ...product,
          uniqueId,
          quantity: product.quantity || 1,
        },
      ];
    });
  };

  const updateQuantity = (uniqueId, delta) => {
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.uniqueId === uniqueId || item.id === uniqueId) {
            return { ...item, quantity: Math.max(0, item.quantity + delta) };
          }
          return item;
        })
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (uniqueId) => {
    setCartItems((prevItems) =>
      prevItems.filter(
        (item) => item.uniqueId !== uniqueId && item.id !== uniqueId,
      ),
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce(
    (total, item) =>
      total + item.quantity * parseFloat(item.price.replace("$", "")),
    0,
  );

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
        cartTotal,
        cartCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
