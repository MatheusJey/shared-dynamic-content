import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CustomHeaderContentService {
  private readonly dynamicContent: BehaviorSubject<
    TemplateRef<unknown>
  > = new BehaviorSubject(undefined);

  getDynamicContent(): Observable<TemplateRef<unknown>> {
    return this.dynamicContent.asObservable();
  }

  setDynamicContent(value: TemplateRef<unknown>): void {
    this.dynamicContent.next(value);
  }
}
