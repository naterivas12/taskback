
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
require("dotenv").config();

const typeDefs = require("./schema/typeDefs");
const resolvers = require("./resolvers/taskResolvers");

const startServer = async () => {
	const app = express();

	// Conectar a MongoDB con manejo de errores
	try {
		await mongoose.connect(process.env.MONGO_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB Connected");
	} catch (err) {
		console.error("Error connecting to MongoDB:", err.message);
		process.exit(1);
	}

	// Configurar Apollo Server
	const server = new ApolloServer({
		typeDefs,
		resolvers,
		formatError: (err) => {
			return new Error("Ocurrió un error en el servidor");
		},
	});

	await server.start();
	server.applyMiddleware({ app });

	const PORT = process.env.PORT || 4000;
	app.listen(PORT, () =>
		console.log(
			`Server running at http://localhost:${PORT}${server.graphqlPath}`
		)
	);
};

startServer();
