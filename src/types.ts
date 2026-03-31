export type Page = 'home' | 'about' | 'products' | 'export' | 'blog' | 'faq' | 'order' | 'tracking' | 'contact';

export interface Product {
  id: string;
  name: string;
  category: 'Vegetables' | 'Fruits' | 'Grains' | 'Herbs & Spices';
  description: string;
  image: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Orders' | 'Export';
}

export interface Order {
  id: string;
  customerName: string;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
  date: string;
}
