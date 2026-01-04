
export type Language = 'en' | 'fr';

export interface Sermon {
  id: string;
  title: string;
  speaker: string;
  date: string;
  category: 'Worship' | 'Teaching' | 'Healing' | 'Youth';
  videoUrl?: string;
  audioUrl?: string;
  pdfUrl?: string;
  thumbnail: string;
  description: string;
}

export interface ChurchEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

export interface Testimony {
  id: string;
  author: string;
  content: string;
  date: string;
  isApproved: boolean;
}

export interface NavItem {
  name: string;
  path: string;
  translationKey: string;
}

export interface Translation {
  [key: string]: {
    en: string;
    fr: string;
  };
}
