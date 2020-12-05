var socket = io();

socket.on("connect", function () {
	console.log("connectado al servidor");
});

socket.on("disconnect", function () {
	console.log("Perdimos conneccion con el servidor");
});

socket.emit(
	"enviarMensaje",
	{
		usuario: "Moises",
		mensaje: "Hola mundo",
	},
	(resp) => {
		console.log("resp", resp);
	}
);

//Escuchar info

socket.on("enviarMensaje", (data) => {
	console.log(data);
});
