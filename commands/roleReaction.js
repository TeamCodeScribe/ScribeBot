module.exports = {
    name: "roleReaction",
    description: "roleReaction",
    execute(message, args, embed) {
        /*
            Languages: Python, Java, JavaScript, C#, C++, C, HTML/CSS, Kotlin, Swift, Rust, PHP, Lua, Bash
            */

        //const embed = new RichEmbed();
        embed.setTitle("Language Roles");
        embed.setColor("BLUE");
        embed.setDescription("<:html:666475825197088789> - HTML\n" + "<:windows:666775450005143564> - Windows\n") + "<:swift:666733361263411251> - Swift\n" + "<:rust:666775384272011274> - Rust\n";
        message.reply(embed);
    }
};