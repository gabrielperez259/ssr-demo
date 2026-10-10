import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [
  {
    path: '',
    renderMode: RenderMode.Server,
  },
  {
    path: 'lugares',
    renderMode: RenderMode.Server,
  },
  {
    path: 'lugares/:slug',
    renderMode: RenderMode.Server,
  },
  {
    path: 'favoritos',
    renderMode: RenderMode.Client,
  },
  {
    path: '**',
    renderMode: RenderMode.Server,
  },
];
