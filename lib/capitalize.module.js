import CapitalizeFilter from './capitalize.filter';

export default angular
    .module('capitalize', [])
    .filter('capitalize', CapitalizeFilter)
    .name;
