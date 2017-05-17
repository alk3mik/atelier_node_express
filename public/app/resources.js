"use strict"

angular.module("ninjaApp")

    // déclaration de la factory "MaRessource"
    .factory("MaRessource", ["$resource", function($resource) {
        return $resource("vers où ?", {"des-param": "jenesaispas?"})
    }])
    // Maintenant MaRessource est injectable dans un controller ou un autre service