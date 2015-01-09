'use strict';

angular.module('clients').filter('clientFilter', [
	function() {
		return function(input) {
			// Client filter directive logic
			// ...

			return 'clientFilter filter: ' + input;
		};
	}
]);