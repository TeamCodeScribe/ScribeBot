module.exports = {
	name: 'example',
	description: 'example',
	execute(message, args) {
		// type in any command thing you want here
	},
};

/*
Add this to the main script
else if (message.content.startsWith (`${prefix}example`)) {
			client.commands.get('example').execute(message, args);
        }
*/