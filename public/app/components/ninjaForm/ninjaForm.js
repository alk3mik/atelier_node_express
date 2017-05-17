"use strict"

angular.module("ninjaApp")

    .component("ninjaForm", {
        bindings: {
            ninja: "<",
            mode: "@",
            onSave: "=",
            onRemove: "="
        },
        templateUrl: "/app/components/ninjaForm/ninjaForm.html"
    })
