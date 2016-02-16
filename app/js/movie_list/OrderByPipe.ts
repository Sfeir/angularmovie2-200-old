import {Pipe} from 'angular2/core';
@Pipe({name: 'orderBy'})
export default class OrderByPipe {
    transform(input:Object[], args:string[]): Object[] {
        if (input) {
            let property= args[0];
            let reverseVal= args[1] ? 1:-1;
            return input.slice().sort((a, b) => {
                if (a[property] < b[property]) {
                    return -1*reverseVal;
                } else if (b[property] < a[property]) {
                    return 1*reverseVal;
                } else {
                    return 0;
                }
            });
        } else {
            return input;
        }
    }
}