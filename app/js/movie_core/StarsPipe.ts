import {Pipe} from 'angular2/core';
@Pipe({name: 'stars'})
export default class starsPipe {
    transform(startCount:number): string {
        var STARS = {
            1: '\u2605',
            2: '\u2605\u2605',
            3: '\u2605\u2605\u2605',
            4: '\u2605\u2605\u2605\u2605',
            5: '\u2605\u2605\u2605\u2605\u2605'
        };

        return STARS[startCount];
    }
}
