
const findAllTasks = require("./queries/findAllTasks");
const findOneTask = require("./queries/findOneTask");
const createTask = require("./mutations/createTask");
const updateTask = require("./mutations/updateTask");
const deleteTask = require("./mutations/deleteTask");

const getResolvers = () => {
	return {
		Query: {
			tasks: async () => await findAllTasks(),
			task: async (_, { id }) => await findOneTask(id),
		},
		Mutation: {
			createTask: async (_, { title, description, status }) =>
				await createTask({ title, description, status }),
			updateTask: async (_, { id, title, description, status }) =>
				await updateTask({ id, title, description, status }),
			deleteTask: async (_, { id }) => await deleteTask(id),
		},
	};
};

module.exports = getResolvers;
