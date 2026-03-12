import fs from 'fs';

const en = JSON.parse(fs.readFileSync('messages/en.json', 'utf8'));
const ar = JSON.parse(fs.readFileSync('messages/ar.json', 'utf8'));

// Retail Store page
en.retailStore = {
  "heroTitle": "Crypto Payment in Stores",
  "heroDesc": "Accept cryptocurrency payments at your retail store with Pallapay. Provide fast, reliable, and convenient cryptocurrency transactions in-store, enhancing customer satisfaction and boosting sales.",
  "getStarted": "Get Started",
  "perfectMatch": "Your Perfect Match",
  "support247": "24/7 Support",
  "multipleCryptoSupport": "Multiple Crypto Support",
  "lowestFees": "Lowest Fees",
  "fastTransactions": "Fast Transactions",
  "sectionTitle": "Crypto Payments in Stores!",
  "sectionDesc": "Pallapay enables physical retail stores to accept cryptocurrency payments with ease using Pallapay crypto POS machines. Whether you're operating a fashion boutique, electronics store, or specialty shop, you can accept USDT, Ethereum, USDC, and other major cryptocurrencies at the counter—providing a fast, secure, and modern payment experience for your customers.",
  "startIntegration": "Start Integration",
  "checkApiDocs": "Check API Docs",
  "bottomDesc": "With zero merchant fees on transactions, instant transaction confirmations, and no charge-backs, Pallapay crypto payment gateway helps retail shops reduce fraud, cut costs, and attract crypto-savvy buyers. Pallapay crypto POS machines are easy to set up and use, enabling seamless in-store crypto transactions. For added flexibility, you can accept cryptocurrency payments by sending payment links to customers for remote or contactless payments."
};
ar.retailStore = {
  "heroTitle": "مدفوعات العملات المشفرة في المتاجر",
  "heroDesc": "اقبل مدفوعات العملات المشفرة في متجرك بالتجزئة مع بالاباي. وفر معاملات عملات مشفرة سريعة وموثوقة ومريحة داخل المتجر، مما يعزز رضا العملاء ويزيد المبيعات.",
  "getStarted": "ابدأ الآن",
  "perfectMatch": "شريكك المثالي",
  "support247": "دعم 24/7",
  "multipleCryptoSupport": "دعم عملات متعددة",
  "lowestFees": "أقل الرسوم",
  "fastTransactions": "معاملات سريعة",
  "sectionTitle": "مدفوعات العملات المشفرة في المتاجر!",
  "sectionDesc": "تتيح بالاباي لمتاجر التجزئة المادية قبول مدفوعات العملات المشفرة بسهولة باستخدام أجهزة نقاط البيع للعملات المشفرة من بالاباي. سواء كنت تدير بوتيك أزياء أو متجر إلكترونيات أو متجر متخصص، يمكنك قبول USDT وإيثيريوم وUSDC وغيرها من العملات المشفرة الرئيسية عند الكاونتر.",
  "startIntegration": "بدء التكامل",
  "checkApiDocs": "مراجعة وثائق API",
  "bottomDesc": "مع صفر رسوم تاجر على المعاملات وتأكيدات فورية للمعاملات وبلا مراجعات، تساعد بوابة دفع بالاباي للعملات المشفرة متاجر التجزئة على تقليل الاحتيال وخفض التكاليف وجذب المشترين من مستخدمي العملات المشفرة."
};

// Buy Bitcoin Dubai pages (they're very similar - use a shared namespace)
en.buyBitcoinDubai = {
  "heroTitle": "Buy Bitcoin in Dubai UAE With Cash",
  "buyOnline": "Buy online now",
  "visitOffice": "Visit our office",
  "calculatorTitle": "Calculate Bitcoin to Cash",
  "ourFeatures": "Our Features",
  "bestRateTitle": "We guarantee the best rate",
  "bestRateDesc": "We price match all local dealer competitors (including their online prices).",
  "fastPayoutsTitle": "Fast Payouts",
  "fastPayoutsDesc": "Fast cryptocurrency payouts - no more waiting time",
  "bestCommissionsTitle": "Best commissions available",
  "bestCommissionsDesc": "Great commission structure for all transactions with no hidden fees.",
  "globalPaymentsTitle": "Global payments",
  "globalPaymentsDesc": "We accept payments from nearly anywhere, as we support 180+ countries",
  "insuranceTitle": "$100,000 Insurance",
  "insuranceDesc": "Secure Checkout with coverage up to $100,000 Identity Protection.",
  "supportTitle": "Live 24/7 support",
  "supportDesc": "Our dedicated, multilingual support team is ready to help you out via email or live chat",
  "howToBuyTitle": "How to Buy Bitcoin in Dubai with Cash or Card",
  "whyTrustTitle": "Why people trust Pallapay",
  "step1title": "Getting Started",
  "step2title": "What is Bitcoin and How Does it Work?",
  "step3title": "Why use pallapay to Buy Bitcoin in Dubai?",
  "step4title": "Choosing a Bitcoin Wallet",
  "whyBuyTitle": "Why you should buy bitcoin in the trustable exchange?",
  "howWorkTitle": "How does this buy bitcoin work in Dubai?",
  "getRateStep": "1. Get Rate",
  "getRateDesc": "Calculate the best exchange rate for your Bitcoin.",
  "buyBitcoinStep": "2. Buy Bitcoin",
  "buyBitcoinDesc": "Visit on of our VIP branches in Dubai and make the payment.",
  "getCoinStep": "3. Get your Coin",
  "getCoinDesc": "You will receive your Bitcoin or other crypto at the same time after payment completed.",
  "trustItems": {
    "noHiddenFees": "No hidden fees",
    "verification": "Verification in less than 5 minutes",
    "licenses": "Licenses Payment Service Providers",
    "support": "24/7/365 live customer support",
    "team": "40-person team with expertise and experience",
    "transactions": "More than $170,000,000 in annual transactions",
    "instantPayouts": "Instant cryptocurrency payouts",
    "lowestFees": "Lowest fees on the market",
    "beginners": "Excellent option for beginners and pros",
    "countries": "Serving 180+ countries"
  }
};
ar.buyBitcoinDubai = {
  "heroTitle": "شراء البيتكوين في دبي الإمارات نقداً",
  "buyOnline": "اشتري الآن عبر الإنترنت",
  "visitOffice": "زر مكتبنا",
  "calculatorTitle": "احسب البيتكوين إلى النقد",
  "ourFeatures": "مميزاتنا",
  "bestRateTitle": "نضمن أفضل سعر",
  "bestRateDesc": "نطابق أسعار جميع المنافسين المحليين (بما في ذلك أسعارهم الإلكترونية).",
  "fastPayoutsTitle": "مدفوعات سريعة",
  "fastPayoutsDesc": "مدفوعات عملات مشفرة سريعة - لا وقت انتظار بعد الآن",
  "bestCommissionsTitle": "أفضل العمولات المتاحة",
  "bestCommissionsDesc": "هيكل عمولة رائع لجميع المعاملات دون رسوم خفية.",
  "globalPaymentsTitle": "مدفوعات عالمية",
  "globalPaymentsDesc": "نقبل المدفوعات من أي مكان تقريباً، حيث ندعم أكثر من 180 دولة",
  "insuranceTitle": "تأمين بقيمة 100,000 دولار",
  "insuranceDesc": "دفع آمن مع تغطية تصل إلى 100,000 دولار لحماية الهوية.",
  "supportTitle": "دعم مباشر على مدار الساعة",
  "supportDesc": "فريق الدعم المتعدد اللغات لدينا مستعد لمساعدتك عبر البريد الإلكتروني أو الدردشة المباشرة",
  "howToBuyTitle": "كيفية شراء البيتكوين في دبي نقداً أو بالبطاقة",
  "whyTrustTitle": "لماذا يثق الناس ببالاباي",
  "step1title": "البدء",
  "step2title": "ما هو البيتكوين وكيف يعمل؟",
  "step3title": "لماذا تستخدم بالاباي لشراء البيتكوين في دبي؟",
  "step4title": "اختيار محفظة البيتكوين",
  "whyBuyTitle": "لماذا يجب عليك شراء البيتكوين في صرافة موثوقة؟",
  "howWorkTitle": "كيف يعمل شراء البيتكوين هذا في دبي؟",
  "getRateStep": "1. احصل على السعر",
  "getRateDesc": "احسب أفضل سعر صرف للبيتكوين الخاص بك.",
  "buyBitcoinStep": "2. اشتر البيتكوين",
  "buyBitcoinDesc": "قم بزيارة إحدى فروعنا VIP في دبي وقم بالدفع.",
  "getCoinStep": "3. احصل على عملتك",
  "getCoinDesc": "ستستلم البيتكوين أو أي عملة مشفرة أخرى في نفس وقت اكتمال الدفع.",
  "trustItems": {
    "noHiddenFees": "لا رسوم خفية",
    "verification": "التحقق في أقل من 5 دقائق",
    "licenses": "مزودو خدمات دفع مرخصون",
    "support": "دعم عملاء مباشر على مدار الساعة 365 يوماً",
    "team": "فريق من 40 شخصاً بخبرة ومهارة",
    "transactions": "أكثر من 170,000,000 دولار في المعاملات السنوية",
    "instantPayouts": "مدفوعات عملات مشفرة فورية",
    "lowestFees": "أقل الرسوم في السوق",
    "beginners": "خيار ممتاز للمبتدئين والمحترفين",
    "countries": "نخدم أكثر من 180 دولة"
  }
};

// Mobile Apps page
en.mobileApps = {
  "title": "Mobile Apps",
  "description": "Links and info about our mobile applications."
};
ar.mobileApps = {
  "title": "تطبيقات الجوال",
  "description": "روابط ومعلومات حول تطبيقات الجوال لدينا."
};

// About Us page
en.aboutUs = {
  "breadcrumbHome": "Home",
  "breadcrumbAbout": "About Us"
};
ar.aboutUs = {
  "breadcrumbHome": "الرئيسية",
  "breadcrumbAbout": "من نحن"
};

// Dashboard page
en.dashboardPage = {
  "heroTitle": "Pallapay Dashboard",
  "heroDesc": "Manage all your crypto payments in one place."
};
ar.dashboardPage = {
  "heroTitle": "لوحة تحكم بالاباي",
  "heroDesc": "إدارة جميع مدفوعاتك المشفرة في مكان واحد."
};

// All Solutions page
en.allSolutions = {
  "heroTitle": "All Solutions",
  "heroDesc": "Explore all payment solutions offered by Pallapay."
};
ar.allSolutions = {
  "heroTitle": "جميع الحلول",
  "heroDesc": "استكشف جميع حلول الدفع التي تقدمها بالاباي."
};

// Gift Card page
en.giftCard = {
  "breadcrumbHome": "Home",
  "breadcrumbGiftCard": "Gift Card"
};
ar.giftCard = {
  "breadcrumbHome": "الرئيسية",
  "breadcrumbGiftCard": "بطاقات الهدايا"
};

fs.writeFileSync('messages/en.json', JSON.stringify(en, null, 2));
fs.writeFileSync('messages/ar.json', JSON.stringify(ar, null, 2));
console.log('All remaining translation keys added!');
