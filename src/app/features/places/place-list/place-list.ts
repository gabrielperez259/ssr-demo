import { Component, computed, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { PlaceService } from '../../../core/services/place.service';
import { PlaceCategory } from '../../../core/models/place.model';

@Component({
  selector: 'app-place-list',
  imports: [RouterLink],
  templateUrl: './place-list.html',
  styleUrl: './place-list.scss',
})
export class PlaceList {
  private readonly placeService = inject(PlaceService);

  readonly places = this.placeService.getAll();

  readonly selectedCategory = signal<PlaceCategory | 'ALL'>('ALL');

  readonly categoryLabels: Record<PlaceCategory, string> = {
    PARK: 'Parques',
    RESTAURANT: 'Restaurantes',
    CAFE: 'Cafeterias',
    MUSEUM: 'Museus',
    TOURIST_ATTRACTION: 'Pontos turísticos',
  };

  readonly categories: {
    value: PlaceCategory | 'ALL';
    label: string;
  }[] = [
    { value: 'ALL', label: 'Todos' },
    { value: 'PARK', label: 'Parques' },
    { value: 'RESTAURANT', label: 'Restaurantes' },
    { value: 'CAFE', label: 'Cafeterias' },
    { value: 'MUSEUM', label: 'Museus' },
    { value: 'TOURIST_ATTRACTION', label: 'Pontos turísticos' },
  ];

  readonly filteredPlaces = computed(() => {
    const category = this.selectedCategory();

    if (category === 'ALL') {
      return this.places;
    }

    return this.places.filter((place) => place.category === category);
  });

  selectCategory(category: PlaceCategory | 'ALL'): void {
    this.selectedCategory.set(category);
  }
}
