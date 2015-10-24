import {Pipe} from 'angular2/angular2';
// We use the @Pipe decorator to register the name of the pipe
@Pipe({
    name: 'rate'
})
// The work of the pipe is handled in the tranform method with our pipe's class
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