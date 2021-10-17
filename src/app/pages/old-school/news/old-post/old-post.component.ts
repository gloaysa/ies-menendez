import { Component, OnInit } from '@angular/core';

import { LunicodeService } from '../../../../services/lunicode.service';

import { oldPostContent } from './old-post.content';

@Component({
  selector: 'gl-old-post',
  templateUrl: './old-post.component.html',
  styleUrls: ['./old-post.component.scss']
})
export class OldPostComponent implements OnInit {
  content: string[] = oldPostContent;
  count = 0;
  reversedDirection = false;
  velocity = 500;

  interval: NodeJS.Timeout | undefined;

  constructor(private readonly luniCode: LunicodeService) {
  }

  ngOnInit() {
    oldPostContent[1] = this.luniCode.mirror(oldPostContent[1]);
    this.changeText();
  }

  private changeText() {
    this.reversedDirection ? this.reversed() : this.forward();
  }

  private forward() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = setInterval(() => {
      this.luniCode.changeMaxHeight(this.count);
      this.count += 1;
      this.content = oldPostContent.map(text => {
        return this.luniCode.creepify(text);
      });
      if (this.count === 4) {
        this.reversedDirection = true;
        this.changeText();
      }
    }, this.velocity);
  }

  private reversed() {
    if (this.interval) {
      clearInterval(this.interval);
    }

    this.interval = setInterval(() => {
      this.luniCode.changeMaxHeight(this.count);
      this.count -= 1;
      this.content = oldPostContent.map(text => {
        return this.luniCode.creepify(text);
      });
      if (this.count === 0) {
        this.reversedDirection = false;
        this.changeText();
      }
    }, this.velocity);

  }

}
