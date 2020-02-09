module.exports = {
	name: 'help',
	description: 'help',
	execute(message, args) {
		message.channel.send("Commands: ban, channelID, color, exampleCommand, github, help, invite, lock, name, parse, ping, prune, roleReaction, serverInfo, userInfo, welcome");
	},
};