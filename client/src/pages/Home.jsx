import { useState } from "react";
import "../styles/Home.css"; // Link to your updated CSS

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const categories = [
    {
      id: 1,
      name: "Vegetarian",
      items: ["Veg Burger", "Paneer Roll", "Salad", "Fruit Bowl"],
    },
    {
      id: 2,
      name: "Non-Vegetarian",
      items: [
        "Chicken Sandwich",
        "Egg Curry",
        "Chicken Biryani",
        "Grilled Fish",
      ],
    },
    {
      id: 3,
      name: "Diet",
      items: [
        "Egg White Muffins",
        "Greek Yogurt Parfaits",
        "Avocado Toast",
        "Veggie Stir-Fry",
      ],
    },
    {
      id: 4,
      name: "Fasting",
      items: [
        "Fruits",
        "Nuts and Seeds",
        "Root Vegetables",
        "Grains (Varies by Type of Fasting)",
      ],
    },
  ];

  return (
    <main>
      <section className="hero-section">
        <div className="container">
          <h1 className="main-heading">Welcome to GECIA&apos;s CANTEEN</h1>
          <p className="description">Your favorite meal, freshly prepared!</p>
        </div>
      </section>

      <section className="categories-section">
        <div className="container">
          <h2 className="section-heading">See what&apos;s in the menu</h2>
          <div className="categories-flex">
            {categories.map((category) => (
              <div
                key={category.id}
                className="category-card"
                onClick={() => setSelectedCategory(category)}
              >
                <h3>{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedCategory && (
        <section className="menu-section">
          <div className="container">
            <h2 className="section-heading">Menu: {selectedCategory.name}</h2>
            <div className="items-flex">
              {selectedCategory.items.map((item, index) => (
                <div key={index} className="item-card">
                  <h4>{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
};

export default Home;
