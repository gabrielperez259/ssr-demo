import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/home/home').then((m) => m.Home),
    title: 'Lugares para Visitar em Campinas | Catálogo de Lugares',
    data: {
      description:
        'Descubra parques, restaurantes, cafeterias e pontos turísticos para conhecer em Campinas, SP.',
    },
  },
  {
    path: 'lugares',
    loadComponent: () => import('./features/places/place-list/place-list').then((m) => m.PlaceList),
    title: 'Lugares para Conhecer em Campinas | Catálogo de Lugares',
    data: {
      description:
        'Descubra parques, restaurantes, cafeterias e pontos turísticos para conhecer em Campinas, SP.',
    },
  },
  {
    path: 'lugares/:slug',
    loadComponent: () =>
      import('./features/places/place-detail/place-detail').then((m) => m.PlaceDetail),
  },
  {
    path: 'favoritos',
    loadComponent: () => import('./features/favorites/favorites').then((m) => m.Favorites),
    title: 'Meus Favoritos | Catálogo de Lugares',
    data: {
      description: 'Consulte sua lista de lugares favoritos para visitar em Campinas.',
    },
  },
  {
    path: '**',
    redirectTo: '',
  },
];
