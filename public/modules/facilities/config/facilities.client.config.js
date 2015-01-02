'use strict';

// Configuring the Articles module
angular.module('facilities').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Facilities', 'facilities', 'dropdown', '/facilities(/create)?');
		Menus.addSubMenuItem('topbar', 'facilities', 'List Facilities', 'facilities');
		Menus.addSubMenuItem('topbar', 'facilities', 'New Facility', 'facilities/create');
	}
]);