import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  isLoadingSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    true
  );
  isLoading$ = this.isLoadingSubject.asObservable();

  setLoading(value: boolean): void {
    this.isLoadingSubject.next(value);
  }

  toggleLoading(): void {
    this.isLoadingSubject.next(!this.isLoadingSubject.value);
  }
}
