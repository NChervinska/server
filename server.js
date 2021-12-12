const express = require('express');
const mongoose = require('mongoose');
const activityApiRoutes = require('../server/src/routes/api-activity-routes')
const animalApiRoutes = require('../server/src/routes/api-animal-routes')
const clientApiRoutes = require('../server/src/routes/api-client-routes')
const employeeApiRoutes = require('../server/src/routes/api-employee-routes')
const mealPlanApiRoutes = require('../server/src/routes/api-meal-plan-routers')
const userApiRoutes = require('../server/src/routes/api-user-routers')

const app = express();  

const PORT = process.env.PORT || 3000;
const db = 'mongodb+srv://Anastasiia:qaz123@pethotels.d3hrb.mongodb.net/pet-hotels?retryWrites=true&w=majority';

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
.then((res) => console.log('Connect to db'))
.catch((error) => console.log(error));


app.listen(PORT, (error) => {
    error ? console.log(error) : console.log(`listening port ${PORT}`);
});
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.use(activityApiRoutes);
app.use(animalApiRoutes);
app.use(clientApiRoutes);
app.use(employeeApiRoutes); 
app.use(mealPlanApiRoutes);
app.use(userApiRoutes);
