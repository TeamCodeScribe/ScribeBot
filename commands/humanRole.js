module.exports = {
	name: 'Name',
	description: 'Name',
	execute(message, args, member) {
		// const Name = message.content.substr(prefix.length);

		if(message.channel.name === '634989371682062356') {
			if(member.roles.find(roles => roles.name === 'Human')) {
				message.reply('You already have that role!');
			}

			else if(!member.roles.find(roles => roles.name === 'Human')) {
				member.addRole('Human');
				// member.setNickname(Name);
				message.reply('Set Nick!');
			}
		}
	},
};