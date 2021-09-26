const {bot, prefix} = require("../huxley");
const Discord = require("discord.js");
const path = require("path");

const logoUrl = "https://avatars.githubusercontent.com/u/60883770?v=4";
const personImage =
	"https://media-exp1.licdn.com/dms/image/C5603AQGhvyUJGZ0AbQ/profile-displayphoto-shrink_200_200/0/1584436857242?e=1628121600&v=beta&t=OHukBb1sz7BFQxH_E0C9hn1hG7pOtMdVz_NRVnPxphY";

bot.on("message", async (msg) => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;
	const args = msg.content.slice(prefix.length).trim().split(" ");
	const command = args.shift().toLowerCase();

	if (command === "ping") {
		msg.channel.send(`🏓 (ms: ${bot.ws.ping})`);
	}

	if (command === "author") {
		msg.channel.send(
			new Discord.MessageEmbed()
				.setColor("#21c4ff")
				.setTitle("NielzosFilms")
				.setDescription(
					"Software developer\nJr. Application Engineer at [Feka ICT](https://www.feka.nl/) & Student Software Developer at [Bit. Academy](https://www.bit-academy.nl/)"
				)
				.addFields(
					{
						name: "Ideas",
						value: "<@!418713262993965057>",
					},
					{
						name: "Github",
						value: "[NielzosFilms](https://github.com/NielzosFilms)",
					},
					{
						name: "Website",
						value: "[NielzosFilms](https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fnielzosfilms%2Enetlify%2Eapp%2F&urlhash=__GP&trk=public_profile-settings_website)",
					},
					{
						name: "Youtube",
						value: "[NielzosFilms](https://www.linkedin.com/redir/redirect?url=https%3A%2F%2Fwww%2Eyoutube%2Ecom%2Fchannel%2FUC_jDDlAiXW5tS0agiuwEmng&urlhash=TfOD&trk=public_profile-settings_website)",
					},
					{
						name: "LinkedIn",
						value: "[Niels Hazelaar](https://www.linkedin.com/in/niels-hazelaar-24790b146/)",
					},
					{name: "\u200B", value: "\u200B"}
				)
				.setThumbnail(personImage)
				.setImage(logoUrl)
				.setTimestamp()
		);
	}

	if (command === "help") {
		msg.channel.send(
			new Discord.MessageEmbed()
				.setColor("#21c4ff")
				.setTitle("Help - Commands")
				.setAuthor(
					"NielzosFilms",
					logoUrl,
					"https://github.com/NielzosFilms"
				)
				.addFields(
					{
						name: `${prefix}help`,
						value: "Show all commands",
					},
					{
						name: `${prefix}author`,
						value: "Show the author of this bot",
					},
					{
						name: `${prefix}ping`,
						value: "Ping the bot (shows delay in miliseconds)",
					},
					{
						name: `${prefix}rock-paper-scissors <rock,paper,scissors>`,
						value: "Play rock paper scissors with Huxley",
					}
				)
		);
	}
});
