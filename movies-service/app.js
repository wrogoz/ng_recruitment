const express = require('express');
const db=require('./db_config/db_config');
const app = express();
const moviesRoute = require('./routes/moviesRoute');
app.use(express.json());

db.connect((err)=>{
	if(err){
		console.error("error connecting: " + err.stack);
		return process.exit(22);
	}
	console.log("connected as id " + db.threadId);
});

app.use('/movies',moviesRoute);


const port = 3257;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});