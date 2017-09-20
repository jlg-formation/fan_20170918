export class ProductCtrl {
    constructor($http) {
        this.$http = $http;
    }
    start() {
        console.log('start');
        this.$http.get('../ws/s1').then(response => {
            console.log('response', response);
        }).catch(error => {
            console.log('error', error);
        });
    }
}
ProductCtrl.$inject = ['$http'];
