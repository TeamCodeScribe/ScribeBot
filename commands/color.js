module.exports = {
	name: 'role',
	description: 'role',
	execute(message, args) {
		// type in any command thing you want here

		const debug = parseInt(args[0].split(','));

		function hexRole(hexCode) {
			const roleName = `customColor${hexCode}`;
			message.guild.createRole({
				name: roleName,
				color: hexCode,
				position: 100,
				hoist: false,
				permissions: 0,
				mentionable: false,
			});

			message.reply('Added role' + hexRole + '::' + args[0]);
			message.reply(roleName);
			message.member.addRole(roleName + hexCode);
		}
		hexRole(debug);
	},
};