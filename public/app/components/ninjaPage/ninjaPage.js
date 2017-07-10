'use strict'

angular.module("ninjaApp")

      .component("ninjaPage", {
            templateUrl: '/app/components/ninjaPage/ninjaPage.html',
      
      controller: function ($stateParams, $state, Ninja) {

            Ninja.getOne({id: $stateParams.id}, (oneNinja) => {
                  this.ninja = oneNinja;
                  // console.log("This is a console.log from 'getOne' method ", this.ninja);
            });

            /*
                  NEED TO USE A FACTORY THAT SEND A REQUEST THAT FETCH ALL ninjaS
            */

            this.save = save;
            this.remove = remove;

            function save() {
                  // Ninja.save(this.ninja, (result) => {
                  Ninja.update(this.ninja, (result) => {
                        // if (result.$resolved === true) {
                              $state.go("home");
                        // }
                  });
                  // console.log("This is SAVE console ", this.ninja);
            }

            function remove() {
                  // need to do some usage of resources
                  Ninja.delete({id: $stateParams.id}, (result) => {
                        // if (result.$resolved === true) {
                              $state.go("home");
                        // }
                  });
                  // console.log("This is REMOVE console ", this.ninja, this.ninja._id);
            }
        }
    });