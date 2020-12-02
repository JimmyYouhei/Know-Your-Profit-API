const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors')
import routes from "./routes/appRoutes";

const app = express();

const port = 4000;

// mongo connection
mongoose.Promise = global.Promise;
const Url = "mongodb://localhost/knowYourProfit"
mongoose.connect(Url , {
    useNewUrlParser: true,
    useUnifiedTopology : true
})

// bodyparser setup
app.use(bodyparser.urlencoded({extended : true}));
app.use(bodyparser.json());

app.use(cors());

routes(app);

app.get("/" , (require , response) => {
    response.send("ok")
})

app.listen(port , () => {
    console.log(`it is running on port ${port}`);
})