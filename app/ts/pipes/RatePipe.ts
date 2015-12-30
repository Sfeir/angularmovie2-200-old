import {Pipe} from 'angular2/core';
@Pipe({
    name: 'rate'
})
export class RatePipe {
    transform(value: number, args: any[]) {
        var tmp='';
        if(value && !isNaN(value)) {
            for (var i = 0; i < value; i++) {
                tmp+='\u2605';
            }
        }
        return tmp;
    }
}