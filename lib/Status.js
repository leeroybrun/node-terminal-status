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

// status.updateStatus({title: 'My task title', action: 'Current action', subaction: 'Current subaction'});
Status.prototype.updateStatus = function(newStatus) {
	extend(this._status, newStatus);
	console.log('\033[2J'); // Clear console

	console.log('--------------------------------------------');
	console.log(' '+this._status.title);
	if(this._status.action && this._status.action != '-') { console.log(' -> '+ this._status.action); }
	if(this._status.subaction && this._status.subaction != '-') { console.log('    -> '+ this._status.subaction); }
	console.log('--------------------------------------------');
};

module.exports = Status;