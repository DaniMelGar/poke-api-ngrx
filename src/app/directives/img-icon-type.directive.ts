import { Directive, ElementRef, Input } from '@angular/core';
import { onInitEffects } from '@ngrx/effects/src/lifecycle_hooks';

@Directive({
  selector: '[appImgIconType]'
})
export class ImgIconTypeDirective {
  @Input() type: any
  constructor(private elementRef: ElementRef) { }

  ngOnInit(){

    //https://archives.bulbagarden.net/w/index.php?title=Category:Type_icons&filefrom=WaterIC+RSE.png#mw-category-media
    /*const ICON_TYPE_URL : any = {
      normal: "https://archives.bulbagarden.net/media/upload/a/ac/NormalIC_Colo.png",
      fighting: "https://archives.bulbagarden.net/media/upload/d/dd/FightingIC_Colo.png",
      flying: "https://archives.bulbagarden.net/media/upload/3/3b/FlyingIC_Colo.png",
      poison: "https://archives.bulbagarden.net/media/upload/6/66/PoisonIC_Colo.png",
      ground: "https://archives.bulbagarden.net/media/upload/8/89/GroundIC_Colo.png",
      rock: "https://archives.bulbagarden.net/media/upload/8/82/RockIC_Colo.png",
      bug: "https://archives.bulbagarden.net/media/upload/5/54/BugIC_Colo.png",
      ghost: "https://archives.bulbagarden.net/media/upload/2/2d/GhostIC_Colo.png",
      steel: "https://archives.bulbagarden.net/media/upload/6/6e/SteelIC_Colo.png",
      fire: "https://archives.bulbagarden.net/media/upload/2/28/FireIC_Colo.png",
      water: "https://archives.bulbagarden.net/media/upload/f/f4/WaterIC_Colo.png",
      grass: "https://archives.bulbagarden.net/media/upload/d/d5/GrassIC_Colo.png",
      electric:"https://archives.bulbagarden.net/media/upload/5/59/ElectricIC_Colo.png",
      psychic: "https://archives.bulbagarden.net/media/upload/c/c6/PsychicIC_Colo.png",
      ice: "https://archives.bulbagarden.net/media/upload/6/6d/IceIC_Colo.png",
      dragon: "https://archives.bulbagarden.net/media/upload/2/27/DragonIC_Colo.png",
      dark: "https://archives.bulbagarden.net/media/upload/f/fd/DarkIC_Colo.png",
      fairy: "https://archives.bulbagarden.net/media/upload/b/ba/FairyIC_XY.png",
      unknown: "https://archives.bulbagarden.net/media/upload/b/ba/UnknownIC_Colo.png",
      //shadow:
    }*/

    const ICON_TYPE_URL : any = {
      normal: "https://archives.bulbagarden.net/media/upload/3/39/NormalIC_Big.png",
      fighting: "https://archives.bulbagarden.net/media/upload/6/67/FightingIC_Big.png",
      flying: "https://archives.bulbagarden.net/media/upload/c/cb/FlyingIC_Big.png",
      poison: "https://archives.bulbagarden.net/media/upload/3/3d/PoisonIC_Big.png",
      ground: "https://archives.bulbagarden.net/media/upload/8/8f/GroundIC_Big.png",
      rock: "https://archives.bulbagarden.net/media/upload/c/ce/RockIC_Big.png",
      bug: "https://archives.bulbagarden.net/media/upload/c/c8/BugIC_Big.png",
      ghost: "https://archives.bulbagarden.net/media/upload/7/73/GhostIC_Big.png",
      steel: "https://archives.bulbagarden.net/media/upload/d/d4/SteelIC_Big.png",
      fire: "https://archives.bulbagarden.net/media/upload/2/26/FireIC_Big.png",
      water: "https://archives.bulbagarden.net/media/upload/5/56/WaterIC_Big.png",
      grass: "https://archives.bulbagarden.net/media/upload/7/74/GrassIC_Big.png",
      electric:"https://archives.bulbagarden.net/media/upload/4/4a/ElectricIC_Big.png",
      psychic: "https://archives.bulbagarden.net/media/upload/6/60/PsychicIC_Big.png",
      ice: "https://archives.bulbagarden.net/media/upload/6/6f/IceIC_Big.png",
      dragon: "https://archives.bulbagarden.net/media/upload/4/48/DragonIC_Big.png",
      dark: "https://archives.bulbagarden.net/media/upload/5/56/DarkIC_Big.png",
      fairy: "https://archives.bulbagarden.net/media/upload/7/73/FairyIC_Big.png",
      unknown: "https://archives.bulbagarden.net/media/upload/3/3c/UnknownIC_Big.png",
      //shadow:
    }

    const DEFAULT_ICON_TYPE_URL = "https://archives.bulbagarden.net/media/upload/thumb/f/f8/UnknownIC_SV.png/180px-UnknownIC_SV.png"

    const element = this.elementRef.nativeElement
    element.src = ICON_TYPE_URL[this.type] || DEFAULT_ICON_TYPE_URL
    element.style="height:27px;width: 109px;padding-left: 20px;"
  }

}
