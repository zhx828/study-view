/**
 * Created by zhangh2 on 8/24/15.
 */

StudyView.application.addModule('dc-charts', function (context) {
    return {
        destroy: function () {
            // Outputs "bar"
            console.log('bar');
        },
        init: function () {
            // Outputs "foo"
            console.log('foo');
        },
        onclick: function(event, element, elementType) {

            switch (elementType) {

                case 'button':
                    console.log(event, element, elementType);
                    break;

            }
        }
    };
});
