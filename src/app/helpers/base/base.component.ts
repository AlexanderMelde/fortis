// taken from https://stackoverflow.com/a/71866336/
import {Component, OnDestroy} from "@angular/core";
import {Observable, Subject, takeUntil} from "rxjs";

@Component({ template: '' })
export abstract class BaseComponent implements OnDestroy{
  // protected constructor() {  }
  // Don't let the outside world trigger this destroy signal.
  // It's only meant to be trigger by the component when destroyed!
  private _destroy = new Subject<void>();
  public destroy$ = this._destroy as Observable<void>;
  /** Lifecycle hook called by angular framework when extended class dies. */
  ngOnDestroy(): void {
    this._destroy.next();
  }
}

declare module 'rxjs/internal/Observable' {
  interface Observable<T> {
    dieWith(comp: BaseComponent): Observable<T>;
  }
}

Observable.prototype.dieWith = function<T>(comp: BaseComponent): Observable<T> {
  return this.pipe(takeUntil(comp.destroy$));
};
