
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/carts/1"
        );

        if (!response.ok) {
          throw new Error("Cart API request failed");
        }

        const data = await response.json();

        const products = await Promise.all(
          data.products.map(async (item) => {
            const res = await fetch(
              `https://fakestoreapi.com/products/${item.productId}`
            );

            if (!res.ok) {
              throw new Error("Product API request failed");
            }

            const product = await res.json();

            return {
              ...product,
              quantity: item.quantity,
            };
          })
        );

        setCart(products);

      } catch (error) {
        console.log("Error fetching cart:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCart();
  }, []);

 
  const updateQuantity = (id, change) => {
    const updatedCart = cart.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: Math.max(1, item.quantity + change),
          }
        : item
    );

    setCart(updatedCart);
  };


  const removeProduct = (id) => {
    const updatedCart = cart.filter(
      (item) => item.id !== id
    );

    setCart(updatedCart);
  };

 
  const subtotal = cart.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-container">

        <div className="cart-heading">
          <p className="cart-subtitle">YOUR SHOPPING BAG</p>
          <h1>Shopping Cart</h1>
          <p>Thoughtfully chosen, beautifully yours.</p>
        </div>

        <div className="cart-layout">

          <div className="cart-items">

            <div className="cart-table-heading">
              <span>PRODUCT</span>
              <span>PRICE</span>
              <span>QUANTITY</span>
              <span>TOTAL</span>
            </div>

            {loading ? (
              <p>Loading cart products...</p>
            ) : cart.length === 0 ? (
              <div>
                <p>Your cart is empty!</p>
                <Link to="/shop">Continue Shopping</Link>
              </div>
            ) : (
              cart.map((item) => (
                <div className="cart-item" key={item.id}>

                  <div className="cart-product">

                    <div className="cart-product-image">
                      <img
                        src={item.image}
                        alt={item.title}
                      />
                    </div>

                    <div className="cart-product-info">
                      <h3>{item.title}</h3>
                      <p>{item.category}</p>

                      <button
                        className="remove-btn"
                        onClick={() => removeProduct(item.id)}
                      >
                        Remove
                      </button>
                    </div>

                  </div>

                  <div className="cart-price">
                    ${item.price.toFixed(2)}
                  </div>

                  <div className="cart-quantity">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                  </div>

                  <div className="cart-total">
                    ${(item.price * item.quantity).toFixed(2)}
                  </div>

                </div>
              ))
            )}

            <Link to="/shop" className="continue-shopping">
              ← Continue Shopping
            </Link>

          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="summary-row">
              <span>Shipping</span>
              <span className="free-shipping">FREE</span>
            </div>

            <div className="summary-row">
              <span>Discount</span>
              <span>$0.00</span>
            </div>

            <div className="summary-total">
              <span>Total</span>
              <h3>${subtotal.toFixed(2)}</h3>
            </div>

            <Link to="/Checkout" className="checkout-link">
              Proceed to Checkout →
            </Link>

            <p className="secure-text">
              ♡ Secure checkout · Easy returns
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Cart;
