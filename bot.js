ent === "!stats") {
	    let m = " ";
	    m += `Il y a actuellement  ${message.guild.channels.size} channels sur ce serveurs \n`;
	    m += `je suis en compagnie de ${message.guild.members.size} membres`;
	    m += `je suis présent dans ${client.guild.size} serveurs \n`;
        message.author.sendMessage(m).catch(console.log);
    
    }

    if (command === "kick") {
        let modRole = message.guild.roles.find("name", "🍬Choko fonda 🍬");
        if(!message.member.roles.has(modRole.id)) {
            return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
        }
        if(message.mentions.users.size === 0) return message.reply("Merci de mentionner l'utilisateur à expulsé.").catch(console.error);
        let kickMember = message.guild.member(message.mentions.users.first());
        if (!kickMember) return message.reply("Cet utilisateur est introuvable ou impossible à expulser.")
        if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) return message.reply("Je n'ai pas la permission KICK_MEMBERS pour faire ceci.").catch(console.error);
        kickMember.kick().then(member => {
            message.reply(`${member.user.username} à été expulsé.`).catch(console.error);
            message.guild.channels.find("name", "👋bonjour-aurevoir").send(`**${member.user.username} a était expulsé du serveur par **${message.author.username}**`);
        }).catch(console.error);
            
    }

    if (command === "ban") {
        let modRole = message.guild.roles.find("name", "🍬Choko fonda 🍬");
        if(!message.member.roles.has(modRole.id)) return message.reply("Tu n'as pas la permission de faire cette commande.").catch(console.error);
        const member = message.mentions.members.first();
        if (!member) return message.reply("Merci de mentionner l'utilisateur à bannir.");
        member.ban().then(member => {
            message.reply(`${member.user.username} a été banni.`).catch(console.error);
            message.guild.channel.find("name", "👋bonjour-aurevoir").send(`**${member.user.username}** a été banni du serveur par **${message.author.username}**`);
        }).catch(console.error);
    }
});

Client.on("guildMemberAdd", member => {
    member.guild.channels.find("name", "👋bonjour-aurevoir").send(`Bienvenue ${member}`)
})

Client.on("guildMemberRemove", member => {
    member.guild.channels.find("name", "👋bonjour-aurevoir").send(`${member} vien de quitter`)
})

Client.on('guildMemberAdd', member => {
    var role = member.guild.roles.find('name', '🍦 Membres');
    member.addRole(role)
})

Client.login("process.env.NDQ1OTgyMDkwMzI1MTMxMjY3.Dd328w.gLNXQi66eyy0i58yuWHMjPvX6LU") // Token
