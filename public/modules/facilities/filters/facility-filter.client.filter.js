'use strict';

angular.module('facilities').filter('facilityFilter', [
	function() {
		return function(input) {
			// Facility filter directive logic
			// ...

			return 'facilityFilter filter: ' + input;
		};
	}
]);