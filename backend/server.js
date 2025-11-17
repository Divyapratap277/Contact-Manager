require('dotenv').config();
const express= require ('express');
const errorHandler = require('./middleware/errorHandler');
const connectdb = require('./config/dbConnection');



connectdb();
const app= express();

app.use(express.json())
const port=process.env.PORT || 5000;

app.use("/api/contacts", require('./routes/contactRoutes'))
app.use("/api/users", require('./routes/userRoutes'))
app.use(errorHandler)

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
    
})

