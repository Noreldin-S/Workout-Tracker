  
// const express = require("express");
// const mongoose = require("mongoose");
// const path = require("path")
// const cors = require("cors")
// const logger = require("morgan")

// const PORT = process.env.PORT || 3000

// const app = express();

// app.use(logger("dev"))

// require('dotenv').config();

// app.use(cors());
// app.use(express.urlencoded({extended: true}));
// app.use(express.json());
// //app.use(express.static("public"));
// app.use(express.static(__dirname + '/public'));

// require("./routes/htmlRoutes")(app);
// require("./routes/apiRoutes")(app);
// //const uri = process.env.MONGO_URI;
// // mongoose.connect(uri, { useNewUrlParser: true });
// // const connection = mongoose.connection;
// // connection.once('open', () => {
// //   console.log('MongoDB database connection established successfully');
// // });
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
//     useNewUrlParse: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
// });

// app.listen(PORT, () =>{
//     console.log("Listening on PORT " + PORT)
// })

const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const compression = require("compression");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

// app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use(require("./routes/APIroutes.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

// const express = require("express");
// const logger = require("morgan");
// const mongoose = require("mongoose");

// const PORT = 3000;

// const app = express();

// app.use(logger("dev"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use(express.static("public"));

// mongoose.connect("mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

// // routes
// app.use(require("./routes/api.js"));
// app.use(require("./routes/view.js"));

// app.listen(PORT, () => {
//   console.log(`App running on port ${PORT}!`);
// });
