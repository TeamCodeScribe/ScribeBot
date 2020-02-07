module.exports = {
	name: 'name',
	description: 'name',
	execute(message, args) {
        // type in any command thing you want here
        const human = message.guild.roles.get("668552483626549259");
        let username = args.join(" ");

        if(message.member.roles.has("668552483626549259")) {
            message.reply("You already are verified" + username).catch(console.error(console.log("yo 0")));
        }

        // if (args[0] == "clear") {
        //     message.member.removeRole("633078301216210945");
        // }

        else {
                message.member.setNickname(username);
                message.member.addRole("668552483626549259");
        }
	},
};