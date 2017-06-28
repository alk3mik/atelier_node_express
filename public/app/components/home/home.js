'use strict'

angular.module("ninjaApp")

    .component("home", {
        templateUrl: '/app/components/home/home.html',
        controller: function ($scope, Ninja) {

            // var ninja = Ninja.get({ id: $scope.id }, function() {
            //     console.log(ninja, typeof ninjas);
            // }); // get() returns a single ninja

            var ninjas = Ninja.query(function() {
                // console.log(ninjas, typeof ninjas);
            }); // query() returns all the ninjas
            $scope.ninjas = ninjas;

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
    })
