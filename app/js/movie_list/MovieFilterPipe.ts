import {Pipe} from 'angular2/core';

@Pipe({name: 'movieFilter'})
export default class MovieFilterPipe {
    transform(input:Object[], args:string[]): Object[] {
        let query = args[0];
        if (query) {
            query = query.toLowerCase();
            return input.filter((movie) => {
                const title = movie.title.toLowerCase();
                return title.indexOf(query) >= 0;
            });
        } else {
            return input;
        }
    }
}