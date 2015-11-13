angular.module('namer',[]).directive('namer', function(){

		return{

			restrict:'A',
			scope:{},
			link:function(scope, element, attr){

					scope.fullName = attr.first +' ' + attr.last;
			},
			template:'{{fullName}}'

		}

	});