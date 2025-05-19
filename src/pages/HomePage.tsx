import React from 'react';
import { sectionCards } from '../utils/data';
import SectionCard from '../components/HomePage/SectionCard';
import RegisterButton from '../components/HomePage/RegisterButton';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-[#0075b3] to-[#0088cc] text-white text-center">
        <div className="container-custom text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            مرحباً بكم في منصة عائلة دي إكس إن  
          </h1>
          <p className="text-primary-100 text-lg md:text-xl max-w-3xl mx-auto">
            وجهتكم الأولى للحصول على منتجات طبيعية وحلول صحية آمنة لحياة أفضل
          </p>
        </div>
      </section>
      
      {/* Main Sections */}
      <section className="section">
        <div className="container-custom">
          <h2 className="section-title">استكشف أقسام الموقع</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sectionCards.map(card => (
              <SectionCard key={card.id} card={card} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Registration CTA */}
      <section className="section bg-gray-100">
        <div className="container-custom">
          <RegisterButton />
        </div>
      </section>
      
      {/* Features/Benefits */}
      <section className="section">
        <div className="container-custom">
          <h2 className="section-title">لماذا تختار منتجات دي إكس إن؟</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">100% منتجات طبيعية</h3>
              <p className="text-gray-600">جميع منتجاتنا مصنوعة من مكونات طبيعية عالية الجودة، بدون مواد كيميائية ضارة</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">فعالية مثبتة علمياً</h3>
              <p className="text-gray-600">منتجات مدعومة بأبحاث علمية وتجارب سريرية تثبت فعاليتها في تحسين الصحة العامة</p>
            </div>
            
            <div className="card p-6 text-center">
              <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-2">قيمة مقابل المال</h3>
              <p className="text-gray-600">نقدم منتجات عالية الجودة بأسعار معقولة مع ضمان رضا العملاء</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;