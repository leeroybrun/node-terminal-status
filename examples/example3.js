var status = require('terminal-status');
var async = require('async');

async.series([
    // Program start
    function(callback){
		status.update({title: 'Program is starting', action: 'Please wait...', subaction: '3...'});

        setTimeout(callback, 1000);
    },
    function(callback){
        status.update({subaction: '2...'});

        setTimeout(callback, 1000);
    },
    function(callback){
        status.update({subaction: '1...'});

        setTimeout(callback, 1000);
    },
    function(callback){
        status.update({subaction: 'GO!'});

        setTimeout(callback, 1000);
    },

    // Connecting to database
    function(callback){
        status.update({title: 'Connecting to database', action: 'Connecting to host...', subaction: 'Please wait...'});

        setTimeout(callback, 2000);
    },
    function(callback){
        status.update({subaction: 'Connected!'});

        setTimeout(callback, 1000);
    },
    function(callback){
        status.update({action: 'Sending credentials...', subaction: 'Please wait...'});

        setTimeout(callback, 3000);
    },
    function(callback){
        status.update({subaction: 'Success!'});

        setTimeout(callback, 1000);
    },

    // Loading models
    function(callback){
        status.update({title: 'Loading models', action: 'Reading files...', subaction: 'Please wait...'});

        setTimeout(callback, 3000);
    },
    function(callback){
        status.update({subaction: 'Success!'});

        setTimeout(callback, 1000);
    },

    // Program started
    function(callback){
        status.update({title: 'Program started'});

        setTimeout(callback, 1000);
    },
    function(callback){
        status.update({action: 'Please wait...'});

        setTimeout(callback, 1000);
    },
], function(err, results){
	// This is the end, my friend...
    status.update({action: 'Ready!'});
});