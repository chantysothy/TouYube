var	express=require('express'),
	app=express(),
	bodyParser=require('body-parser'),
	exec = require('child_process').exec,
	fs = require('fs');

app.use(express.static('./public/'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/youtube/', function(req,res){

    	var theCommand = 'youtube-dl -o "public/mp3/%(title)s.%(ext)s" --extract-audio --audio-format mp3 ' + req.body.url;

	console.log(theCommand);
	exec(theCommand, function callback(error, stdout, stderr){
        	console.log('done...');
        });
});

app.get('/mp3/', function(req, res){
	fs.readdir('public/mp3/', function (err, files) { 
	if (!err) 
		res.send(files);
	else
		throw err; 
	});
});

app.listen(3000);
console.log('starting server on port 3000...');

