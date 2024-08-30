import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
  private readonly platformId = inject(PLATFORM_ID);

  set(key: string, value: any): any {
    if (this.platformId === 'server') return;

    localStorage.setItem(key, JSON.stringify(value));
  }

  get(key: string): any {
    if (this.platformId === 'server') return;

    return JSON.parse(localStorage.getItem(key) || '');
  }
}
