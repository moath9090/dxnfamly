import React from 'react';
import { products } from '../utils/data';
import ProductCard from '../components/Recipes/ProductCard';

const RecipesPage: React.FC = () => {
  return (
    <div className="section">
      <div className="container-custom">
        <h1 className="section-title"> نبذة عن بعض المنتجات    </h1>
        <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
من خلال زيارة فرع DXN القريب منك           اكتشف مجموعة متنوعة من الوصفات العلاجية الطبيعية باستخدام منتجات دي إكس إن المختلفة
اكثر من 300 منتج طبيعي 100% ذا جودة عالية        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipesPage;