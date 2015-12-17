var status = require('./lib/Status');

status.update({title: 'My task title', action: 'Current action', subaction: 'Waiting 4s...'});

setTimeout(function() {
	status.update({action: 'Next action, waiting 2s...'});

	setTimeout(function() {
		status.update({subaction: 'Waiting 5s...'});

		setTimeout(function() {
			status.update({action: 'End.'});
		}, 5000);
	}, 2000);
}, 4000);