import { Injectable } from '@angular/core';
import { Wove } from 'aspect.js';

@Wove()
@Injectable()
export class AppService {

  world() {
    console.log('world');
  }
}
