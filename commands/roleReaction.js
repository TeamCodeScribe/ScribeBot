module.exports = {
	name: "roleReaction",
	description: "roleReaction",
	execute(message, args, embed, client) {
		//The Variables ughhh
		const windowsE = client.emojis.find(emoji => emoji.name === "Windows");
		const linuxE = client.emojis.find(emoji => emoji.name === "Linux");
		const macosE = client.emojis.find(emoji => emoji.name === "macOS");
		const iosE = client.emojis.find(emoji => emoji.name === "iOS");
		const androidE = client.emojis.find(emoji => emoji.name === "Android");
		const swiftE = client.emojis.find(emoji => emoji.name === "Swift");
		const rustE = client.emojis.find(emoji => emoji.name === "Rust");
		const pythonE = client.emojis.find(emoji => emoji.name === "Python");
		const mustacheE = client.emojis.find(emoji => emoji.name === "Mustache");
		const luaE = client.emojis.find(emoji => emoji.name === "Lua");
		const kotlinE = client.emojis.find(emoji => emoji.name === "Kotlin");
		const javascriptE = client.emojis.find(
			emoji => emoji.name === "JavaScript"
		);
		const javaE = client.emojis.find(emoji => emoji.name === "Java");
		const htmlE = client.emojis.find(emoji => emoji.name === "HTMLCSS");
		const goE = client.emojis.find(emoji => emoji.name === "Go");
		const cssE = client.emojis.find(emoji => emoji.name === "CSS");
		const csharpE = client.emojis.find(emoji => emoji.name === "Csharp");
		const cppE = client.emojis.find(emoji => emoji.name === "Cpp");
		const cE = client.emojis.find(emoji => emoji.name === "Clang");
		const bashE = client.emojis.find(emoji => emoji.name === "Shell");
		const assemblyE = client.emojis.find(emoji => emoji.name === "Assembly");

		const windowsR = message.guild.roles.get("666094575013855281");
		const pythonR = message.guild.roles.get("666094478477492231");
		const javaE = message.guild.roles.get("666094575013855281");
		const windowsR = message.guild.roles.get("666094575013855281");
		const windowsR = message.guild.roles.get("666094575013855281");
		const windowsR = message.guild.roles.get("666094575013855281");
		const windowsR = message.guild.roles.get("666094575013855281");
		const windowsR = message.guild.roles.get("666094575013855281");
		const windowsR = message.guild.roles.get("666094575013855281");
		const windowsR = message.guild.roles.get("666094575013855281");
		const windowsR = message.guild.roles.get("666094575013855281");
		const windowsR = message.guild.roles.get("666094575013855281");
		const windowsR = message.guild.roles.get("666094575013855281");
		const windowsR = message.guild.roles.get("666094575013855281");
		const windowsR = message.guild.roles.get("666094575013855281");
		const windowsR = message.guild.roles.get("666094575013855281");
		const windowsR = message.guild.roles.get("666094575013855281");

		/*
                Languages: Python, Java, JavaScript, C#, C++, C, HTML/CSS, Kotlin, Swift, Rust, PHP, Lua, Bash
                */

		//const embed = new RichEmbed();
		embed.setTitle("Language Roles");
		embed.setColor("BLUE");
		embed.setDescription(
			`${swiftE} - Swift\n` +
				`${rustE} - Rust\n` +
				`${pythonE} - Python\n` +
				`${luaE} - Lua\n` +
				`${kotlinE} - Kotlin\n` +
				`${javascriptE} - JavaScript\n` +
				`${javaE} - Java\n` +
				`${htmlE} - HTML\n` +
				`${goE} - Go\n` +
				`${cssE} - CSS\n` +
				`${csharpE} - C#\n` +
				`${cppE} - C++\n` +
				`${cE} - C\n` +
				`${bashE} - Shell\n` +
				`${assemblyE} - Assembly\n`
		);
		//message.channel.send(embed);

		message.channel
			.send({
				embed: embed
			})
			.then(embedMessage => {
				embedMessage.react(swiftE);
				embedMessage.react(rustE);
				embedMessage.react(pythonE);
				embedMessage.react(luaE);
				embedMessage.react(kotlinE);
				embedMessage.react(javascriptE);
				embedMessage.react(javaE);
				embedMessage.react(htmlE);
				embedMessage.react(goE);
				embedMessage.react(cssE);
				embedMessage.react(csharpE);
				embedMessage.react(cppE);
				embedMessage.react(cE);
				embedMessage.react(bashE);
				embedMessage.react(assemblyE);
			});

		client.on("messageReactionAdd", (reaction, user) => {
			//  var roleName = reaction.emoji.name;
			var role = reaction.message.guild.roles.find(
				role => role.name.toLowerCase() === roleName.toLowerCase()
			);
			var member = reaction.message.guild.members.find(
				member => member.id === user.id
			);

			if (member.roles.has(role.name)) {
				member
					.removeRole(role.id)
					.then(member => {
						message.channel.send("Removed the role " + role);
					})
					.catch(err => console.log);
			} else {
				member
					.addRole(role.id)
					.then(member => {
						console.log("Added " + role);
					})
					.catch(err => console.error);
			}
		});

		// const embedLang = message.embeds.find(msg => msg.title === "Language Roles");
		// embedLang.message.react(swift)
		//     .then(reaction => console.log("reacted with" + reaction.emoji.name))
		//     .catch(err => console.error);

		// if (message.author.bot) {
		//     if (message.embeds) {
		//         const embedLang = message.embeds.find(msg => msg.title === 'Language Roles');

		//         if (embedLang) {
		//             let swift = client.emojis.find(emoji => emoji.name === "swift");
		//             embedLang.message.react(swift)
		//                 .then(reaction => console.log("reacted with" + reaction.emoji.name))
		//                 .catch(err => console.error);
		//         }
		//     }
		//     return;
		// }
	}
};
