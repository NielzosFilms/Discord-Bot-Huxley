const {bot, prefix, bot_id} = require("../huxley");
const Discord = require("discord.js");
const fs = require("fs");

bot.on("message", async (msg) => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;
	const args = msg.content.slice(prefix.length).trim().split(" ");
	const command = args.shift().toLowerCase();
});
