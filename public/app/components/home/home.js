'use strict'

angular.module("ninjaApp")

    .component("home", {
            templateUrl: '/app/components/home/home.html',
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
                  });

            // var ninja = Ninja.get({ id: $scope.id }, function() {
            //     console.log(ninja, typeof ninja);
            // }); // get() returns a single ninja
// const that = this;
            // $resource("/ninja").get().$promise.then(function(Bdd){
            //       console.log(Bdd)
            //       that.ninjas = Bdd.ninjas
            // })
            // var ninjas = Ninja.get(function() {
// that.ninjas = ninjas;
            // }); // query() returns all the ninjas
            // console.log(ninjas.ninjas, typeof ninjas);

            // $scope.ninja = new Ninja(); //You can instantiate resource class
            // // $scope.ninja.data = 'some data';
            // $scope.ninja.data = {
            //     "_id": "666b66666f666666a6666c66",
            //     "age": 99,
            //     "eyeColor": "red",
            //     "name": {
            //         "first": "Thurston",
            //         "last": "Moore"
            //     },
            //     "gender": "unknown",
            //     "clan": "SONIC YOUTH"
            // };

            // Ninja.save($scope.ninja, function() {
            //     console.log($scope.ninja);
            //     //data saved. do something here.
            // }); //saves an entry. Assuming $scope.entry is the Entry object
            
            /*

            JSON TO DELETE, NEED TO USE A FACTORY THAT SEND A REQUEST THAT FETCH ALL ninjaS

            */

            // this.ninjas = [
            //     {
            //         "_id": "591b03812ad1404aa02233f3",
            //         "age": 23,
            //         "eyeColor": "green",
            //         "name": {
            //             "first": "Mcknight",
            //             "last": "Keller"
            //         },
            //         "gender": "male",
            //         "clan": "KYAGORO"
            //     },
            //     {
            //         "_id": "591b03818bd382681e5e014d",
            //         "age": 20,
            //         "eyeColor": "blue",
            //         "name": {
            //             "first": "Claudia",
            //             "last": "Fuentes"
            //         },
            //         "gender": "female",
            //         "clan": "UNIA"
            //     },
            //     {
            //         "_id": "591b0381947522150b2b313a",
            //         "age": 28,
            //         "eyeColor": "green",
            //         "name": {
            //             "first": "Linda",
            //             "last": "Dale"
            //         },
            //         "gender": "female",
            //         "clan": "COMTENT"
            //     },
            //     {
            //         "_id": "591b03814a75807b69e12636",
            //         "age": 28,
            //         "eyeColor": "blue",
            //         "name": {
            //             "first": "Pearl",
            //             "last": "Frost"
            //         },
            //         "gender": "female",
            //         "clan": "SILODYNE"
            //     },
            //     {
            //         "_id": "591b038123dc2de01903d4d5",
            //         "age": 31,
            //         "eyeColor": "brown",
            //         "name": {
            //             "first": "Finch",
            //             "last": "Mccoy"
            //         },
            //         "gender": "male",
            //         "clan": "ETERNIS"
            //     },
            //     {
            //         "_id": "591b0381507a1809ced043ec",
            //         "age": 27,
            //         "eyeColor": "brown",
            //         "name": {
            //             "first": "Stout",
            //             "last": "Rodriquez"
            //         },
            //         "gender": "male",
            //         "clan": "EWAVES"
            //     }
            // ]

            /*

            JSON TO DELETE, NEED TO USE A FACTORY THAT SEND A REQUEST THAT FETCH ALL ninjaS

            */
        }
    });