module.exports = {
    name: "roleReaction",
    description: "roleReaction",
    execute(message, args, embed, client) {


        //The Variables ughhh
        let windowsE = client.emojis.find(emoji => emoji.name === "Windows");
        let linuxE = client.emojis.find(emoji => emoji.name === "Linux");
        let macosE = client.emojis.find(emoji => emoji.name === "macOS");
        let iosE = client.emojis.find(emoji => emoji.name === "iOS");
        let androidE = client.emojis.find(emoji => emoji.name === "Android");
        let swiftE = client.emojis.find(emoji => emoji.name === "Swift");
        let rustE = client.emojis.find(emoji => emoji.name === "Rust");
        let pythonE = client.emojis.find(emoji => emoji.name === "Python");
        let mustacheE = client.emojis.find(emoji => emoji.name === "Mustache");
        let luaE = client.emojis.find(emoji => emoji.name === "Lua");
        let kotlinE = client.emojis.find(emoji => emoji.name === "Kotlin");
        let javascriptE = client.emojis.find(emoji => emoji.name === "JavaScript");
        let javaE = client.emojis.find(emoji => emoji.name === "Java");
        let htmlE = client.emojis.find(emoji => emoji.name === "HTMLCSS");
        let goE = client.emojis.find(emoji => emoji.name === "Go");
        let cssE = client.emojis.find(emoji => emoji.name === "CSS");
        let csharpE = client.emojis.find(emoji => emoji.name === "Csharp");
        let cppE = client.emojis.find(emoji => emoji.name === "Cpp");
        let cE = client.emojis.find(emoji => emoji.name === "Clang");
        let bashE = client.emojis.find(emoji => emoji.name === "Shell");
        let assemblyE = client.emojis.find(emoji => emoji.name === "Assembly");

        let windowsR = message.guild.roles.get("666094575013855281");
        let swiftR = message.guild.roles.get("666094597960761345");
        /*
                Languages: Python, Java, JavaScript, C#, C++, C, HTML/CSS, Kotlin, Swift, Rust, PHP, Lua, Bash
                */

        //const embed = new RichEmbed();
        embed.setTitle("Language Roles");
        embed.setColor("BLUE");
        embed.setDescription(
            `${swiftE} - Swift\n` +
            `${rustE} - Rust\n` +
            `${pythonE} - Python\n` +
            `${luaE} - Lua\n` +
            `${kotlinE} - Kotlin\n` +
            `${javascriptE} - JavaScript\n` +
            `${javaE} - Java\n` +
            `${htmlE} - HTML\n` +
            `${goE} - Go\n` +
            `${cssE} - CSS\n` +
            `${csharpE} - C#\n` +
            `${cppE} - C++\n` +
            `${cE} - C\n` +
            `${bashE} - Shell\n` +
            `${assemblyE} - Assembly\n`
        );
        //message.channel.send(embed);
        const filter = (reaction, user) => [swiftE, rustE, pythonE, luaE, kotlinE, javascriptE, javaE, htmlE, goE, cssE, csharpE, cppE, cE, bashE, assemblyE].includes(reaction.emoji.id);

        message.channel.send({
            embed: embed
        }).then(async msg => {
            await msg.react(swiftE);
            await msg.react(rustE);
            await msg.react(pythonE);
            await msg.react(luaE);
            await msg.react(kotlinE);
            await msg.react(javascriptE);
            await msg.react(javaE);
            await msg.react(htmlE);
            await msg.react(goE);
            await msg.react(cssE);
            await msg.react(swiftE);
            await msg.react(swiftE);
            await msg.react(swiftE);
            await msg.react(swiftE);

            msg.awaitReaction(filter, {
                max: 1,
                time: 3000000,
                errors: ['time']
            }).then(collected => {
                const reaction = collected.first;

                switch (reaction.emoji.id) {
                    case swiftE:
                        if (message.member.roles.has(swiftE)) {
                            console.log("You already have that role!" + swiftE.name)
                        }
                        message.member.addRole(swiftE).catch(err => {
                            console.log(error);
                            return console.log("Unable to add the role: " + swiftE.name);
                        })
                        console.log("Added the role: " + swiftE.name);
                        break;
                    case rustE:
                        if (message.member.roles.has(swiftE)) {
                            console.log("You already have that role!" + swiftE.name)
                        }
                        message.member.addRole(swiftE).catch(err => {
                            console.log(error);
                            return console.log("Unable to add the role: " + swiftE.name);
                        })
                        console.log("Added the role: " + swiftE.name);
                        break;
                    case swiftE:
                        if (message.member.roles.has(swiftE)) {
                            console.log("You already have that role!" + swiftE.name)
                        }
                        message.member.addRole(swiftE).catch(err => {
                            console.log(error);
                            return console.log("Unable to add the role: " + swiftE.name);
                        })
                        console.log("Added the role: " + swiftE.name);
                        break;
                    case swiftE:
                        if (message.member.roles.has(swiftE)) {
                            console.log("You already have that role!" + swiftE.name)
                        }
                        message.member.addRole(swiftE).catch(err => {
                            console.log(error);
                            return console.log("Unable to add the role: " + swiftE.name);
                        })
                        console.log("Added the role: " + swiftE.name);
                        break;
                    case swiftE:
                        if (message.member.roles.has(swiftE)) {
                            console.log("You already have that role!" + swiftE.name)
                        }
                        message.member.addRole(swiftE).catch(err => {
                            console.log(error);
                            return console.log("Unable to add the role: " + swiftE.name);
                        })
                        console.log("Added the role: " + swiftE.name);
                        break;
                    case swiftE:
                        if (message.member.roles.has(swiftE)) {
                            console.log("You already have that role!" + swiftE.name)
                        }
                        message.member.addRole(swiftE).catch(err => {
                            console.log(error);
                            return console.log("Unable to add the role: " + swiftE.name);
                        })
                        console.log("Added the role: " + swiftE.name);
                        break;
                    case swiftE:
                        if (message.member.roles.has(swiftE)) {
                            console.log("You already have that role!" + swiftE.name)
                        }
                        message.member.addRole(swiftE).catch(err => {
                            console.log(error);
                            return console.log("Unable to add the role: " + swiftE.name);
                        })
                        console.log("Added the role: " + swiftE.name);
                        break;
                    case swiftE:
                        if (message.member.roles.has(swiftE)) {
                            console.log("You already have that role!" + swiftE.name)
                        }
                        message.member.addRole(swiftE).catch(err => {
                            console.log(error);
                            return console.log("Unable to add the role: " + swiftE.name);
                        })
                        console.log("Added the role: " + swiftE.name);
                        break;
                    case swiftE:
                        if (message.member.roles.has(swiftE)) {
                            console.log("You already have that role!" + swiftE.name)
                        }
                        message.member.addRole(swiftE).catch(err => {
                            console.log(error);
                            return console.log("Unable to add the role: " + swiftE.name);
                        })
                        console.log("Added the role: " + swiftE.name);
                        break;
                    case swiftE:
                        if (message.member.roles.has(swiftE)) {
                            console.log("You already have that role!" + swiftE.name)
                        }
                        message.member.addRole(swiftE).catch(err => {
                            console.log(error);
                            return console.log("Unable to add the role: " + swiftE.name);
                        })
                        console.log("Added the role: " + swiftE.name);
                        break;
                    case swiftE:
                        if (message.member.roles.has(swiftE)) {
                            console.log("You already have that role!" + swiftE.name)
                        }
                        message.member.addRole(swiftE).catch(err => {
                            console.log(error);
                            return console.log("Unable to add the role: " + swiftE.name);
                        })
                        console.log("Added the role: " + swiftE.name);
                        break;
                    case swiftE:
                        if (message.member.roles.has(swiftE)) {
                            console.log("You already have that role!" + swiftE.name)
                        }
                        message.member.addRole(swiftE).catch(err => {
                            console.log(error);
                            return console.log("Unable to add the role: " + swiftE.name);
                        })
                        console.log("Added the role: " + swiftE.name);
                        break;
                    case swiftE:
                        if (message.member.roles.has(swiftE)) {
                            console.log("You already have that role!" + swiftE.name)
                        }
                        message.member.addRole(swiftE).catch(err => {
                            console.log(error);
                            return console.log("Unable to add the role: " + swiftE.name);
                        })
                        console.log("Added the role: " + swiftE.name);
                        break;
                    case swiftE:
                        if (message.member.roles.has(swiftE)) {
                            console.log("You already have that role!" + swiftE.name)
                        }
                        message.member.addRole(swiftE).catch(err => {
                            console.log(error);
                            return console.log("Unable to add the role: " + swiftE.name);
                        })
                        console.log("Added the role: " + swiftE.name);
                        break;

                }
            }).catch(collected => {
                return (message.reply("Unable to add you to this role."));
            })
        });



        // message.react(swiftE).then(() => message.react('👎'));

        // const filter = (reaction, user) => {
        //     return [swiftE, '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
        // };

        // message.awaitReactions(filter, {
        //         max: Infinity,
        //         time: null,
        //         errors: ['time']
        //     })
        //     .then(collected => {
        //         const reaction = collected.first();

        //         if (reaction.emoji.name === swiftE) {
        //             message.reply('you reacted with a thumbs up.');
        //             message.member.addRole(swiftR)
        //         } else {
        //             message.reply('you reacted with a thumbs down.');
        //         }
        //     })
        //     .catch(collected => {
        //         message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
        //     });

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

        // .then(embedMessage => {
        //             embedMessage.react(swiftE);
        //             embedMessage.react(rustE);
        //             embedMessage.react(pythonE);
        //             embedMessage.react(luaE);
        //             embedMessage.react(kotlinE);
        //             embedMessage.react(javascriptE);
        //             embedMessage.react(javaE);
        //             embedMessage.react(htmlE);
        //             embedMessage.react(goE);
        //             embedMessage.react(cssE);
        //             embedMessage.react(csharpE);
        //             embedMessage.react(cppE);
        //             embedMessage.react(cE);
        //             embedMessage.react(bashE);
        //             embedMessage.react(assemblyE);
    }
};