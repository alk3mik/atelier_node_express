'use strict'

const offlineCtrl = [
    "$state",
    "$interval",
    offline
]

angular.module("ninjaApp")

    .component("offline", {
        templateUrl: "/app/components/offline/offline.html",
        controller: offlineCtrl
    })

function offline($state, $interval) {
    $interval(() => {
        if (navigator.onLine) {
            $state.go("home");
        }
    }, 1000)
}