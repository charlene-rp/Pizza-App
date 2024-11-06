import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const pizzaMenu = [
  {
    name: "Seafood Persillade Pizza",
    ingredients: "Mussel, Baby Squid, Prawn, Garlic, Parsley Sauce",
    price: 22,
    photoName: "./starter/pizza/SeafoodPersillade.jpg",
    soldOut: false,
  },
  {
    name: "Smoked Salmon Pizza",
    ingredients: "Smoked Salmon, Dill, Cream Sauce",
    price: 24,
    photoName: "./starter/pizza/SmokedSalmon.jpg",
    soldOut: false,
  },
  {
    name: "Ham and Mushroom Pizza",
    ingredients: "Ham, Mushroom, Basil, Tomato Sauce",
    price: 20,
    photoName: "./starter/pizza/HamMushroom.jpg",
    soldOut: true,
  },
  {
    name: "Carbonara Pizza",
    ingredients: "Bacon, Egg, Cream Sauce",
    price: 18,
    photoName: "./starter/pizza/Carbonara.jpg",
    soldOut: false,
  },
  {
    name: "Chicken Laksa",
    ingredients: "Chicken Slice, Coconut Cream, Laksa Sauce",
    price: 21,
    photoName: "./starter/pizza/ChickenLaksa.jpg",
    soldOut: false,
  },
  {
    name: "Spanish Tapas",
    ingredients: "Chorizo, Mixed Capsicum, Onion, Tomato Sauce",
    price: 19,
    photoName: "./starter/pizza/SpanishTapas.jpg",
    soldOut: false,
  }
];

function PizzaCard({ pizza }) {
  return (
    <div className={`pizza ${pizza.soldOut ? 'sold-out' : ''}`}>
      <img src={pizza.photoName} alt={pizza.name} />
      <h2>{pizza.name}</h2>
      <p className="ingredients">{pizza.ingredients}</p>
      <p className="price">${pizza.price}</p>
      {pizza.soldOut && <p className="sold-out-label">Sold Out</p>}
    </div>
  );
}

function PizzaMenu() {
  return (
    <div className="pizza-list">
      {pizzaMenu.map((pizza, index) => (
        <PizzaCard key={index} pizza={pizza} />
      ))}
    </div>
  );
}

function App() {
  const currentTime = new Date().getHours();
  const isShopOpen = currentTime >= 10 && currentTime < 22;

  return (
    <div>
      <header>
        <h1>CHARLENE'S PIZZA CO.</h1>
        {isShopOpen && <p className="tagline">Authentic Italian Cuisine</p>}
      </header>
      <PizzaMenu />
      <footer>
        {isShopOpen ? (
          <>
            <p>We're currently open</p>
            <button>Order</button>
          </>
        ) : (
          <p>Sorry, we're closed</p>
        )}
      </footer>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

