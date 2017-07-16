'use strict'

const config = [
    "$stateProvider",
    "$urlRouterProvider",
    Config
]

const run = [
    "$state",
    Run
]

angular.module('ninjaApp', [
    "ui.router",
    "ngAnimate",
    "ngResource"
])

    .config(config)
    .run(run)

function Config($stateProvider, $urlRouterProvider) {
    const states = [
        {
            name: "home",
            url: "/",
            component: "home"
        },
        {
            name: "ninjaPage",
            url: "/ninja/:id",
            component: "ninjaPage"
        },
        {
            name: "addNinja",
            url: "/addNinja",
            component: "addNinja"
        },
        {
            name: "offline",
            url: "/offline",
            component: "offline"
        }
    ]

    states.forEach((state) => {
        $stateProvider.state(state)
    })

    $urlRouterProvider.otherwise('/')
}

function Run($state) {
    if (!navigator.onLine) {
        $state.go("offline")
    }
}
