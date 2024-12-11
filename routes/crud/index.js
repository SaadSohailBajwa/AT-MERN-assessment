const express = require('express')
const router = express.Router()

const authorize = require('../../middleware/authorize')

const fetchAll = require('./fetchAll')
const createTask = require('./createTask')
const fetchTaskByID = require('./getTaskByID')
const putTask = require('./putTask')
const patchTask = require('./patchTask')
const deleteTask = require('./deleteTask')

router.get('/tasks',fetchAll)
router.post("/tasks", authorize, createTask);
router.get("/tasks/:id", authorize, fetchTaskByID);
router.put("/tasks/:id", authorize, putTask);
router.patch("/tasks/:id", authorize, patchTask);
router.delete("/tasks/:id", authorize, deleteTask);

module.exports = router