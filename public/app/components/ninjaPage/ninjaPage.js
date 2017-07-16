'use strict'

angular.module("ninjaApp")

      .component("ninjaPage", {
            templateUrl: '/app/components/ninjaPage/ninjaPage.html',
      
      controller: function ($stateParams, $state, Ninja) {

            Ninja.getOne({id: $stateParams.id}, (oneNinja) => {
                        this.ninja = oneNinja;
                  },
                                                (error) => {
                        console.log("The ERROR " + error + " occurred, with STATUS " + error.status);
                  }
            );

            /*
                  NEED TO USE A FACTORY THAT SEND A REQUEST THAT FETCH ALL ninjaS
            */

            this.save = save;
            this.remove = remove;

            function save() {
                  Ninja.update(this.ninja, (result) => {
                              $state.go("home");
                        },
                                          (error) => {
                              console.log("The ERROR " + error + " occurred, with STATUS " + error.status);
                        }
                  );
            }

            function remove() {
                  // need to do some usage of resources
                  Ninja.delete({id: $stateParams.id}, (result) => {
                              $state.go("home");
                        },
                                                      (error) => {
                              console.log("The ERROR " + error + " occurred, with STATUS " + error.status);
                        }
                  );
            }
        }
    });