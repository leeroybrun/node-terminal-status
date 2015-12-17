var status = require('terminal-status');
var async = require('async');

async.series([
    function(callback){
    	// Set the first texts
		status.update({title: 'My first title', action: 'Performing first action', subaction: 'Waiting 4s...'});

        setTimeout(callback, 4000);
    },
    function(callback){
    	// You can then update only the fields you want, here the "title" will not be changed
        status.update({action: 'Next action', subaction: 'Waiting 2s...'});

        setTimeout(callback, 2000);
    },
    function(callback){
    	// You can update only one text if you want, leaving the others the same
        status.update({subaction: 'Now waiting 3 more seconds...'});

        setTimeout(callback, 2000);
    },
    function(callback){
    	// If you change the "action", subaction will be cleared
        status.update({action: 'Third action'});

        setTimeout(callback, 2000);
    },
    function(callback){
    	// If you change the "title", action & subaction will be cleared
        status.update({title: 'My second title'});

        setTimeout(callback, 2000);
    },
    function(callback){
    	// You can set the values altogether too
        status.update({title: 'My third title', action: 'First action', subaction: 'Waiting 2s...'});

        setTimeout(callback, 2000);
    }
], function(err, results){
	// This is the end, my friend...
    status.update({action: 'End.'});
});