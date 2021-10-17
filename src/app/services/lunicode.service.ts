import { Injectable } from '@angular/core';

import * as Lunicode from 'lunicode';

@Injectable({providedIn: 'root'})
export class LunicodeService {
  luni;

  constructor() {
    this.luni = Lunicode;
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
