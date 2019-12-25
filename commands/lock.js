module.exports = {
    name: 'lock',
    description: 'lock',
    execute(message, args) {
        // type in any command thing you want here
        currentChannel = message.channel.id;
        guildChannel = message.channel.GuildChannel.CategoryChannel;
        roleCalled = args.join(" ");

        message.reply(roleCalled);

        if (message.member.roles.find(roles => roles.name == roleCalled)) {
            message.reply("Role Found!");
        } else {
            message.reply("Role not found" + roleCalled);
        }
    },
};