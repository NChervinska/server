const Activity = require('./models/activity'); 
const Animal = require('./models/animal');
const Client = require('./models/client');
const Employee = require('./models/employee');
const MealPlan = require('./models/meal-plan');
const User = require('./models/user');

const handleError = (res, error) => {
    res.status(500).send(error.message);
}

// CRUD activity

const getActivities = (req, res) => {
    Activity
        .find()
        .then((activities) => res.status(200).json(activities))
        .catch((error) => handleError(res, error));
}

const addActivity = (req, res) => {
    const { sleepHour, activeHour, animal, date } = req.body; 
    const activity = new Activity({ sleepHour, activeHour, animal, date});
    activity
        .save()
        .then((activity) => res.status(200).json(activity))
        .catch((error) => handleError(res, error));
}

const getActivity = (req, res) => {
    Activity
        .findById(req.params.id)
        .then((activity) => res.status(200).json(activity))
        .catch((error) => handleError(res, error));
}

const deleteActivity = (req, res) => {
    const { id } = req.params;
    Activity
        .findByIdAndDelete(id)
        .then((activity) => res.status(200).json(id))
        .catch((error) => handleError(res, error));
}

const editActivity = (req, res) => {
    const { sleepHour, activeHour, animal } = req.body;
    const { id } = req.params;
    Activity
        .findByIdAndUpdate(id, { sleepHour, activeHour, animal }, { new: true })
        .then((activity) => res.json(activity))
        .catch((error) => handleError(res, error));
}

//CRUD animals

const getAnimals = (req, res) => {
    Animal
        .find()
        .then((animals) => res.status(200).json(animals))
        .catch((error) => handleError(res, error));
}

const addAnimal = (req, res) => {
    const { name, type, weight, age,  client, employee} = req.body;
    const animal = new Animal({ name, type, weight, age,  client, employee });
    animal
        .save()
        .then((animal) => res.status(200).json(animal))
        .catch((error) => handleError(res, error));
}

const getAnimal = (req, res) => {
    Animal
        .findById(req.params.id)
        .then((animal) => {
            res.status(200).json(animal);
            return animal;})
        .catch((error) => handleError(res, error));
}

const deleteAnimal = (req, res) => {
    const { id } = req.params;
    Animal
        .findByIdAndDelete(id)
        .then((animal) => res.status(200).json(id))
        .catch((error) => handleError(res, error));
}

const editAnimal = (req, res) => {
    const { name, type, weight, age,  client, emloyee} = req.body;
    const { id } = req.params;
    Animal
        .findByIdAndUpdate(id, { name, type, weight, age,  client, emloyee}, 
            { new: true })
        .then((animal) => res.json(animal))
        .catch((error) => handleError(res, error));
} 

//CRUD clients

const getClients = (req, res) => {
    Client
        .find()
        .then((clients) => res.status(200).json(clients))
        .catch((error) => handleError(res, error));
}

const addClient = (req, res) => {
    const { name, surname, phone, bonuses,  user} = req.body;
    const client = new Client({ name, surname, phone, bonuses,  user});
    client
        .save()
        .then((client) => res.status(200).json(client))
        .catch((error) => handleError(res, error));
}

const getClient = (req, res) => {
    Client
        .findById(req.params.id)
        .then((client) => res.status(200).json(client))
        .catch((error) => handleError(res, error));
}

const deleteClient = (req, res) => {
    const { id } = req.params;
    Client
        .findByIdAndDelete(id)
        .then((client) => res.status(200).json(id))
        .catch((error) => handleError(res, error));
}

const editClient = (req, res) => {
    const { name, surname, phone, bonuses,  user} = req.body;
    const { id } = req.params;
    Client
        .findByIdAndUpdate(id, { name, surname, phone, bonuses,  user}, 
            { new: true })
        .then((client) => res.json(client))
        .catch((error) => handleError(res, error));
}

//CRUD employees

const getEmployees = (req, res) => {
    Employee
        .find()
        .then((employees) => res.status(200).json(employees))
        .catch((error) => handleError(res, error));
}

const addEmployee = (req, res) => { 
    const { name, surname, phone, user} = req.body;
    const employee = new Employee({ name, surname, phone, user});
    employee
        .save()
        .then((employee) => res.status(200).json(employee))
        .catch((error) => handleError(res, error));
}

const getEmployee = (req, res) => {
    Employee
        .findById(req.params.id)
        .then((employee) => res.status(200).json(employee))
        .catch((error) => handleError(res, error));
}

const deleteEmployee = (req, res) => {
    const { id } = req.params;
    Employee
        .findByIdAndDelete(id)
        .then((employee) => res.status(200).json(id))
        .catch((error) => handleError(res, error));
}

const editEmployee = (req, res) => {
    const { name, surname, phone, user} = req.body;
    const { id } = req.params;
    Employee
        .findByIdAndUpdate(id, { name, surname, phone, user}, 
            { new: true })
        .then((employee) => res.json(employee))
        .catch((error) => handleError(res, error));
}

//CRUD MealPlan

const getMealPlans = (req, res) => {
    MealPlan
        .find()
        .then((mealPlans) => res.status(200).json(mealPlans))
        .catch((error) => handleError(res, error));
}

const addMealPlan = (req, res) => {
    const { amountOfFoodOnDay, animal} = req.body;
    const mealPlan = new MealPlan({ amountOfFoodOnDay, animal});
    mealPlan
        .save()
        .then((mealPlan) => res.status(200).json(mealPlan))
        .catch((error) => handleError(res, error));
}

const getMealPlan = (req, res) => {
    MealPlan
        .findById(req.params.id)
        .then((mealPlan) => res.status(200).json(mealPlan))
        .catch((error) => handleError(res, error));
}

const deleteMealPlan = (req, res) => {
    const { id } = req.params;
    MealPlan
        .findByIdAndDelete(id)
        .then((mealPlan) => res.status(200).json(id))
        .catch((error) => handleError(res, error));
}

const editMealPlan = (req, res) => {
    const { amountOfFoodOnDay, animal} = req.body;
    const { id } = req.params;
    MealPlan
        .findByIdAndUpdate(id, { amountOfFoodOnDay, animal}, 
            { new: true })
        .then((mealPlan) => res.json(mealPlan))
        .catch((error) => handleError(res, error));
}

//CRUD user

const getUsers = (req, res) => {
    User
        .find()
        .then((users) => res.status(200).json(users))
        .catch((error) => handleError(res, error));
}

const addUser = (req, res) => {
    const { email, password, role } = req.body;
    const user = new User({email, password, role });
    user
        .save()
        .then((user) => res.status(200).json(user))
        .catch((error) => handleError(res, error));
}

const getUser= (req, res) => {
    User
        .findById(req.params.id)
        .then((user) => res.status(200).json(user))
        .catch((error) => handleError(res, error));
}

const deleteUser = (req, res) => {
    const { id } = req.params;
    User
        .findByIdAndDelete(id)
        .then((user) => res.status(200).json(id))
        .catch((error) => handleError(res, error));
}

const editUser = (req, res) => {
    const { email, password, role } = req.body;
    const { id } = req.params;
    User
        .findByIdAndUpdate(id, { email, password, role }, 
            { new: true })
        .then((user) => res.json(user))
        .catch((error) => handleError(res, error));
}

//Logic

const addMealPlanByActivity = (req, res) => { 
    Animal.findById( req.params.id).then((a) => {
        Activity.find().then((activities) => {
            var activityHour = 0;
            var index = 0; 
            for(; index < activities.length; index++){ 
                if(activities[index].animal == req.params.id)
                    activityHour += activities[index].activityHour; 
            }
            var activityk; 
            if(activityHour/index > 2){
                activityk = 3
            }
            else{
                activityk = 2;
            } 
            var amountOfFoodOnDay = activityk * a.weight * 6;  
            if(amountOfFoodOnDay == 'Nan')
                amountOfFoodOnDay = 30; 
            var animal =  req.params.id;
            const mealPlan = new MealPlan({ amountOfFoodOnDay, animal});
            mealPlan
                .save()
                .then((mealPlan) => res.status(200).json(mealPlan))
                .catch((error) => handleError(res, error));
        }); 
    }); 
}

const getStatistics = (req, res) => { 
    Activity.find().then((activities) => {
        var statistics = []; 
        for(var i; i < activities.length; i++){ 
            if(activities[index].animal == req.params.id){
                statistics.push(activities[index]); 
            }
        }
        res.status(200).json(statistics);           
    });
}

const getCheck = (req, res) => { 
    Activity.findById( req.params.id).then((animal) => {
        Activity.find().then((activities) => {
            var days;
            for(var i; i < activities.length; i++){ 
                if(activities[index].animal == req.params.id){
                    days++; 
                }
            } 
            res.status(200).json(days * 300);        
        }); 
    })
    .catch((error) => handleError(res, error)); 
}

const checkAllAnimal = (req, res) => {
    Activity.find().then((activities) => { 
        var sickAnimal = [];
        for(var i = 0; i < activities.length; i++){
            if(activities[i].sleepHour < 6 || activities[i].activeHour == 0){
                sickAnimal.push(activities[i].animal);
            }
        } 
        res.status(200).json(sickAnimal); 
    });
}

module.exports = {
    getActivities,
    addActivity,
    getActivity, 
    deleteActivity,
    editActivity,
    getAnimals,
    addAnimal,
    getAnimal, 
    deleteAnimal,
    editAnimal, 
    getClients,
    addClient,
    getClient, 
    deleteClient,
    editClient,
    getEmployees,
    addEmployee,
    getEmployee, 
    deleteEmployee,
    editEmployee,
    getUsers,
    addUser,
    getUser, 
    deleteUser,
    editUser,
    getMealPlans,
    addMealPlan,
    addMealPlanByActivity,
    getMealPlan, 
    deleteMealPlan, 
    addMealPlan,
    editMealPlan, 
    getStatistics, 
    getCheck, 
    checkAllAnimal,
};