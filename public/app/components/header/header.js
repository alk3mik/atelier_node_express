'use strict'

angular.module("ninjaApp")

    .component("header", {
        templateUrl: "/app/components/header/header.html",
        controller: function () {
            this.states = [
                {
                    name: "home",
                    displayName: "Home"
                },
                {
                    name: "addNinja",
                    displayName: "Enrole a Ninja!"
                }
            ]
        }
    })

