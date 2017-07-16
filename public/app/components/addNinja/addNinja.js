'use strict'

angular.module("ninjaApp")

    .component("addNinja", {
        templateUrl: '/app/components/addNinja/addNinja.html',
        // controller: function () {
        controller: function ($state, Ninja) {

            this.ninja = {
                age: 0,
                eyeColor: "",
                name: {
                    first: "",
                    last: ""
                },
                gender: "male",
                clan: ""
            }

            this.save = save;

            function save() {
                // need to do some usage of resources
                Ninja.save(this.ninja, (result) => {
                            $state.go("home");
                        },
                                        (error) => {
                            console.log("The ERROR " + error + " occurred, with STATUS " + error.status);
                        }
                );
            }

        }
    })

