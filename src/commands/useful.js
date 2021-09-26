const {bot, prefix, bot_id, memory_file} = require("../huxley");
const Discord = require("discord.js");
const fs = require("fs");

bot.on("message", async (msg) => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;
	const args = msg.content.slice(prefix.length).trim().split(" ");
	const command = args.shift().toLowerCase();
	let memory = {mutes: [], ["global-mute"]: false};

	if (command === "mute-for-me") {
		if (fs.existsSync(memory_file)) {
			const jsondata = fs.readFileSync(memory_file);
			memory = JSON.parse(jsondata);
		}
		const author_id = msg.author.id;
		const index = memory.mutes.indexOf(author_id);
		if (index > -1) {
			memory.mutes.splice(index, 1);
		} else {
			memory.mutes.push(author_id);
		}
		msg.channel.send(
			`Huxley is ${
				memory.mutes.includes(author_id) ? "muted" : "unmuted"
			} for you.`
		);
		fs.writeFileSync(memory_file, JSON.stringify(memory));
	}

	if (command === "global-mute") {
		if (
			!msg.member.roles.cache.some(
				(role) => role.id === process.env.ADMIN_ROLE_ID
			)
		) {
			msg.channel.send(`You are not allowed to global mute Huxley.`);
			return;
		}
		if (fs.existsSync(memory_file)) {
			const jsondata = fs.readFileSync(memory_file);
			memory = JSON.parse(jsondata);
		}
		memory["global-mute"] = !memory["global-mute"];
		msg.channel.send(
			`Huxley is ${memory["global-mute"] ? "muted" : "unmuted"}.`
		);
		fs.writeFileSync(memory_file, JSON.stringify(memory));
	}
});
