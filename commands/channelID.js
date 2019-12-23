module.exports = {
	name: 'channelID',
	description: 'channelID',
	execute(message) {
		message.channel.send(`${message.guild.id}`);
	},
};