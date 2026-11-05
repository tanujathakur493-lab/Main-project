
import React from "react";

const categories = [
  {
    id: 1,
    name: "Clothing",
    description: "Everyday styles & timeless outfits",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80",
    count: "Explore clothing",
  },
  {
    id: 2,
    name: "Shoes",
    description: "Step out in your own style",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80",
    count: "Explore shoes",
  },
  {
    id: 3,
    name: "Bags",
    description: "Carry your everyday essentials",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=800&q=80",
    count: "Explore bags",
  },
  {
    id: 4,
    name: "Accessories",
    description: "Little details, big impact",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=800&q=80",
    count: "Explore accessories",
  },
];

function Categories() {
  return (
    <main className="categories-page">
      <section className="categories-hero">
        <span className="categories-eyebrow">THE LAVENDER COLLECTION</span>
        <h1>Find Your <span>Style</span></h1>
        <p>
          Discover thoughtfully curated collections made for
          every mood, moment, and version of you.
        </p>
      </section>

      <section className="categories-content">
        <div className="categories-section-heading">
          <div>
            <span className="categories-small-title">EXPLORE OUR WORLD</span>
            <h2>Shop by Category</h2>
          </div>
          <p>Find something you'll love.</p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <article className="category-card" key={category.id}>
              <div className="category-image">
                <img src={category.image} alt={category.name} />
                <span className="category-number">
                  0{category.id}
                </span>
              </div>

              <div className="category-info">
                <div>
                  <h3>{category.name}</h3>
                  <p>{category.description}</p>
                </div>

                <button type="button" aria-label={category.count}>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="categories-bottom">
        <span>YOUR STYLE, YOUR STORY</span>
        <h2>Make Every Outfit <span>Count.</span></h2>
        <p>Explore the collection and find your next favourite.</p>
      </section>
    </main>
  );
}

export default Categories;
