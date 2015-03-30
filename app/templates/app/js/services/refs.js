angular.module('<%=gen.angModuleLower%>.services')
  .factory('Refs', ['$cookies', '$firebase',
    function($cookies, $firebase) {
      var rootRef = new Firebase($cookies.rootRef || '<%=gen.testRootRef%>');
      
      // define every standard ref used application wide
      return {
        root: rootRef,
        users: rootRef.child('users'),
      };
    }
  ]);
