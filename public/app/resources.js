"use strict"

angular.module("ninjaApp")

// déclaration de la factory "MaRessource"
// .factory("MaRessource", ["$resource", function($resource) {
.factory("Ninja", ["$resource", function($resource) {
    let url = "http://localhost:9000/ninja";
    // return $resource("vers où ?", {"des-param": "jenesaispas?"})
    return $resource(url + "/:id", {id: "@_id"}, {
        
        // 'save': {
        //  method: 'POST'
        // },
        
        // 'remove': {
        //  method: 'DELETE'
        // },
        
        'query': {
            method: 'GET',
            isArray: false
            // ,
            // params: {},
            // cache: true
            // transformResponse,
            // interceptor
        },

        'getOne': {
            method: 'GET',
            isArray: false
        },

        // 'update': {
        //     method: 'PUT' // this method issues a PUT request
        // },

        'save': {
            method: 'PUT' // this method issues a PUT request
        },

        'delete': {
            method: 'DELETE' // this method issues a PUT request
        }

        // 'remove': {
        //     method: 'DELETE' // this method issues a PUT request
        // }

    });
}]);
// Maintenant MaRessource est injectable dans un controller ou un autre service