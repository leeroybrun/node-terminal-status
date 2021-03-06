// ------------------------------------
// Status updater class
// ------------------------------------
//
// Update a status on command line for 
// the current program.
//
// ------------------------------------
var Status = function() {

}

Status.prototype._status = {};

// status.update({title: 'My task title', action: 'Current action', subaction: 'Current subaction'});
Status.prototype.update = function(newStatus) {
	newStatus = newStatus || {};

	var hasNew = {
		title: newStatus.title && newStatus.title != this._status.title,
		action: newStatus.action && newStatus.action != this._status.action,
		subaction: newStatus.subaction && newStatus.subaction != this._status.subaction
	}

	// If new action is not set, but we change the title, we will clear the action
	if(!newStatus.action && hasNew.title) {
		newStatus.action = null;
	}

	// If new subaction is not set, but we change the title or action, we will clear the action
	if(!newStatus.subaction && (hasNew.action || hasNew.title)) {
		newStatus.subaction = null;
	}

	extend(this._status, newStatus);
	
	clearConsole();

	console.log('--------------------------------------------');
	console.log(' '+this._status.title);
	if(this._status.action && this._status.action != '-') { console.log(' -> '+ this._status.action); }
	if(this._status.subaction && this._status.subaction != '-') { console.log('    -> '+ this._status.subaction); }
	console.log('--------------------------------------------');
};

var extend = function(target) {
    var sources = [].slice.call(arguments, 1);
    sources.forEach(function (source) {
        for (var prop in source) {
            target[prop] = source[prop];
        }
    });
    return target;
};

var clearConsole = function() {
	if(process.platform.indexOf('win') == -1) {
		// Unix
		console.log('\033[2J');
	} else {
		// Windows
		process.stdout.write('\033c');
	}
};

module.exports = new Status();