import {Pipe} from 'angular2/core';
@Pipe({name: 'poster'})
export default class PosterPipe {
    transform<T>(posterUrl:string): string {
        if(!posterUrl){
            return "img/no-poster.jpg";
        } else {
            return posterUrl;
        }
    }
}