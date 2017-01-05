module.exports = function($scope, $routeParams, submitResponseService) {
    $scope.name = 'submitResponseFormController';
    $scope.response = '';
    $scope.moduleTitle = [];
    $scope.moduleBody = [];
    $scope.moduleIterator = 0;
    $scope.modules = [];
    $scope.success = false;
    $scope.failed = false;
    $scope.questionId = $routeParams.questionId;
    $scope.addModule = function() {
      if ($scope.moduleIterator < 8) {
        $scope.modules.push({
            title: '',
            text: ''
        });
        ++$scope.moduleIterator;
      };
    };
    $scope.removeModule = function(id) {
      console.log(id);
      // $scope.re
      $scope.modules.splice(id, 1);

    }
    $scope.submit = function() {
        submitResponseService.submit($scope.questionId, $scope.response, $scope.modules)
        .then(function(response) {
          if (response) {
            $scope.success = true;
              window.history.back();
          }
          else {
            $scope.failed = true;
          }
        });
    };
};
