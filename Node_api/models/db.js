const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true }, err => {
	if (!err) {
		console.log('Connection to Database successfull...');
	} else {
		console.log(
			'Error while Connecting to database' + JSON.stringify(err, undefined, 2)
		);
	}
});

require('./user.model');
