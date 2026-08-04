export interface NasabItem {
  n: string;
  key?: boolean;
  note?: string;
}

export interface TimelineItem {
  y: string;
  t: string;
  d: string;
  gold?: boolean;
}

export interface WarItem {
  y: string;
  ord: number;
  nm: string;
  sub: string;
  ty: 'campuran' | 'sariyyah' | 'ghazwah';
  big?: boolean;
  p: string[];
}

export interface CardItem {
  n: string;
  meta: string;
  ph?: 'makkah' | 'madinah';
  b: string[];
}

export interface CompanionItem {
  n: string;
  d: string;
}
