const {bot, prefix, bot_id} = require("../huxley");
const Discord = require("discord.js");
const fs = require("fs");

bot.on("message", async (msg) => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;
	const args = msg.content.slice(prefix.length).trim().split(" ");
	const command = args.shift().toLowerCase();

	if (command === "rock-paper-scissors") {
		switch (args[0].toLowerCase()) {
			case "rock":
				msg.channel.send("Paper, you lose!");
				break;
			case "paper":
				msg.channel.send("Scissors, you lose!");
				break;
			case "scissors":
				msg.channel.send("Rock, you lose!");
				break;
			default:
				msg.channel.send(
					'I only recognize "rock", "paper" or "scissors". So i won!'
				);
				break;
		}
	}
});
