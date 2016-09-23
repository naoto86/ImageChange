import { Injectable } from '@angular/core';

import { Effect } from './effect';
import { EFFECTS } from './mock-effects';

@Injectable()
export class EffectService{
    getEffects(): Promise<Effect[]>{
        return Promise.resolve(EFFECTS);
    }
    getEffectsSlowly(): Promise<Effect[]>{
        return new Promise<Effect[]>(resolve =>
      setTimeout(resolve, 2000)) // delay 2 seconds
      .then(() => this.getEffects());
    }
}