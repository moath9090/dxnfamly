import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../utils/data';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link 
      to={`/recipes/${product.id}`} 
      className="card group hover:-translate-y-2 transition-transform duration-300"
    >
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-4">
        <h3 className="font-bold text-lg text-center group-hover:text-primary-600 transition-colors">
          {product.name}
        </h3>
      </div>
    </Link>
  );
};

export default ProductCard;