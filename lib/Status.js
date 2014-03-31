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

	if(newStatus.title && newStatus.title != this._status.title && !newStatus.action) {
		newStatus.action = null;
	}

	if(newStatus.action && newStatus.action != this._status.action && !newStatus.subaction) {
		newStatus.subaction = null;
	}

	extend(this._status, newStatus);
	console.log('\033[2J'); // Clear console

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

module.exports = new Status();