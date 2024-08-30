import { Dialog, DialogConfig, DialogRef } from '@angular/cdk/dialog';
import { ComponentType } from '@angular/cdk/portal';
import { inject, Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DialogService {
  readonly dialog = inject(Dialog);

  open<R = unknown, D = unknown, C = unknown>(
    component: ComponentType<C>,
    config: DialogConfig<D, DialogRef<R, C>> = {}
  ): DialogRef<R, C> {
    return this.dialog.open(component, {
      ...config,
      panelClass: ['relative', 'bg-white', 'rounded-lg', 'shadow', 'p-4'],
    });
  }
}
