const app = angular.module('ors-star', []);

app.component('orsStar', {
    bindings: { note: '=' },
    controller: function OrsStarCtrl($scope, $element, $attrs, $compile) {
        'ngInject';
        this.$onInit = function () {
            $scope.$watch('$ctrl.note', () => {
                let html = '';
                console.log(this.note);
                let note = this.note || 3;
                note = (note > 5) ? 5 : note;
                note = (note < 0) ? 0 : note;
                for (let i = 0; i < note; i++) {
                    html += '<img ng-click="$ctrl.update(' + (i + 1) + ')" src="./ors-star/img/yellow_star.png">';
                }

                for (let i = note; i < 5; i++) {
                    html += `
<img ng-click="$ctrl.update(${i + 1})" src="./ors-star/img/white_star.png">`;
                }
                $element.html(html);
                $compile($element.contents())($scope);
            });
        }
        this.update = (newNote) => {
            console.log('update', newNote);
            this.note = newNote; }
    }
});