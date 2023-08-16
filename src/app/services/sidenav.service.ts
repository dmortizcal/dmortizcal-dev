import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {
  private isSidenavOpenSubject = new BehaviorSubject<boolean>(false);
  isSidenavOpen$: Observable<boolean> = this.isSidenavOpenSubject.asObservable();

  toggleSidenav() {
    this.isSidenavOpenSubject.next(!this.isSidenavOpenSubject.value);
  }
}
