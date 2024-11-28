const Task = require("../../models/Task");

const findOneTask = async (id) => {
	const task = await Task.findById(id);
	if (!task) throw new Error("Task not found");
	return task;
};

module.exports = findOneTask;
