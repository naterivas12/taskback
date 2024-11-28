const Task = require("../../models/Task");

const createTask = async ({ title, description, status }) => {
	if (!title || !description) {
		throw new Error("Title and description are required");
	}
	if (status && !["Pending", "InProgress", "Completed"].includes(status)) {
		throw new Error("invalid status");
	}
	const task = new Task({ title, description, status });
	return await task.save();
};

module.exports = createTask;
