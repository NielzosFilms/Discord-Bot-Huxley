const {bot, prefix, bot_id, memory_file} = require("../huxley");
const Discord = require("discord.js");
const fs = require("fs");

function UCFirst(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function randomIndex(length) {
	return Math.floor(Math.random() * length);
}

const toWeirdCase = (a) =>
	a.split` `.map(
		(s) =>
			[...s].map((e, i) => (i % 2 ? e.toLowerCase() : e.toUpperCase()))
				.join``
	).join` `;

bot.on("message", async (msg) => {
	if (msg.content.startsWith(prefix)) return;
	if (fs.existsSync(memory_file)) {
		const jsondata = fs.readFileSync(memory_file);
		memory = JSON.parse(jsondata);
		if (memory["global-mute"] === true) return;
		if (memory.mutes.includes(msg.author.id)) return;
	}
	if (
		msg.author.bot ||
		!msg.content ||
		msg.channel.id !== process.env.TARGET_CHANNEL
	) {
		return;
	}
	if (msg.content.toLowerCase().includes("nigga")) {
		msg.channel.send({
			files: ["https://c.tenor.com/SpPUh3E58AoAAAAC/guilty.gif"],
		});
		return;
	}
	if (msg.content.toLowerCase().includes("can i get mod")) {
		msg.channel.send({
			files: ["other_images/yes_no.png"],
		});
		return;
	}
	if (msg.content.toLowerCase().includes("shut ")) {
		if (Math.random() < 0.2) {
			msg.channel.send({files: ["images/silence.png"]});
		} else {
			if (Math.random() < 0.5) {
				msg.channel.send("no");
			} else {
				msg.channel.send({files: ["images/no_u.png"]});
			}
		}
		return;
	}
	if (
		msg.content.toLowerCase().includes("lmao") ||
		msg.content.toLowerCase().includes("haha") ||
		msg.content.toLowerCase().includes("funny") ||
		msg.content.toLowerCase().includes("xd") ||
		msg.content.toLowerCase().includes("lol")
	) {
		if (Math.random() < 0.1) {
			if (Math.random() < 0.5) {
				msg.channel.send({files: ["images/mad_funny.png"]});
			} else {
				msg.channel.send({files: ["images/not_funny.png"]});
			}
			return;
		}
	}
	if (msg.content.includes(`<@!${bot_id}>`)) {
		switch (Math.floor(Math.random() * 7)) {
			case 0:
				msg.channel.send({files: ["images/no_u.png"]});
				break;
			case 1:
				msg.channel.send(
					msg.content.replace(`<@!${bot_id}>`, `<@!${msg.author.id}>`)
				);
				break;
			case 2:
				msg.channel.send({files: ["images/no_crackhead.png"]});
				break;
			case 3:
				msg.channel.send({files: ["images/asked.png"]});
				break;
			case 4:
				msg.channel.send({
					files: ["https://c.tenor.com/SpPUh3E58AoAAAAC/guilty.gif"],
				});
				break;
			case 5:
				msg.channel.send("Ask your mom");
				break;
			case 6:
				msg.channel.send("no");
				break;
		}
		return;
	}
	if (Math.random() < 0.1 && msg.content.length > 3) {
		if (Math.random() < 0.5) {
			const filenames = fs.readdirSync("./images");
			msg.channel.send({
				files: [`images/${filenames[randomIndex(filenames.length)]}`],
			});
		} else {
			msg.channel.send(toWeirdCase(msg.content));
		}
		return;
	}
});
