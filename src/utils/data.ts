// Mock data for website content

export interface Product {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  usage: string;
  videoId: string;
}

export interface TeamMember {
  id: number;
  name: string;
  avatar: string;
  membershipNumber: string;
  story: string;
}

export interface Video {
  id: number;
  title: string;
  videoId: string;
  description: string;
}

export interface SectionCard {
  id: number;
  title: string;
  imageUrl: string;
  path: string;
}

// Section cards for homepage
export const sectionCards: SectionCard[] = [
  {
    id: 1,
    title: "شروحات العمل الفيديو",
    imageUrl: "https://www.shutterstock.com/image-photo/male-business-coach-speaker-suit-600nw-1361250578.jpg",
    path: "/videos"
  },
  {
    id: 2,
    title: " نبذة عن بعض المنتجات    ",
    imageUrl: "https://img.wattpad.com/ce90dd470518f1924e5b7672bc54c9023b1b2ccd/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6c344950664b5357326b364651773d3d2d3734303534393538312e313561353437383139353439633335653538393631363539353333322e6a7067?s=fit&w=720&h=720",
    path: "/recipes"
  },
  {
    id: 3,
    title: "أعضاء فريقي",
    imageUrl: "https://images.pexels.com/photos/3184432/pexels-photo-3184432.jpeg",
    path: "/team"
  }
];

// Products data
export const products: Product[] = [
  {
    id: 1,
    name: "       🟤 الفطر الريشي (Reishilium Powder) من DXN – سر الصحة الطويلة والعافية المتجددة ",
    imageUrl: "https://fv5-3.files.fm/thumb_show.php?i=ry89agwfdr&view&v=1&PHPSESSID=1cc8071158843443bc219e1794fd40a426f571d9",
    description:   " مسحوق الريشيليوم من DXN هو مكمل غذائي طبيعي فاخر مستخلص من فطر الجانوديرما لوسيدوم (المعروف باسم الفطر الريشي) وجذوره الدقيقة المعروفة بـ الميشيليوم.يجمع هذا المنتج الفريد بين حكمة الطب الشرقي وتقنيات التصنيع الحديثة ليمنحك دفعة قوية لتعزيز مناعتك وتنشيط صحتك على مدار اليوم. ",
    usage: " 🔸 الجرعة الموصى بها:نصف ملعقة صغيرة (حوالي 1 غرام) مرتين يوميًا.🔸 طرق الاستخدام:امزجه مع كوب ماء فاتر أو عصير طبيعي أو حليب نباتي.يمكن إضافته إلى الطعام مثل الشوربة أو العصيدة.🔸 أفضل توقيت:صباحًا على معدة فارغةمساءً قبل النوم .",
    videoId: "zveZsngV4zA"
  },
  {
    id: 2,
    name: "سبيرولينا دي إكس إن",
    imageUrl: "https://cdn.salla.sa/dmPXe/86adfeb1-87ac-4cc0-ab61-a080f838973c-1000x1000-iIiJidJSTwTuSchiyP3ty9rjPSAH9WJ2Oz87SYwB.png",
    description: "سبيرولينا دي إكس إن هي طحالب خضراء مزرقة غنية بالبروتين والفيتامينات والمعادن. تساعد في تعزيز الطاقة وتحسين وظائف الجهاز المناعي ومضادة للأكسدة.",
    usage: "يتناول كبسولتين مرتين يومياً مع الطعام. يمكن زيادة الجرعة تدريجياً حسب احتياج الجسم وتحت إشراف اختصاصي.",
    videoId: "jvGuUq6B_d4"
  },
  {
    id: 3,
    name: "كورديسيبس دي إكس إن",
    imageUrl: "https://www.dxnguide.com/wp-content/uploads/2024/06/IMG-20240604-WA0040.jpg",
    description: "كورديسيبس دي إكس إن مستخلص من فطر طبيعي يساعد في تحسين الأداء البدني وزيادة مستويات الطاقة. معروف بخصائصه المضادة للالتهابات وتعزيز وظائف الكلى.",
    usage: "يتناول كبسولة إلى كبسولتين يومياً مع وجبة الإفطار. في حالات التعب الشديد يمكن زيادة الجرعة إلى 3 كبسولات يومياً لفترة قصيرة.",
    videoId: "NHxawBwFDkk"
  },
  {
    id: 4,
    name: "قهوة لينجزي دي إكس إن",
    imageUrl: "https://dxntop.it/cdn/shop/files/dxn-lingzhi-black-coffee-caffe-nero-con-ganoderma-264432.png?v=1737510663",
    description: "قهوة لينجزي دي إكس إن مزيج فريد من القهوة العربية مع مستخلص فطر الريشي. توفر الطاقة والنشاط مع الفوائد الصحية لفطر الريشي.",
    usage: "تذوب ملعقة صغيرة (3 جرام) في كوب من الماء الساخن. يفضل تناولها صباحاً لتعزيز الطاقة خلال اليوم. يمكن إضافة الحليب أو العسل حسب الرغبة.",
    videoId: "gRCOxtVzvAA"
  },
  {
    id: 5,
    name: "شاي الأعشاب دي إكس إن",
    imageUrl: "https://www.kat.ae/wp-content/uploads/2022/12/DXN-LINGZHI-TEA-LATTE.jpg",
    description: "شاي الأعشاب دي إكس إن مزيج من الأعشاب الطبيعية المفيدة في تنظيف الجسم من السموم ودعم عملية الهضم. يحتوي على مكونات مضادة للأكسدة.",
    usage: "ينقع كيس الشاي في ماء ساخن لمدة 3-5 دقائق. يفضل تناوله بين الوجبات مرتين إلى ثلاث مرات يومياً. يمكن إضافة العسل لتحسين الطعم.",
    videoId: "T8o9aN4ZUFk"
  },
  {
    id: 6,
    name: "زيت النخيل الأحمر دي إكس إن",
    imageUrl: "https://cdn.salla.sa/dmPXe/ujeu8iOd1UpX178mUl2CMrGN2hR3poPILH4PHNhb.jpg",
    description: "زيت النخيل الأحمر دي إكس إن غني بفيتامين E وفيتامين A وبيتا كاروتين. يساعد في دعم صحة القلب وتقوية جهاز المناعة وتحسين صحة البشرة.",
    usage: "يمكن استخدامه في الطبخ أو إضافة ملعقة صغيرة إلى السلطة. للاستخدام الخارجي، يدلك على البشرة مرة واحدة يومياً للترطيب وحمايتها من الجفاف.",
    videoId: "XzgmOpOnz_A"
  }
];

// Team members data
export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "أحمد محمد",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg",
    membershipNumber: "123456789",
    story: "بدأت رحلتي مع دي إكس إن منذ خمس سنوات عندما كنت أبحث عن حلول طبيعية لتحسين صحتي. بعد تجربة المنتجات وملاحظة تحسن كبير، قررت مشاركة هذه التجربة مع الآخرين. اليوم، أنا فخور بمساعدة الناس على تحسين حياتهم من خلال منتجات دي إكس إن."
  },
  {
    id: 2,
    name: "فاطمة علي",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg",
    membershipNumber: "987654321",
    story: "كنت أعاني من مشاكل صحية مزمنة قبل التعرف على منتجات دي إكس إن. بعد الاستخدام المنتظم لمدة ستة أشهر، لاحظت تحسناً كبيراً في صحتي وطاقتي. هدفي الآن هو مساعدة الآخرين على اكتشاف فوائد هذه المنتجات الطبيعية والاستمتاع بحياة أكثر صحة."
  },
  {
    id: 3,
    name: "سارة حسن",
    avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg",
    membershipNumber: "456789123",
    story: "انضممت إلى عائلة دي إكس إن قبل ثلاث سنوات بعد أن أوصى بها صديق. كخبيرة تغذية، كنت متشككة في البداية، لكن بعد البحث في مكونات المنتجات وتجربتها بنفسي، أصبحت مقتنعة تماماً بفعاليتها. الآن أستخدم خبرتي لمساعدة عملائي على اختيار المنتجات المناسبة لاحتياجاتهم."
  },
  {
    id: 4,
    name: "محمد خالد",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
    membershipNumber: "789123456",
    story: "بدأت استخدام منتجات دي إكس إن لتحسين أدائي الرياضي، وسرعان ما لاحظت زيادة في قدرتي على التحمل وسرعة التعافي بعد التمارين. هذه التجربة الإيجابية دفعتني للانضمام إلى الفريق ومشاركة هذه المنتجات مع زملائي الرياضيين والعملاء في صالة الألعاب الرياضية التي أديرها."
  },
  {
    id: 5,
    name: "نورا أحمد",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    membershipNumber: "321654987",
    story: "كأم لثلاثة أطفال، كنت أبحث دائماً عن طرق طبيعية لتعزيز صحة عائلتي. منتجات دي إكس إن أصبحت جزءاً أساسياً من روتيننا اليومي، وأنا سعيدة بمشاركة تجربتنا مع العائلات الأخرى التي تبحث عن خيارات صحية وطبيعية."
  }
];

// Videos data
export const videos: Video[] = [
  {
    id: 1,
    title: "تعريف الشركة    ",
    videoId: "-roCxFYA_gY",
    description: " تعريف شركة DXN بشكل مختصر."
  },
  {
    id: 2,
    title: "         تعريف المنتجات",
    videoId: "3iy9iW7aey4",
    description: " تعريف منتحات DXN بشكل مختصر."
  },
  {
    id: 3,
    title: "  الخطة التسويقية",
    videoId: "zVgUpK4KSMk",
    description: " تعريف الخطة التسويقية بشكل مختصر."
  },
  {
    id: 4,
    title: "  الفريق التسويقي",
    videoId: "iI-AGwUbZSY",
    description: " تعريف الفريق التسويقي بشكل مختصر."
  },
  {
    id: 5,
    title: " 3 طرق لتحقيق المبيعات",
    videoId: "VBaY-I1_Xok",
    description: " شرح 3 طرق لتحقيق المبيعات بشكل مختصر."
  },
  {
    id: 6,
    title: " بناء الفريق التسويقي",
    videoId: "h1Qzbito9UE",
    description: " شرح طريقة دعوة شخص الى فريقك التسويقي بشكل مختصر."
  },
  {
    id: 6,
    title: "  كيف اتعامل مع مشروع DXN    ",
    videoId: "BCr_unm4ZjM",
    description: "   فيديو تحفيزي من السفير الملكي الاستاذ رائد عباس المحترم."
  }
];

 

// Contact information
export const contactInfo = {
  email: "Moath.Qasem.Alshmmary@Gmail.com",
  phone: "+9647722049181",
  socialMedia: [
    { id: 1, name: "Facebook", url: "https://www.facebook.com/moathqasim22" },
    { id: 2, name: "Instagram", url: "https://www.instagram.com/maaz_2q/?hl=ar" },
   // { id: 3, name: "Twitter", url: "https://twitter.com" },
    //{ id: 4, name: "YouTube", url: "https://youtube.com" },
    { id: 5, name: "WhatsApp", url: "https://wa.me/9647722049181" },
  ]
};