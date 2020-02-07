const Discord = require("discord.js");
const client = new Discord.Client();

const {
	RichEmbed
} = require("discord.js");

const {
	prefix,
	token
} = require("../../config.json");

const fs = require("fs");

client.commands = new Discord.Collection();

const commandFiles = fs
	.readdirSync("./commands")
	.filter(file => file.endsWith(".js"));

const unirest = require("unirest");

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	// set a new item in the Collection
	// with the key as the command name and the value as the exported module
	client.commands.set(command.name, command);
}

console.log("Your current discord.js version is :" + Discord.version);

client.on("message", message => {
	if (!message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();
	const embed = new RichEmbed();
	const taggedUser = message.mentions.users.first();



	if (message == `${prefix}ping`) {
		client.commands.get("ping").execute(message, args);
	} else if (message == `${prefix}github`) {
		client.commands.get("github").execute(message, args);
	} else if (message == `${prefix}invite`) {
		client.commands.get("invite").execute(message, args);
	} else if (message == `${prefix}channelID`) {
		client.commands.get("channelID").execute(message, args);
	} else if (message == `${prefix}userInfo`) {
		client.commands.get("userInfo").execute(message, args);
	} else if (message == `${prefix}serverInfo`) {
		client.commands.get("serverInfo").execute(message, args);
	} else if (command === `${prefix}help`) {
		client.commands.get("help").execute(message, args, prefix);
	} else if (message == `${prefix}role`) {
		// client.commands.get("roleReaction").execute(message, args, embed, client);
		message.member.addRole("668552483626549259");
		message.member.addRole("633078301216210945");

	}

	if (message.member.roles.has("668552483626549259")) {
		// Admin only commands
		if (message.content.startsWith(`${prefix}clear`)) {
			client.commands.get("clear").execute(message, args);
		} else if (message.content.startsWith(`${prefix}ban `)) {
			client.commands.get("ban").execute(message, args);
		} else if (message.content.startsWith(`${prefix}lock `)) {
			client.commands.get("lock").execute(message, args);
		}
	}
	if (message.channel.id === "635650467279667200") {
		// The command to give the person their nickname and human role
		if (message.content.startsWith(`${prefix}name `)) {
			client.commands.get("name").execute(message, args, message.member);
		}
	}

	if (message.channel.id === "658389046833184779") {
		// Hackathon-watch
		if (message.content.startsWith(`${prefix}hackathon`)) {
			client.commands.get("parse").execute(message, args, unirest, fs);
		}
	}

	//Role Reaction Thingy
	// if (message.author.bot) {
	// 	if (message.embeds) {
	// 		const embedLang = message.embeds.find(msg => msg.title === 'Language Roles');

	// 		if (embedLang) {
	// 			let swift = client.emojis.find(emoji => emoji.name === "swift");
	// 			embedLang.message.react(swift)
	// 				.then(reaction => console.log("reacted with" + reaction.emoji.name))
	// 				.catch(err => console.error);
	// 		}
	// 	}
	// 	return;
	// }
});

client.on("guildMemberAdd", member => {
	member.guild.channels
		.get("635650467279667200")
		.send(
			`Hello, ${member} use the >name command followed by your first and last name to be successfully authenticated. Please remember to read #info`
		);
});

client.login(token);

/*
        else if (message.content === `${prefix}serverID`) {
            message.channel.send(`${message.guild.id}`);
        }
*/