'use strict';

angular.module('services').filter('serviceFilter', [
	function() {
		return function(input) {
			// Service filter directive logic
			// ...

			return 'serviceFilter filter: ' + input;
		};
	}
]);