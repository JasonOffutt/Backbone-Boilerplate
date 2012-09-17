(function () {
	'use strict';

	require.config({
		paths: {
			backbone: 				'//cdnjs.cloudflare.com/ajax/libs/backbone.js/0.9.2/backbone-min',
			backboneExtensions: 	'lib/backboneExtensions',
			bootstrap: 				'//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.1.1/bootstrap.min',
			events: 				'lib/events',
			handlebars: 			'//cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.0.0.beta6/handlebars.min',
			jquery: 				'//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.1/jquery.min',
			jqueryExtensions: 		'lib/jqueryExtensions',
			json: 					'//cdnjs.cloudflare.com/ajax/libs/json2/20110223/json2',
			templateManager: 		'lib/TemplateManager',
			underscore: 			'//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.3.3/underscore-min'
		},
		shim: {
			'backbone': {
				deps: [ 'underscore', 'jquery' ],
				exports: 'Backbone'
			},
			'bootstrap': {
				deps: [ 'jquery' ],
				exports: 'jquery'
			},
			'handlebars': {
				deps: [],
				exports: 'Handlebars'
			},
			'json': {
				deps: [],
				exports: 'JSON'
			},
			'underscore': {
				deps: [],
				exports: '_'
			}
		},
		callback: function () {
			require([
					'jquery',
					'jqueryExtensions',
					'underscore',
					'backbone',
					'backboneExtensions'
				], 
				function ($, jqueryExtensions, _, Backbone, backboneExtensions) {
					jqueryExtensions.init();
					backboneExtensions.init();
				});
		}
	});
}());