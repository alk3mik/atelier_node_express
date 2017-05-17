'use strict'

angular.module("ninjaApp")
    
    .component("ninja", {
        bindings: {
            ninja: "<"
        },
        templateUrl: '/app/components/ninja/ninja.html'
    })

