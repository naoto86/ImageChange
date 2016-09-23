import { Component, OnInit } from '@angular/core';
import { ImageComponent } from '../image/image.component';
import { Effect } from '../effect/effect';
import { EffectService } from '../effect/effect.service';

@Component({
  selector: 'app-change-effect',
  templateUrl: './change-effect.component.html',
  styleUrls: ['./change-effect.component.css'],
  providers: [EffectService]
})
export class ChangeEffectComponent implements OnInit {
  effects: Effect[];
  selectedEffect: Effect;
  selectedEffectName:string;
  selectedEffectClass:string;
  constructor(private effectService:EffectService) { }

  getEffects(): void {
    this.effectService.getEffects().then(effects => this.effects = effects)
  }
  ngOnInit() : void{
    this.getEffects();
  }
  onSelect(effect: Effect) {
    this.selectedEffect = effect;
    this.selectedEffectName = effect.name;
    this.selectedEffectClass = effect.className;
  }
}
