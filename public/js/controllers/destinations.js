function DestinationsCtrl ($scope, Airport) {
    $scope.setActive('destinations');

    $scope.sidebarURL = 'partials/airport.html';
    $scope.editURL = 'partials/airport_edit.html';
    $scope.currentAirport = null;

    $scope.setAirport = function (code) {
        $scope.currentAirport = Airport.get({airportCode: code});
    };

    $scope.editing = null;

    $scope.editAirport = function (code) {
        $scope.editing = Airport.get({airportCode: code});
    };

    $scope.airports = Airport.query();
}
