import React from 'react';
import ProductCard from './ProductCard';

const firstName = "Mohamed"; // Remplacez par votre prénom ou laissez vide

function App() {
  return (
    <div className="container mt-5">
      <ProductCard />
      <div className="text-center mt-4">
        <h4>{firstName ? `Bonjour, ${firstName}` : "Bonjour !"}</h4>
        {firstName && (
          <img
            src="https://via.placeholder.com/150"
            alt="Placeholder"
            className="mt-3"
          />
        )}
      </div>
    </div>
  );
}

export default App;
const product = {
    name: "Laptop Pro",
    price: "$1200",
    description: "A high-end laptop with excellent performance.",
    image: "https://via.placeholder.com/300",
  };
  
  export default product;

  function Price() {
    return <h4>{product.price}</h4>;
  }
  
  export default Price;
  
  function Description() {
    return <p>{product.description}</p>;
  }
  
  export default Description;

  function Image() {
    return <img src={product.image} alt={product.name} className="img-fluid" />;
  }
  
  export default Image;