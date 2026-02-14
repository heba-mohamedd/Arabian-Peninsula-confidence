import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "Home": "Home",
                    "Sectors": "Sectors",
                    "Certificates": "Certificates",
                    "Services": "Services",
                    "About Us": "About Us",
                    "Contact Us": "Contact Us",
                    "Blog": "Blog",
                    "Download Profile": "Company Profile",
                    "Company Profile": "Company Profile",
                    "WhatsAppInitialMessage": "Hello, I would like to inquire about your services.",
                    "WhatsAppChat": "Chat with us",
                    "PageNotFoundTitle": "Page Not Found",
                    "PageNotFoundDescription": "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.",
                    "BackToHome": "Back to Home",
                    "MetaDescription": "We provide integrated and innovative solutions in facility management and systems, committed to the highest quality standards to achieve our customers' satisfaction.",
                    "MetaKeywords": "Facility Management, Operation, Maintenance, Saudi Arabia",
                    "Loading": "Loading...",
                    "Language": "العربية",

                    // Footer
                    "FooterDescription": "We provide integrated and innovative solutions in facility management and systems, committed to the highest quality standards to achieve our customers' satisfaction.",
                    "Quick Links": "Quick Links",
                    "Our Services": "Our Services",
                    "Facility Management": "Facility Management",
                    "Security Systems": "Security Systems",
                    "Operation and Maintenance": "Operation and Maintenance",
                    "General Cleaning": "General Cleaning",
                    "Newsletter": "Newsletter",
                    "NewsletterDescription": "Subscribe with us to receive the latest news about our services and projects.",
                    "Email Placeholder": "Email Address",
                    "Subscribe": "Subscribe",
                    "Location": "Saudi Arabia, Riyadh",
                    "All Rights Reserved": "All rights reserved ©",
                    "Designed and Developed by": "Designed and Developed by",

                    // About Us
                    "Know the Entity": "Get to Know Us",
                    "About Hero Description": "We build the future with quality and innovation standards, to be your ideal partner in success.",
                    "Our Story": "Our Story",
                    "Default Story Title": "We Create Excellence in Every Project",
                    "High Quality": "High Quality",
                    "High Quality Description": "We commit to the highest international quality standards",
                    "Outstanding Experience": "Outstanding Experience",
                    "Outstanding Experience Description": "Specialized and professional team",
                    "Our Strategic Pillars": "Our Strategic Pillars",
                    "Our Vision": "Our Vision",
                    "Our Mission": "Our Mission",
                    "Our Values": "Our Values",
                    "We Work For You": "We Work For You",
                    "With Passion and Perfection": "With Passion and Perfection",
                    "Bottom Promo Description": "We always strive to provide the best solutions and services to our clients and partners, and we believe that true success lies in building sustainable relationships.",
                    "Contact Us Now": "Contact Us Now",
                    "Vision Future": "Vision 2030",

                    // Home
                    "Request a Quote": "Request a Quote",
                    "Request Quote Description": "Through the quote request form, you can share your technical and operational requirements for our team to study and prepare a comprehensive quote.",
                    "Request Quote Button": "Request Price Quote",

                    // Hero
                    "First Choice": "The First Choice in the Kingdom",
                    "Smart Solutions": "Smart Solutions",
                    "Sustainable Future": "For a Sustainable Future",
                    "Hero Description": "We provide an integrated system of specialized services in facility management and systems operation, with international standards that ensure efficiency, quality, and sustainability for your ambitious projects.",
                    "Explore Services": "Explore Our Services",
                    "Browse More": "Browse More",

                    // Home About
                    "Strategic Partner": "Your Strategic Partner for Success and Excellence",
                    "Years Experience": "Years of Experience",

                    // Our Service
                    "Sectors We Serve": "Sectors We Serve",
                    "Sectors Description": "We provide our solutions to several vital sectors, taking into account the operational requirements and regulations of each sector to ensure compliance and quality.",

                    // Contact Us
                    "Happy To Help": "We are always happy",
                    "To Help You": "to help you",
                    "Contact Description": "The company was established to be a professional entity providing integrated solutions in a number of vital sectors, committed to applying the highest operational and administrative standards.",
                    "Phone Number": "Phone Number",
                    "Our Information": "Our Information",
                    "Request Quote Title": "Request a Price Quote",
                    "Request Quote Long Description": "You can submit a quote request for our services by filling out the form, where our specialized team will review the request and contact you to provide a suitable offer according to your operational and technical requirements.",

                    // Services & Sectors
                    "Note": "Note",
                    "Our Business Sectors": "Our Business Sectors",
                    "Sectors Page Description": "We work across a range of vital sectors through a unified operating model that ensures efficiency and sustainability in all our activities.",
                    "Sector Not Found": "Sector Not Found",
                    "Request Consultation": "Request Operational Consultation",
                    "Our Services in Sector": "Our Services in this Sector",
                    "Our Methodology in": "Our Methodology in",
                    "Looking for Partner Prefix": "Are you looking for a reliable partner for the operation and maintenance of",

                    // Blog
                    "Read More": "Read More",
                    "Categories": "Categories",
                    "Most Read Articles": "Most Read Articles",
                    "Featured Article": "Featured Article",
                    "Return to Sectors": "Return to Sectors",
                    "Sector Details": "Sector Details",
                    "About": "About",
                    "We follow a structured approach to ensure the best results": "We follow a structured approach to ensure the best results.",
                    "Learn more": "Learn more",
                    "Article": "Article",
                    "Article Not Found": "Article Not Found",
                    "Back to Blog": "Back to Blog",
                    "min read": "min read",
                    "Need Consultation?": "Need Consultation?",
                    "Contact our experts to find the best solutions for your business.": "Contact our experts to find the best solutions for your business.",
                },
            },
            ar: {
                translation: {
                    "Home": "الرئيسية",
                    "Sectors": "القطاعات",
                    "Certificates": "الشهادات",
                    "Services": "الخدمات",
                    "About Us": "من نحن",
                    "Contact Us": "تواصل معنا",
                    "Blog": "المدونة",
                    "Download Profile": "تعرف على الشركة",
                    "Company Profile": "ملف الشركة",
                    "WhatsAppInitialMessage": "مرحباً، أود الاستفسار عن خدماتكم.",
                    "WhatsAppChat": "تواصل معنا",
                    "PageNotFoundTitle": "الصفحة غير موجودة",
                    "PageNotFoundDescription": "الصفحة التي تبحث عنها قد تكون حذفت، تم تغيير اسمها، أو غير متاحة مؤقتاً.",
                    "BackToHome": "العودة للرئيسية",
                    "MetaDescription": "نقدم حلولاً متكاملة ومبتكرة في إدارة المرافق والأنظمة، نلتزم بأعلى معايير الجودة لتحقيق رضا عملائنا.",
                    "MetaKeywords": "إدارة المرافق, تشغيل, صيانة, السعودية",
                    "Loading": "جاري التحميل...",
                    "Language": "English",

                    // Footer
                    "FooterDescription": "نقدم حلولاً متكاملة ومبتكرة في إدارة المرافق والأنظمة، نلتزم بأعلى معايير الجودة لتحقيق رضا عملائنا.",
                    "Quick Links": "روابط سريعة",
                    "Our Services": "خدماتنا",
                    "Facility Management": "إدارة المرافق",
                    "Security Systems": "الأنظمة الأمنية",
                    "Operation and Maintenance": "التشغيل والصيانة",
                    "General Cleaning": "النظافة العامة",
                    "Newsletter": "القائمة البريدية",
                    "NewsletterDescription": "اشترك معنا ليصلك كل جديد عن خدماتنا ومشاريعنا.",
                    "Email Placeholder": "البريد الإلكتروني",
                    "Subscribe": "اشتراك",
                    "Location": "المملكة العربية السعودية، الرياض",
                    "All Rights Reserved": "جميع الحقوق محفوظة ©",
                    "Designed and Developed by": "تصميم وبرمجة",

                    // About Us
                    "Know the Entity": "تعرف على الكيان",
                    "About Hero Description": "نحن نبني المستقبل بمعايير الجودة والابتكار، لنكون شريكك الأمثل في النجاح.",
                    "Our Story": "قصتنــا",
                    "Default Story Title": "نحن نصنع التميز في كل مشروع",
                    "High Quality": "جودة عالية",
                    "High Quality Description": "نلتزم بأعلى معايير الجودة العالمية",
                    "Outstanding Experience": "خبرة متميزة",
                    "Outstanding Experience Description": "فريق عمل متخصص ومحترف",
                    "Our Strategic Pillars": "ركائزنا الاستراتيجية",
                    "Our Vision": "رؤيتنا",
                    "Our Mission": "رسالتنا",
                    "Our Values": "قيمنا",
                    "We Work For You": "نعمل لأجلكم",
                    "With Passion and Perfection": "بشغف وإتقان",
                    "Bottom Promo Description": "نسعى دائماً لتقديم أفضل الحلول والخدمات لعملائنا وشركائنا، ونؤمن بأن النجاح الحقيقي يكمن في بناء علاقات مستدامة.",
                    "Contact Us Now": "تواصل معنا الآن",
                    "Vision Future": "رؤية المستقبل",

                    // Home
                    "Request a Quote": "تقديم طلب عرض سعر",
                    "Request Quote Description": "من خلال نموذج طلب عرض السعر، يمكنكم مشاركة متطلباتكم الفنية والتشغيلية\n ليقوم فريقنا بدراستها وإعداد عرض سعر متكامل",
                    "Request Quote Button": "طلب عرض السعر",

                    // Hero
                    "First Choice": "الخيار الأول في المملكة",
                    "Smart Solutions": "حلول ذكية",
                    "Sustainable Future": "لمستقبل مستدام",
                    "Hero Description": "نقدم منظومة متكاملة من الخدمات المتخصصة في إدارة المرافق وتشغيل الأنظمة، بمعايير عالمية تضمن الكفاءة، الجودة، والاستدامة لمشاريعكم الطموحة.",
                    "Explore Services": "تعرف على خدماتنا",
                    "Browse More": "تصفح المزيد",

                    // Home About
                    "Strategic Partner": "شريكك الاستراتيجي للنجاح والتميز",
                    "Years Experience": "سنوات خبرة",

                    // Our Service
                    "Sectors We Serve": "القطاعات التي نخدمها",
                    "Sectors Description": "نقدم حلولنا لعدة قطاعات حيوية، مع مراعاة متطلبات التشغيل والأنظمة الخاصة بكل قطاع لضمان الامتثال والجودة.",

                    // Contact Us
                    "Happy To Help": "نسعد دائماً",
                    "To Help You": "بمساعدتك",
                    "Contact Description": "تأسست الشركة لتكون كيانًا مهنيًا يقدم حلولًا متكاملة في عدد من القطاعات الحيوية، مع الالتزام بتطبيق أعلى المعايير التشغيلية والإدارية.",
                    "Phone Number": "رقم الهاتف",
                    "Our Information": "معلوماتنا",
                    "Request Quote Title": "طلب عرض سعر",
                    "Request Quote Long Description": "يمكنكم تقديم طلب عرض سعر لخدماتنا عبر تعبئة النموذج، حيث سيقوم فريقنا المختص بمراجعة الطلب والتواصل معكم لتقديم عرض مناسب وفق متطلباتكم التشغيلية والفنية.",

                    // Services & Sectors
                    "Note": "ملاحظة",
                    "Our Business": "أعمالنا",
                    "Our Business Sectors": "قطاعات أعمالنا",
                    "Sectors Page Description": "نعمل عبر مجموعة من القطاعات الحيوية من خلال نموذج تشغيلي موحد يضمن الكفاءة والاستدامة في جميع أنشطتنا",
                    "Sector Not Found": "القطاع غير موجود",
                    "Request Consultation": "اطلب استشارة تشغيلية",
                    "Our Services in Sector": "خدماتنا في هذا القطاع",
                    "Our Methodology in": "منهجيتنا في",
                    "Looking for Partner Prefix": "هل تبحث عن شريك موثوق لتشغيل وصيانة",
                    "Read More": "اقرأ المزيد",
                    "Categories": "الفئات",
                    "Most Read Articles": "أكثر المقالات قراءة",
                    "Featured Article": "مقال مميز",
                    "Return to Sectors": "العودة للقطاعات",
                    "Sector Details": "تفاصيل القطاع",
                    "About": "عن",
                    "We follow a structured approach to ensure the best results": "نتبع نهجاً هيكلياً لضمان أفضل النتائج.",
                    "Learn more": "اعرف المزيد",
                    "Article": "مقال",
                    "Article Not Found": "المقال غير موجود",
                    "Back to Blog": "العودة للمدونة",
                    "min read": "دقيقة قراءة",
                    "Need Consultation?": "هل تحتاج استشارة؟",
                    "Contact our experts to find the best solutions for your business.": "تواصل مع خبرائنا لإيجاد الحلول الأمثل لمؤسستك.",
                },
            },
        },
        lng: "ar",
        fallbackLng: "ar",
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
