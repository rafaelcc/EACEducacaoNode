/* const user_id = request.headers.authotization; utilizar o usuario logado*/
const express = require('express');
const connection = require('./database/connection');
const UserController = require('./Controllers/UserController');
const SchoolController = require('./Controllers/SchoolController');
const ProfileController = require('./Controllers/ProfileController');
const SessionController = require('./Controllers/SessionController');
const CityController = require('./Controllers/CityController');
const StateController = require('./Controllers/StateController');
const SchoolYearController = require('./Controllers/SchoolYearController');
const PerfomanceFieldController = require('./Controllers/PerfomanceFieldController');
const ComponentController = require('./Controllers/ComponentController');
const ConstantController = require('./Controllers/ConstantController');
const AxisController = require('./Controllers/AxisController');
const LessonPlanController = require('./Controllers/LessonPlanController');
const CurrPlanStateController = require('./Controllers/CurrPlanStateController');
const CurrPlanNatController = require('./Controllers/CurrPlanNatController');
const PractLangController = require('./Controllers/PractLangController');
const PlLesCurrNatController = require('./Controllers/PlLesCurrNatController');
const ThematicUnitController = require('./Controllers/ThematicUnitController');

const routes = express.Router();


routes.post('/sessions', SessionController.create);

routes.get('/users', UserController.index);

routes.post('/users', UserController.create); 

routes.get('/schools', SchoolController.index);

routes.post('/schools', SchoolController.create); 

routes.put('/schools/:id_escola', SchoolController.update);

routes.get('/profile', ProfileController.index);

routes.post('/profile', ProfileController.create); 

routes.get('/city', CityController.index);

routes.post('/city', CityController.create); 

routes.get('/state', StateController.index);

routes.post('/state', StateController.create); 

routes.get('/school_year', SchoolYearController.index);

routes.post('/school_year', SchoolYearController.create); 

routes.get('/perfomance_field', PerfomanceFieldController.index);

routes.post('/perfomance_field', PerfomanceFieldController.create); 

routes.get('/component', ComponentController.index);

routes.post('/component', ComponentController.create); 

routes.get('/constant', ConstantController.index);

routes.post('/constant', ConstantController.create); 

routes.get('/axis', AxisController.index);

routes.post('/axis', AxisController.create); 

routes.get('/lesson_plan', LessonPlanController.index);

routes.post('/lesson_plan', LessonPlanController.create); 

routes.get('/currplanstate', CurrPlanStateController.index);

routes.post('/currplanstate', CurrPlanStateController.create); 

routes.get('/currplannat', CurrPlanNatController.index);

routes.post('/currplannat', CurrPlanNatController.create); 

routes.get('/practlang', PractLangController.index);

routes.post('/practlang', PractLangController.create); 

routes.get('/pllescurrnat', PlLesCurrNatController.index);

routes.post('/pllescurrnat', PlLesCurrNatController.create); 

routes.get('/themunit', ThematicUnitController.index);

routes.post('/themunit', ThematicUnitController.create); 

module.exports = routes;