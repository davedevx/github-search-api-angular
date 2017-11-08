import { Injectable } from '@angular/core';

@Injectable()
export class LoaderService {
  private _isVisible = false;

  public setVisiblility(isVisible: boolean) {
    this._isVisible = isVisible;
  }

  public isVisible(): boolean {
    return this._isVisible;
  }
}
