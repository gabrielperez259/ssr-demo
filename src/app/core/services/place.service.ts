import { Service } from "@angular/core";
import { Place, PlaceCategory } from "../models/place.model";
import { PLACES_MOCK } from "../data/place.data";

@Service()
export class PlaceService {
  private readonly places: Place[] = PLACES_MOCK;

  getAll(): Place[] {
    return this.places;
  }

  getFeatured(limit = 3): Place[] {
    return this.places.slice(0, limit);
  }

  getBySlug(slug: string): Place | undefined {
    return this.places.find((place) => place.slug === slug);
  }

  getByCategory(category: PlaceCategory): Place[] {
    return this.places.filter((place) => place.category === category);
  }
}