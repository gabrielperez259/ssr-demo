import {  Service, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Service()
export class SeoService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  updateDescription(description: string): void {
    this.meta.updateTag({
      name: 'description',
      content: description,
    });
  }

  updateOpenGraph(
    title: string,
    description: string,
    imageUrl?: string,
    type: 'website' | 'article' = 'website',
  ): void {
    this.meta.updateTag({
      property: 'og:title',
      content: title,
    });

    this.meta.updateTag({
      property: 'og:description',
      content: description,
    });

    this.meta.updateTag({
      property: 'og:type',
      content: type,
    });

    if (imageUrl) {
      this.meta.updateTag({
        property: 'og:image',
        content: imageUrl,
      });
    } else {
      this.meta.removeTag('property="og:image"');
    }
  }

  updatePage(
    title: string,
    description: string,
    imageUrl?: string,
    type: 'website' | 'article' = 'website',
  ): void {
    this.title.setTitle(title);
    this.updateDescription(description);
    this.updateOpenGraph(title, description, imageUrl, type);
  }
}