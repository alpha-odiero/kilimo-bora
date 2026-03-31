import { Product, BlogPost, FAQItem } from './types';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Premium Kale (Sukuma Wiki)',
    category: 'Vegetables',
    description: 'Fresh, nutrient-rich kale grown in the volcanic soils of the Rift Valley.',
    image: '/assets/images/greens.jpg'
  },
  {
    id: '2',
    name: 'Hass Avocados',
    category: 'Fruits',
    description: 'Creamy, high-oil content avocados, perfect for the global export market.',
    image: '/assets/images/avocado.jpg'
  },
  {
    id: '3',
    name: 'Sweet Corn on the Cob',
    category: 'Grains',
    description: 'Sun-ripened maize harvested at peak sweetness and handled with care for freshness.',
    image: '/assets/images/maize.jpg'
  },
  {
    id: '4',
    name: 'Red Onions',
    category: 'Vegetables',
    description: 'Firm, aromatic red onions ideal for both fresh markets and processing.',
    image: '/assets/images/onions.jpg'
  },
  {
    id: '5',
    name: 'Black Grapes',
    category: 'Fruits',
    description: 'Juicy, export-grade black grapes with excellent shelf life.',
    image: '/assets/images/grapes.jpg'
  },
  {
    id: '6',
    name: 'Watermelons',
    category: 'Fruits',
    description: 'Crisp, sweet watermelons grown in warm lowland climates.',
    image: '/assets/images/watermelon.jpg'
  },
  {
    id: '7',
    name: 'Red Chili Peppers',
    category: 'Herbs & Spices',
    description: 'Vibrant red chilies dried or fresh for spice blends and sauces.',
    image: '/assets/images/chili.jpg'
  },
  {
    id: '8',
    name: 'Green Grams (Mung Beans)',
    category: 'Grains',
    description: 'Protein-rich green grams cleaned and graded for export.',
    image: '/assets/images/mungbeans.jpg'
  },
  {
    id: '9',
    name: 'Sweet Potatoes',
    category: 'Vegetables',
    description: 'Deep-orange sweet potatoes with excellent dry-matter content.',
    image: '/assets/images/sweetpotatoes.jpg'
  },
  {
    id: '10',
    name: 'Sugarcane Stalks',
    category: 'Grains',
    description: 'High-brix sugarcane cut to length for juicing and processing.',
    image: '/assets/images/sugarcane.jpg'
  },
  {
    id: '11',
    name: 'Tropical Papaya',
    category: 'Fruits',
    description: 'Golden papayas harvested at breaker stage for optimal ripening in transit.',
    image: '/assets/images/tropical.jpg'
  },
  {
    id: '12',
    name: 'Citrus Oranges',
    category: 'Fruits',
    description: 'Bright, juicy oranges with strong aroma and thin peels.',
    image: '/assets/images/citrus.jpg'
  },
  {
    id: '13',
    name: 'Bartlett Pears',
    category: 'Fruits',
    description: 'Crisp pears matured on-tree for balanced sweetness and crunch.',
    image: '/assets/images/pears.jpg'
  },
  {
    id: '14',
    name: 'Sweet Bananas',
    category: 'Fruits',
    description: 'Small, intensely sweet bananas perfect for retail packs.',
    image: '/assets/images/bananas-tree.jpg'
  },
  {
    id: '15',
    name: 'Dry Maize (Bagged)',
    category: 'Grains',
    description: 'Machine-dried, bulk-bagged maize ready for milling and feed.',
    image: '/assets/images/maize-bags.jpg'
  },
  {
    id: '16',
    name: 'Bean Medley Export Mix',
    category: 'Grains',
    description: 'Assorted premium beans sorted and packed for containerized export.',
    image: '/assets/images/beans.jpg'
  },
  {
    id: '17',
    name: 'Cape Gooseberries',
    category: 'Fruits',
    description: 'Physalis berries with papery husks, packed for premium retail.',
    image: '/assets/images/physalis.jpg'
  },
  {
    id: '18',
    name: 'Market Carrots',
    category: 'Vegetables',
    description: 'Washed, uniform carrots ideal for fresh markets and processing.',
    image: '/assets/images/roots.jpg'
  },
  {
    id: '19',
    name: 'Apricots on Branch',
    category: 'Fruits',
    description: 'Tree-ripened apricots with delicate skin and high sugar content.',
    image: '/assets/images/apricots.jpg'
  },
  {
    id: '20',
    name: 'Fresh Limes',
    category: 'Fruits',
    description: 'Aromatic limes with high juice yield for beverages and culinary use.',
    image: '/assets/images/limes.jpg'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Sustainable Farming Practices in Kenya',
    excerpt: 'How we are using modern technology to preserve our soil and water resources for future generations.',
    image: '/assets/images/greens.jpg',
    date: 'March 18, 2026'
  },
  {
    id: '2',
    title: 'Why Kenyan Avocados Are in Global Demand',
    excerpt: 'Exploring the unique climatic conditions that make Kenya the leading producer of premium Hass avocados.',
    image: '/assets/images/avocado.jpg',
    date: 'March 10, 2026'
  },
  {
    id: '3',
    title: 'Cold Chain for Fresh Produce',
    excerpt: 'How we keep watermelon, onions, and leafy greens crisp from field to port.',
    image: '/assets/images/watermelon.jpg',
    date: 'March 5, 2026'
  },
  {
    id: '4',
    title: 'Livestock Feed & Byproducts',
    excerpt: 'Turning maize stover and bean husks into high-value feed for dairy and beef herds.',
    image: '/assets/images/cattle-feed.jpg',
    date: 'February 28, 2026'
  },
  {
    id: '5',
    title: 'Egg Supply Chain Efficiency',
    excerpt: 'How we collect, grade, and palletize eggs for wholesalers across East Africa.',
    image: '/assets/images/eggs.jpg',
    date: 'February 20, 2026'
  },
  {
    id: '6',
    title: 'Biosecurity in Pig Farming',
    excerpt: 'Simple on-farm protocols that keep our pork value chain resilient.',
    image: '/assets/images/pigs.jpg',
    date: 'February 12, 2026'
  },
  {
    id: '7',
    title: 'Banana Ripening for Retail Chains',
    excerpt: 'How our ripening hubs deliver ready-to-shelf bananas with consistent color and firmness.',
    image: '/assets/images/bananas-market.jpg',
    date: 'February 4, 2026'
  },
  {
    id: '8',
    title: 'Pasture-Raised Layers for Better Yolks',
    excerpt: 'Rotational grazing and on-farm milling improve yolk color and shelf life for our eggs.',
    image: '/assets/images/chickens.jpg',
    date: 'January 28, 2026'
  }
];

export const FAQS: FAQItem[] = [
  {
    id: '1',
    question: 'Where are your farms located?',
    answer: 'Our primary farms are located in the fertile regions of the Rift Valley, Central Kenya, and the coastal belt, ensuring a diverse range of produce.',
    category: 'General'
  },
  {
    id: '2',
    question: 'Do you offer international shipping?',
    answer: 'Yes, we specialize in exporting to Europe, the Middle East, and Asia. We handle all logistics, including cold chain management.',
    category: 'Export'
  },
  {
    id: '3',
    question: 'What is the minimum order quantity for local delivery?',
    answer: 'For local customers in Kenya, our minimum order quantity varies by product, typically starting from 50kg for bulk vegetables.',
    category: 'Orders'
  },
  {
    id: '4',
    question: 'Are your products organic?',
    answer: 'While not all our products are certified organic, we follow strict sustainable farming practices and minimize the use of synthetic inputs.',
    category: 'General'
  }
];
