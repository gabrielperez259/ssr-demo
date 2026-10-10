import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home').then((m) => m.Home),
    title: 'Catálogo de Lugares | Campinas',
  },
  {
    path: 'lugares',
    loadComponent: () =>
      import('./features/places/place-list/place-list').then(
        (m) => m.PlaceList,
      ),
    title: 'Lugares para Visitar | Campinas',
  },
  {
    path: 'lugares/:slug',
    loadComponent: () =>
      import('./features/places/place-detail/place-detail').then(
        (m) => m.PlaceDetail,
      ),
  },
  {
    path: 'favoritos',
    loadComponent: () =>
      import('./features/favorites/favorites').then(
        (m) => m.Favorites,
      ),
    title: 'Meus Favoritos | Catálogo de Lugares',
  },
  {
    path: '**',
    redirectTo: '',
  },
];