module.exports = {
	name: 'ban',
	description: 'ban',
	execute(message) {
		const taggedUser = message.mentions.users.first();
		message.guild.ban(taggedUser);
	},
};

/*
Add this to the main script
else if (message.content.startsWith (`${prefix}example`)) {
			client.commands.get('example').execute(message, args);
        }
*/