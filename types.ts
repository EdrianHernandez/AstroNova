export interface NewsArticle {
  id: string;
  title: string;
  summary: string;
  imageUrl: string;
  category: string;
  timestamp: string;
}

export interface PlanetData {
  name: string;
  gravity: string; // m/s²
  atmosphere: string; // Primary composition
  diameter: string; // km
  dayLength: string; // hours
  temp: string; // Avg Celsius
}

export interface CountDownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}
