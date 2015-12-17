node-terminal-status
====================

Simple module to update a structured status in terminal for the running program.

## [Example 2](https://github.com/leeroybrun/node-terminal-status/blob/master/examples/example2.js)

![Example 2](https://raw.githubusercontent.com/leeroybrun/node-terminal-status/master/examples/example2.gif)

```javascript
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
```

## [Example 1](https://github.com/leeroybrun/node-terminal-status/blob/master/examples/example.js)

```javascript
var status = require('terminal-status');

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
```


Licence
======================
(The MIT License)

Copyright (C) 2013 Leeroy Brun, www.leeroy.me

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.