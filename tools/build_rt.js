var shell = require('shelljs');

var files = "";

shell.ls('-R', 'src/*.rt').forEach(function(f) {
	files = files + " "+ f;  
}, this);

if(files==="") shell.exit(0);

var r = shell.exec("rt " + files + " --modules typescript");

if(r.code && r.output){
	shell.echo(r.output)
}

shell.exit(r.code);