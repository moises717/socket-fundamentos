const { io } = require("../server");

io.on("connection", (client) => {
	console.log("usuario conectado");

	client.emit("enviarMensaje", {
		usuario: "Admin",
		mensaje: "Bienvenido a esta app",
	});

	client.on("disconnect", () => {
		console.log("Usuario desconnectado");
	});

	// Escuchar el cliente

	client.on("enviarMensaje", (data, callback) => {
		console.log(data);
		client.broadcast.emit("enviarMensaje", data);

		/*if (data.usuario) {
			callback({
				resp: "Todo bien",
			});
		} else {
			callback({
				resp: "mal!!!!!",
			});
		}*/
	});
});
