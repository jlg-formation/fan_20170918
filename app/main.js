import 'angular';
import 'angular-ui-router';
import './ors-layout/ors-layout.js';
import './ors-route/ors-route.js';
import './ors-star/ors-star.js';
import 'angular/angular-csp.css';
import './style.scss';


const app = angular.module('main', ['ors-layout', 'ors-route', 'ors-star']);
console.log('coucou');
