import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
}

export interface Skill {
  name: string;
  icon: LucideIcon;
  level: number;
  category: 'Frontend' | 'Backend' | 'Tools' | 'Design';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}