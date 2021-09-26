require("dotenv").config();
const fs = require("fs");
const path = require("path");
const Discord = require("discord.js");
const bot = new Discord.Client();

const MODULES = ["commands"];

const prefix = "?";
const bot_id = "891614684912967730";
const memory_file = "memory.json";

bot.login(process.env.TOKEN);

bot.on("ready", () => {
	bot.user.setPresence({
		activity:
			process.env.NODE_ENV === "production"
				? {name: `Doing God's Work "${prefix}help"`}
				: {name: `UNDER CONSTRUCTION`},
		status: "online",
	});
	console.log(
		`Logged in as ${bot.user.tag}!\n${bot.user.tag} is listening :)`
	);

	MODULES.forEach((module) => {
		fs.readdir(path.join(__dirname, module), (err, files) => {
			files.forEach((filename) => {
				if (
					fs
						.lstatSync(path.join(__dirname, module, filename))
						.isFile()
				) {
					require(path.join(__dirname, module, filename));
				}
			});
		});
	});
});

module.exports.bot = bot;
module.exports.prefix = prefix;
module.exports.bot_id = bot_id;
module.exports.memory_file = memory_file;
