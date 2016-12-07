myApp.factory('Authentication', ['$rootScope', '$firebaseAuth', '$firebaseObject', '$location', function ($rootScope, $firebaseAuth, $firebaseObject, $location) {
    var auth = $firebaseAuth();
    auth.$onAuthStateChanged(function (loginUser) {
        if (loginUser) {
            var userRef = database.ref('users/' + loginUser.uid);
            var userObj = $firebaseObject(userRef);
            console.log(userRef);
            $rootScope.currentUser = userObj;
        } else {
            $rootScope.currentUser = '';
        }
    });
    var myObj =  {
        login: function (user) {
            auth.$signInWithEmailAndPassword(user.email, user.password)
                .then(function (loginUser) {
                    $location.path('/success');
                })
                .catch(function (error) {
                    $rootScope.message = error.message;
                });
        },
        logout: function () {
            return auth.$signOut();
        },
        requireSignIn: function () {
            return auth.$requireSignIn();
        },
        register: function (user) {
            auth.$createUserWithEmailAndPassword(user.email,
                    user.password)
                .then(function (regUser) { 
                    database.ref('users/' + regUser.uid).set({
                        firstname: user.firstname,
                        lastname: user.lastname,
                        regUser: regUser.uid,
                        date: firebase.database.ServerValue.TIMESTAMP,
                        email: user.email,
                    })
                    myObj.login(user);
                })
                .catch(function (error) {
                    $rootScope.message = error.message;
                })
        }
    }
    return myObj;
}]);