module.exports = {
    name: "roleReaction",
    description: "roleReaction",
    execute(message, args, embed, client) {
        //The Variables ughhh
        let windows = client.emojis.find(emoji => emoji.name === "windows");
        let linux = client.emojis.find(emoji => emoji.name === "linux");
        let macos = client.emojis.find(emoji => emoji.name === "macos");
        let ios = client.emojis.find(emoji => emoji.name === "ios");
        let android = client.emojis.find(emoji => emoji.name === "android");
        let swift = client.emojis.find(emoji => emoji.name === "swift");
        let rust = client.emojis.find(emoji => emoji.name === "rust");
        let python = client.emojis.find(emoji => emoji.name === "python");
        let mustache = client.emojis.find(emoji => emoji.name === "mustache");
        let lua = client.emojis.find(emoji => emoji.name === "lua");
        let kotlin = client.emojis.find(emoji => emoji.name === "kotlin");
        let javascript = client.emojis.find(emoji => emoji.name === "javascript");
        let java = client.emojis.find(emoji => emoji.name === "java");
        let html = client.emojis.find(emoji => emoji.name === "html");
        let go = client.emojis.find(emoji => emoji.name === "go");
        let css = client.emojis.find(emoji => emoji.name === "css");
        let csharp = client.emojis.find(emoji => emoji.name === "csharp");
        let cpp = client.emojis.find(emoji => emoji.name === "cpp");
        let c = client.emojis.find(emoji => emoji.name === "clang");
        let bash = client.emojis.find(emoji => emoji.name === "bash");
        let assembly = client.emojis.find(emoji => emoji.name === "assembly");

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
            `${bash} - $hell\n` +
            `${assembly} - Assembly\n`
        );
        message.channel.send(embed);

        const embedLang = message.embeds.find(msg => msg.title === "Language Roles");
        embedLang.message.react(swift)
            .then(reaction => console.log("reacted with" + reaction.emoji.name))
            .catch(err => console.error);

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