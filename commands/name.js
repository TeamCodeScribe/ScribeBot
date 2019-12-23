module.exports = {
	name: 'name',
	description: 'name',
	execute(message, args) {
        // type in any command thing you want here
        const human = message.guild.roles.get("633078301216210945");
        let username = args[0] + " " + args[1];

        if(message.member.roles.has("633078301216210945")) {
            message.reply("You already are verified" + username);

        }

        else {
            message.member.setNickname(username);
            message.member.addRole("633078301216210945");
        }
	},
};