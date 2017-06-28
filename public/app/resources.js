"use strict"

angular.module("ninjaApp")

    // déclaration de la factory "MaRessource"
    // .factory("MaRessource", ["$resource", function($resource) {
    .factory("Ninja", ["$resource", function($resource) {
        // return $resource("vers où ?", {"des-param": "jenesaispas?"})
        return $resource("/ninja/:id", {id: "@_id"}, {
        	
        	// 'get': {
        	// 	method: 'GET'
        	// },
        	
        	// 'save': {
        	// 	method: 'POST'
        	// },
        	
        	// 'remove': {
        	// 	method: 'DELETE'
        	// },

        	// 'delete': {
        	// 	method:'DELETE'
        	// },
        	
        	'query': {
        		method: "GET",
        		isArray: false
        	},

        	'update': {
        		method: 'PUT' // this method issues a PUT request
        	}

        });
    }]);
    // Maintenant MaRessource est injectable dans un controller ou un autre service