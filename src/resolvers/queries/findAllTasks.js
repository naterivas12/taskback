
const Task = require("../../models/Task");

const findAllTasks = async () => {
	return await Task.find();
};

module.exports = findAllTasks;
