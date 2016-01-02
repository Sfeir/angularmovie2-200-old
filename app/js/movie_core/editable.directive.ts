

function Editable(){

    return {
        restrict : 'E',
        replace : true,
        templateUrl: "js/movie_core/editable.directive.html",
        scope : {
            label : '@',
            text : '='
        },
        link : function(scope, element, attrs){

            // editMode is disable by default
            scope.editMode = false;

            // if label attribut is not provide then remove
            // the label element
            if(!attrs.label){
                element.find('label').remove();
            }

            // find the input elemnt of this directive ...
            var input = element.find('input');
            // and listen for blur event
            input.bind('blur', function(){
                // since blur event occured ouside the angular execution context
                // we need to call scope.$apply to tell angularjs about the changes
                scope.$apply(function(){
                    // the change is to disable the editMode
                    scope.editMode = false;
                });

            });

        }
    }

}

export default Editable;