
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState("Purple");
  const [selectedSize, setSelectedSize] = useState("M");
  const navigate = useNavigate();


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProduct(data);
      })
  }, [id]);
  if (!product) {
    return null;
  }



  const addToCart = async () => {
    const savedCart = JSON.parse(
      localStorage.getItem("addtocart") || "[]"
    );

    const existingProduct = savedCart.find(
      (item) =>
        item.id === product.id &&
        item.selectedColor === selectedColor &&
        item.selectedSize === selectedSize
    );

    let updatedCart;

    if (existingProduct) {
      updatedCart = savedCart.map((item) =>
        item.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
          ? {
            ...item,
            quantity: (item.quantity || 1) + quantity,
          }
          : item
      );
    } else {
      updatedCart = [
        ...savedCart,
        {
          ...product,
          quantity: quantity,
          selectedColor,
          selectedSize,
        },
      ];
    }
    localStorage.setItem(
      "addtocart",
      JSON.stringify(updatedCart)
    );

    window.dispatchEvent(new Event("cartUpdated"));

    try {
      const response = await fetch(
        "https://fakestoreapi.com/carts",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: 1,
            products: [
              {
                productId: product.id,
                quantity: quantity,
              },
            ],
          }),
        }
      );

      const data = await response.json();
      console.log("API Status:", response.status);
      console.log("New cart response:", data);

      if (!response.ok) {
        alert("Local cart updated, but API request failed.");
      } else {
        alert("Product added to cart successfully!");
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("Local cart updated, but API connection failed.");
    }

    navigate("/cart");
  };

  return (
    <main className="detail-page">
      <div className="detail-breadcrumb">
        Home / Shop / {product.category} /
        <span>{product.title}</span>
      </div>

      <section className="detail-container">
        <div className="detail-gallery">
          <div className="detail-main-image">
            <span className="detail-badge">BESTSELLER</span>

            <img
              src={product.image}
              alt={product.title}
            />
          </div>

          <div className="detail-thumbnails">
            <div className="detail-thumb selected">
              <img
                src={product.image}
                alt={product.title}
              />
            </div>
          </div>
        </div>

        <div className="detail-info">
          <span className="detail-category">
            {product.category}
          </span>

          <h1>{product.title}</h1>

          <div className="detail-rating">
            <span className="detail-stars">★★★★★</span>

            <span>
              {product.rating?.rate ?? "N/A"}
            </span>

            <span className="detail-reviews">
              ({product.rating?.count ?? 0} reviews)
            </span>
          </div>

          <div className="detail-price">
            <strong>${product.price?.toFixed(2)}</strong>
          </div>

          <p className="detail-description">
            {product.description}
          </p>

          {/* Color selection */}
          <div className="detail-option">
            <div className="detail-option-heading">
              <strong>Color:</strong>
              <span>{selectedColor}</span>
            </div>

            <div className="detail-colors">
              <button
                type="button"
                className={`detail-color purple ${selectedColor === "Purple" ? "chosen" : ""
                  }`}
                aria-label="Purple"
                onClick={() => setSelectedColor("Purple")}
              />

              <button
                type="button"
                className={`detail-color cream ${selectedColor === "Cream" ? "chosen" : ""
                  }`}
                aria-label="Cream"
                onClick={() => setSelectedColor("Cream")}
              />

              <button
                type="button"
                className={`detail-color black ${selectedColor === "Black" ? "chosen" : ""
                  }`}
                aria-label="Black"
                onClick={() => setSelectedColor("Black")}
              />
            </div>
          </div>

          {/* Size selection */}
          <div className="detail-option">
            <div className="detail-option-heading">
              <strong>Select Size</strong>

              <button
                className="detail-size-guide"
                type="button"
              >
                Size guide
              </button>
            </div>

            <div className="detail-sizes">
              {["XS", "S", "M", "L", "XL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`detail-size ${selectedSize === size ? "selected" : ""
                    }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div className="detail-option">
            <strong>Quantity</strong>

            <div className="detail-quantity">
              <button
                type="button"
                onClick={() =>
                  setQuantity((q) => Math.max(1, q - 1))
                }
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={() => setQuantity((q) => q + 1)}
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          </div>

          {/* Action buttons */}
          <div className="detail-actions">
            <button
              className="shop-add-button"
              onClick={() => addToCart(product)}
            >
              <i className="fa-solid fa-bag-shopping"></i>
              Add to Cart
            </button>

            <button
              type="button"
              className="detail-wishlist"
              aria-label="Add to wishlist"
            >
              <i className="fa-regular fa-heart" />
            </button>
          </div>

          {/* Benefits */}
          <div className="detail-benefits">
            <p>
              <i className="fa-solid fa-truck" /> Free delivery
              on eligible orders
            </p>

            <p>
              <i className="fa-solid fa-rotate-left" /> Easy
              returns on eligible items
            </p>

            <p>
              <i className="fa-solid fa-shield-halved" /> Secure
              checkout
            </p>
          </div>
        </div>
      </section>

      <section className="detail-extra">
        <h2>Made for Your Everyday Elegance</h2>

        <p>
          Thoughtful style, beautiful details and comfort
          you'll love. Find your new favourite piece with
          LAVENDER.
        </p>
      </section>
    </main>
  );
}

export default ProductDetail;
