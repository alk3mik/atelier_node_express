"use strict"


angular.module("ninjaApp")

    .component("bubble", {
        bindings: {
            icon: "@",
            state: "@"
        },
        templateUrl: "/app/components/bubble/bubble.html"
    })