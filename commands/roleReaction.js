module.exports = {
    name: "roleReaction",
    description: "roleReaction",
    execute(message, args, embed, client) {
        //The Variables ughhh
        let windows = client.emojis.find(emoji => emoji.name === "Windows");
        let linux = client.emojis.find(emoji => emoji.name === "Linux");
        let macos = client.emojis.find(emoji => emoji.name === "macOS");
        let ios = client.emojis.find(emoji => emoji.name === "iOS");
        let android = client.emojis.find(emoji => emoji.name === "Android");
        let swift = client.emojis.find(emoji => emoji.name === "Swift");
        let rust = client.emojis.find(emoji => emoji.name === "Rust");
        let python = client.emojis.find(emoji => emoji.name === "Python");
        let mustache = client.emojis.find(emoji => emoji.name === "Mustache");
        let lua = client.emojis.find(emoji => emoji.name === "Lua");
        let kotlin = client.emojis.find(emoji => emoji.name === "Kotlin");
        let javascript = client.emojis.find(emoji => emoji.name === "JavaScript");
        let java = client.emojis.find(emoji => emoji.name === "Java");
        let html = client.emojis.find(emoji => emoji.name === "HTMLCSS");
        let go = client.emojis.find(emoji => emoji.name === "Go");
        let css = client.emojis.find(emoji => emoji.name === "CSS");
        let csharp = client.emojis.find(emoji => emoji.name === "Csharp");
        let cpp = client.emojis.find(emoji => emoji.name === "Cpp");
        let c = client.emojis.find(emoji => emoji.name === "Clang");
        let bash = client.emojis.find(emoji => emoji.name === "Shell");
        let assembly = client.emojis.find(emoji => emoji.name === "Assembly");

        let bug = message.guild.roles.get("666094602301997056");
        // 666118946595799058
        console.log(bug.name);
        /*
                Languages: Python, Java, JavaScript, C#, C++, C, HTML/CSS, Kotlin, Swift, Rust, PHP, Lua, Bash
                */

        //const embed = new RichEmbed();
        embed.setTitle("Language Roles");
        embed.setColor("BLUE");
        embed.setDescription(
            `${swift} - Swift\n` +
            `${rust} - Rust\n` +
            `${python} - Python\n` +
            `${lua} - Lua\n` +
            `${kotlin} - Kotlin\n` +
            `${javascript} - JavaScript\n` +
            `${java} - Java\n` +
            `${html} - HTML\n` +
            `${go} - Go\n` +
            `${css} - CSS\n` +
            `${csharp} - C#\n` +
            `${cpp} - C++\n` +
            `${c} - C\n` +
            `${bash} - Shell\n` +
            `${assembly} - Assembly\n`
        );
        //message.channel.send(embed);

        message.channel.send({
            embed: embed
        }).then(embedMessage => {
            embedMessage.react(swift);
            embedMessage.react(rust);
            embedMessage.react(python);
            embedMessage.react(lua);
            embedMessage.react(kotlin);
            embedMessage.react(javascript);
            embedMessage.react(java);
            embedMessage.react(html);
            embedMessage.react(go);
            embedMessage.react(css);
            embedMessage.react(csharp);
            embedMessage.react(cpp);
            embedMessage.react(c);
            embedMessage.react(bash);
            embedMessage.react(assembly);

        });

        client.on('messageReactionAdd', (reaction, user) => {
            var roleName = reaction.emoji.name;
            var role = reaction.message.guild.roles.find(role => role.name.toLowerCase() === roleName.toLowerCase());
            var member = reaction.message.guild.members.find(member => member.id === user.id);

            if (member.roles.has(role.id)) {
                console.log(role.id);
                //console.log(roleName);
                member.removeRole(role.id).then(member => {
                    message.channel.send("Removed the role " + role);
                }).catch(err => console.log);
            } else {
                member.addRole(role.id).then(member => {
                    console.log("Added " + role)
                }).catch(err => console.error);
            }
        })

        // const embedLang = message.embeds.find(msg => msg.title === "Language Roles");
        // embedLang.message.react(swift)
        //     .then(reaction => console.log("reacted with" + reaction.emoji.name))
        //     .catch(err => console.error);

        // if (message.author.bot) {
        //     if (message.embeds) {
        //         const embedLang = message.embeds.find(msg => msg.title === 'Language Roles');

        //         if (embedLang) {
        //             let swift = client.emojis.find(emoji => emoji.name === "swift");
        //             embedLang.message.react(swift)
        //                 .then(reaction => console.log("reacted with" + reaction.emoji.name))
        //                 .catch(err => console.error);
        //         }
        //     }
        //     return;
        // }
    }
};