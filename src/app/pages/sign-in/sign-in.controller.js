function SignInController($scope, authenticationService) {
  'ngInject';
  $scope.warning = "";
  $scope.signIn = () => {
    const login = $scope.user.email;
    const password = $scope.user.password;  
    if (!authenticationService.signInToFirebase(login, password)) {
      $scope.showWarning();
    } else {
      $scope.warning = "";
    }
  };
  $scope.showWarning = () => {
    $scope.warning = "Wrong E-mail or password"
  }
}

export default SignInController;