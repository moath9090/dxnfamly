import React from 'react';
import YouTube from 'react-youtube';
import { ExternalLink } from 'lucide-react';

const RegistrationPage: React.FC = () => {
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
        <h1 className="section-title">انضم إلى عائلة دي إكس إن</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <div className="card p-6">
            <h2 className="text-xl font-bold mb-4 text-primary-700">شاهد هذا الفيديو التوضيحي</h2>
            <div className="aspect-video mb-4">
              <YouTube
                videoId="-ySAyBtMZBU"
                opts={opts}
                className="w-full"
              />
            </div>
            <p className="text-gray-600">
              يشرح هذا الفيديو جميع المزايا والفوائد التي ستحصل عليها كعضو في عائلة دي إكس إن، 
              وكيفية الاستفادة القصوى من العضوية.
            </p>
          </div>
          
          {/* Registration Benefits */}
          <div>
            <h2 className="text-xl font-bold mb-6 text-primary-700">مزايا العضوية</h2>
            
            <ul className="space-y-4">
              <li className="flex">
                <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary-100 text-primary-600 ml-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">أسعار خاصة للأعضاء</h3>
                  <p className="text-gray-600">استمتع بخصومات حصرية على جميع منتجات دي إكس إن</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary-100 text-primary-600 ml-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">دعم متخصص</h3>
                  <p className="text-gray-600">احصل على استشارات صحية مجانية وإرشادات مخصصة لاحتياجاتك</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary-100 text-primary-600 ml-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">ورش عمل حصرية</h3>
                  <p className="text-gray-600">حضور ورش عمل وفعاليات خاصة بالأعضاء للتعرف على أحدث المنتجات والاستخدامات</p>
                </div>
              </li>
              
              <li className="flex">
                <div className="rounded-full h-6 w-6 flex items-center justify-center bg-primary-100 text-primary-600 ml-3 mt-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">فرصة للدخل الإضافي</h3>
                  <p className="text-gray-600">إمكانية بناء عملك الخاص ومشاركة المنتجات مع الآخرين وتحقيق دخل إضافي</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-8 text-center">
              <a 
                href="https://eworld.dxn2u.com/s/accreg/ar/149025889" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-accent inline-flex items-center text-lg"
              >
                <ExternalLink size={20} className="ml-2" />
                سجل الآن عبر الموقع الرسمي
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;