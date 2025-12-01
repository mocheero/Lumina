export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  serviceInterest: string;
  subject: string;
  message: string;
  // Honeypot field - should be empty for humans
  bot_field?: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content?: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  stats: { value: string; label: string };
  tags: string[];
  // Extended details for individual page
  challenge: string;
  solution: string;
  results: string[];
  client: string;
  year: string;
}
