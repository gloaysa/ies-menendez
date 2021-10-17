import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class LunicodeService {
  luni;

  constructor() {
    // https://openbase.com/js/lunicode-creepify/documentation
    this.luni = require('Lunicode');
  }

  changeMaxHeight(size: number) {
    this.luni.tools.creepify.options.maxHeight = size;
  }

  creepify(text: string): string {
    return this.luni.tools.creepify.encode(text);
  }

  flip(text: string): string {
    return this.luni.tools.flip.encode(text);
  }

  mirror(text: string): string {
    return this.luni.tools.mirror.encode(text);
  }

}
