'use strict'

angular.module("ninjaApp")

    .component("addNinja", {
        templateUrl: '/app/components/addNinja/addNinja.html',
        controller: function () {

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

            this.save = save

            function save() {
                // need to do some usage of resources
                console.log(this.ninja)
            }

        }
    })

