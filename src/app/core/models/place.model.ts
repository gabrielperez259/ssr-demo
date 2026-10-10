
export interface Place {
  id: number;
  slug: string;
  name: string;
  description: string;
  category: PlaceCategory;
  imageUrl: string;
  address: string;
  city: string;
  state: string;
  openingHours: string;
  priceLevel: PriceLevel;
  highlights: string[];
  metaTitle: string;
  metaDescription: string;
}

export type PlaceCategory =
  | 'PARK'
  | 'RESTAURANT'
  | 'CAFE'
  | 'MUSEUM'
  | 'TOURIST_ATTRACTION';

export type PriceLevel = 0 | 1 | 2 | 3;
