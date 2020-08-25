module.exports = {
	name: 'rm',
	description: 'spam',
	execute(message, args) {
		for (var member of message.guild.members) {
            message.channel.send("Hello" + member);
        }
	},
};