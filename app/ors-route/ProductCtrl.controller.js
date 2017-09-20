export class ProductCtrl {
    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    start() {
        console.log('start');
        this.$http.get('../ws/s1').then(response => {
            console.log('s1', response.data);
            return this.$q.all([
                this.$http.get('../ws/s2').then(response => {
                    console.log('s2', response.data);
                    return this.$http.get('../ws/s5');
                }),
                this.$http.get('../ws/s3'),
                this.$http.get('../ws/s4')
            ]);
        }).then(responses => {
            console.log('s5 s3 s4', responses);
            return this.$http.get('../ws/s6');
        }).then(response => {
            console.log('s6', response.data);
        }).catch(error => {
            console.log('error', error);
        });
    }
}
ProductCtrl.$inject = ['$http', '$q'];
