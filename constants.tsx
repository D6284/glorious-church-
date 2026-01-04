
import { NavItem, Translation, Sermon, ChurchEvent } from './types';

export const NAV_ITEMS: NavItem[] = [
  { name: 'Home', path: '/', translationKey: 'nav_home' },
  { name: 'About Us', path: '/about', translationKey: 'nav_about' },
  { name: 'Services', path: '/services', translationKey: 'nav_services' },
  { name: 'Sermons', path: '/sermons', translationKey: 'nav_sermons' },
  { name: 'Giving', path: '/giving', translationKey: 'nav_giving' },
  { name: 'Contact', path: '/contact', translationKey: 'nav_contact' },
];

export const TRANSLATIONS: Translation = {
  nav_home: { en: 'Home', fr: 'Accueil' },
  nav_about: { en: 'About Us', fr: 'À Propos' },
  nav_services: { en: 'Services', fr: 'Services' },
  nav_sermons: { en: 'Sermons', fr: 'Sermons' },
  nav_giving: { en: 'Giving', fr: 'Don' },
  nav_contact: { en: 'Contact', fr: 'Contact' },
  hero_title: { en: 'Experience the Presence of God', fr: "Vivez la Présence de Dieu" },
  hero_subtitle: { en: 'Welcome to Glorious Church, a place of worship, love, and transformation.', fr: 'Bienvenue à Glorious Church, un lieu d\'adoration, d\'amour et de transformation.' },
  btn_join: { en: 'Join Us Live', fr: 'Rejoignez-nous en direct' },
  btn_give: { en: 'Give Online', fr: 'Donner en ligne' },
  section_sermons: { en: 'Latest Sermons', fr: 'Derniers Sermons' },
  section_events: { en: 'Upcoming Events', fr: 'Événements à venir' },
  footer_tagline: { en: 'Spreading the Gospel to the ends of the earth.', fr: "Répandre l'Évangile jusqu'aux extrémités de la terre." }
};

export const MOCK_SERMONS: Sermon[] = [
  {
    id: '1',
    title: 'Walking in Divine Purpose',
    speaker: 'Pastor John Doe',
    date: 'Oct 24, 2023',
    category: 'Teaching',
    thumbnail: 'https://picsum.photos/id/101/800/450',
    description: 'Discover how to align your daily life with the specific calling God has placed in your heart.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '2',
    title: 'The Power of Unshakable Faith',
    speaker: 'Rev. Sarah Smith',
    date: 'Oct 17, 2023',
    category: 'Worship',
    thumbnail: 'https://picsum.photos/id/102/800/450',
    description: 'Learn to stand firm in the midst of trials through the strength of the Holy Spirit.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  },
  {
    id: '3',
    title: 'Grace Upon Grace',
    speaker: 'Pastor John Doe',
    date: 'Oct 10, 2023',
    category: 'Teaching',
    thumbnail: 'https://picsum.photos/id/103/800/450',
    description: 'Exploring the boundless nature of God\'s kindness and forgiveness in our lives.',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
  }
];

export const MOCK_EVENTS: ChurchEvent[] = [
  {
    id: 'e1',
    title: 'Grand Revival Week',
    date: 'Nov 12 - 19, 2023',
    time: '6:00 PM Daily',
    location: 'Main Sanctuary',
    description: 'A week of intense prayer, worship, and prophetic ministrations.',
    image: 'https://picsum.photos/id/104/600/400'
  },
  {
    id: 'e2',
    title: 'Youth Summit 2023',
    date: 'Dec 05, 2023',
    time: '10:00 AM',
    location: 'Conference Center',
    description: 'Empowering the next generation for kingdom impact and leadership.',
    image: 'https://picsum.photos/id/106/600/400'
  }
];
