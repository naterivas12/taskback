const findOneTask = require("../queries/findOneTask");

const updateTask = async ({ id, title, description, status }) => {
	const task = await findOneTask(id);

	if (title) task.title = title;
	if (description) task.description = description;
	if (status && ["Pending", "InProgress", "Completed"].includes(status)) {
		task.status = status;
	} else if (status) {
		throw new Error("invalid status");
	}

	return await task.save();
};

module.exports = updateTask;
