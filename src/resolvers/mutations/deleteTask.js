const findOneTask = require("../queries/findOneTask");

const deleteTask = async (id) => {
	const task = await findOneTask(id);
	await task.remove();
	return task;
};

module.exports = deleteTask;
