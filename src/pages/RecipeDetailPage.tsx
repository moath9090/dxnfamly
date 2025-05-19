import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import YouTube from 'react-youtube';
import { products } from '../utils/data';

const RecipeDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const productId = parseInt(id || '0');
  
  const product = products.find(p => p.id === productId);
  
  if (!product) {
    return (
      <div className="section text-center">
        <div className="container-custom">
          <h1 className="section-title">المنتج غير موجود</h1>
          <p className="mb-6">عذراً، لم يتم العثور على المنتج المطلوب.</p>
          <Link to="/recipes" className="btn btn-primary inline-flex items-center">
            <ArrowRight size={20} className="ml-2" />
            العودة إلى صفحة المنتجات
          </Link>
        </div>
      </div>
    );
  }
  
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      autoplay: 0,
      rel: 0,
      modestbranding: 1,
      hl: 'ar',
      cc_lang_pref: 'ar',
    },
  };

  return (
    <div className="section">
      <div className="container-custom">
        <Link to="/recipes" className="inline-flex items-center text-primary-600 hover:text-primary-800 mb-6">
          <ArrowRight size={20} className="ml-1" />
          العودة إلى صفحة المنتجات
        </Link>
        
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <img 
              src={product.imageUrl} 
              alt={product.name} 
              className="w-full h-full object-cover max-h-[500px]"
            />
            
            {/* Product Details */}
            <div className="p-8">
              <h1 className="text-3xl font-bold mb-6">{product.name}</h1>
              
              <div className="mb-8">
                <h2 className="text-xl font-bold mb-3 text-primary-700">الوصف</h2>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>
              
              <div>
                <h2 className="text-xl font-bold mb-3 text-primary-700">طريقة الاستخدام</h2>
                <p className="text-gray-700 leading-relaxed">{product.usage}</p>
              </div>
            </div>
          </div>
          
          {/* Video Section */}
          <div className="p-8 border-t">
            <h2 className="text-xl font-bold mb-6 text-primary-700">فيديو توضيحي</h2>
            <div className="aspect-video">
              <YouTube
                videoId={product.videoId}
                opts={opts}
                className="w-full"
              />
            </div>
          </div>
          
          {/* Additional Information */}
          <div className="p-8 bg-gray-50 border-t">
            <h2 className="text-xl font-bold mb-4 text-primary-700">نصائح إضافية</h2>
            <ul className="list-disc mr-6 space-y-2 text-gray-700">
              <li>يُفضل الالتزام بالجرعات المحددة وعدم تجاوزها.</li>
              <li>احفظ المنتج في مكان جاف وبارد بعيداً عن أشعة الشمس المباشرة.</li>
              
              <li>يمكن استشارة خبراء دي إكس إن للحصول على وصفات مخصصة لحالتك الصحية.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;