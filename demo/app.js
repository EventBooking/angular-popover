/* global angular */

function Config() {
	
}

Run.$inject = ['$rootScope'];

function Run($rootScope) {
	$rootScope.vm = new TestController();
}

function TestController() {
	
}

angular.module("demo", ["ngPopover"])
	.config(Config)
	.run(Run);