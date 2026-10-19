export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  company: string;
  category: string;
  rating?: number;
  verified?: boolean;
}
