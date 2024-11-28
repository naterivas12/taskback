
const Task = require("../../models/Task"); // Importa el modelo de Mongoose
const mongoose = require("mongoose");

const deleteTask = async (id) => {
	try {
		// Validar que el ID es válido
		if (!mongoose.Types.ObjectId.isValid(id)) {
			throw new Error("El ID proporcionado no es válido.");
		}

		// Buscar y eliminar la tarea
		const task = await Task.findByIdAndDelete(id); // Usa el modelo Task directamente
		if (!task) {
			throw new Error(`La tarea con ID ${id} no fue encontrada.`);
		}

		return {
			id: task.id,
			message: "Tarea eliminada exitosamente.",
		};
	} catch (error) {
		console.error("Error en deleteTask:", error.message);
		throw new Error("Ocurrió un error al intentar eliminar la tarea.");
	}
};

module.exports = deleteTask;
