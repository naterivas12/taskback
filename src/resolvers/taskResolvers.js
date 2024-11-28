const Task = require("../models/Task");

const resolvers = {
	Query: {
		tasks: async () => await Task.find(),
		task: async (_, { id }) => {
			const task = await Task.findById(id);
			if (!task) throw new Error("Tarea no encontrada");
			return task;
		},
	},
	Mutation: {
		createTask: async (_, { title, description, status }) => {
			// Validación de entrada
			if (!title || !description) {
				throw new Error("El título y la descripción son obligatorios");
			}

			if (!["Pending", "InProgress", "Completed"].includes(status)) {
				throw new Error("Estado no válido");
			}

			const task = new Task({ title, description, status });
			try {
				return await task.save();
			} catch (err) {
				throw new Error("Error al guardar la tarea: " + err.message);
			}
		},
		updateTask: async (_, { id, title, description, status }) => {
			// Verificar que la tarea exista
			const task = await Task.findById(id);
			if (!task) {
				throw new Error("Tarea no encontrada");
			}

			// Validación de campos
			if (title && title.trim() === "") {
				throw new Error("El título no puede estar vacío");
			}
			if (description && description.trim() === "") {
				throw new Error("La descripción no puede estar vacía");
			}
			if (status && !["Pending", "In Progress", "Completed"].includes(status)) {
				throw new Error("Estado no válido");
			}

			// Actualizar tarea
			try {
				task.title = title || task.title;
				task.description = description || task.description;
				task.status = status || task.status;
				return await task.save();
			} catch (err) {
				throw new Error("Error al actualizar la tarea: " + err.message);
			}
		},
		deleteTask: async (_, { id }) => {
			// Verificar si la tarea existe
			const task = await Task.findById(id);
			if (!task) {
				throw new Error("Tarea no encontrada");
			}

			// Eliminar tarea
			try {
				await task.remove();
				return task;
			} catch (err) {
				throw new Error("Error al eliminar la tarea: " + err.message);
			}
		},
	},
};

module.exports = resolvers;
