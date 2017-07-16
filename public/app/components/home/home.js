'use strict'

angular.module("ninjaApp")

    .component("home", {
            templateUrl: '/app/components/home/home.html',

            /*

                  NEED TO USE A FACTORY THAT SEND A REQUEST THAT FETCH ALL ninjaS

            */

            // controller: function ($scope, $http) {
/*
// With the "standard" method (i.e. $http AJAX request), by having injected the dependency $http into
// the controller, we would do:

            let ninjas_data = $http.get('/ninja');

// And then we would have 2 choices: ECMAScript 3/5 syntax or ECMAScript 6 syntax.

// ECMAScript 3/5 (choice 1).
// Until arrow functions, every new function defined its own *this* value (a new object in the case of a
// constructor, undefined in strict mode function calls, the base object if the function is called as an
// "object method", etc.). This proved to be annoying with an object-oriented style of programming.
// In ECMAScript 3/5, the *this* issue was fixable by assigning the value in *this* to a variable (named *that*)
// that could be closed over:

            // let that = this;
            // ninjas_data.then(function(result) {
            //       that.ninjas = result.data.ninjas;
            // });

// ECMAScript 6 (choice 2).
// Note: An arrow function does not create its own *this*, the *this* value of the enclosing execution
// context is used. Thus, in the following code, *this* within function passed to .then method has the
// same value as *this* in the enclosing function (i.e. the value of the *controller* property):

            ninjas_data.then((result) => {
                  this.ninjas = result.data.ninjas;
            });
*/

            controller: function($scope, Ninja) {
// By, instead, using the $resource named *Ninja*, we will have:
//
// ECMAScript 3/5 (choice 1)
            // let that = this;
            // Ninja.query(function(result) {
            //       // console.log(result, result.ninjas);
            //       that.ninjas = result.ninjas;
            //       // console.log(that.ninjas);
            // });

// ECMAScript 6 (choice 2)
                  Ninja.query((result) => {
                              this.ninjas = result.ninjas;
                        },
                              (error) => {
                              console.log("The ERROR " + error + " occurred, with STATUS " + error.status);
                        }
                  );

        }
    });