export default function posterFilter() {
    return function(posterUrl) {
        if(!posterUrl){
            return "img/no-poster.jpg";
        } else {
            return posterUrl;
        }
    };
}
