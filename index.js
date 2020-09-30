const Discord = require('discord.js');
const config = require("./config");
const client = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] });

client.once('ready', () => {
	console.log('ready!');
});

client.on('messageReactionAdd', async (reaction, user) => {
	if (reaction.emoji.id === config.emojiID) {
		if (reaction.message.partial) await reaction.message.fetch();
		reaction.remove();
		if (reaction.message.content.length > 0) {
			const reportEmbed = new Discord.MessageEmbed()
			.setColor(`0x${config.embedColor}`)
			.setTitle('Report :triangular_flag_on_post:')
			.addFields(
				{name: 'Message', value: reaction.message.content},
				{name: 'Author', value: reaction.message.author, inline: true},
				{name: 'Channel', value: `#${reaction.message.channel.name}`, inline: true},
				{name: 'Reported By', value: user, inline: true},
				{name: 'Link', value: `[Go to Message](https://discordapp.com/channels/${config.guildID}/${reaction.message.channel.id}/${reaction.message.id}) :arrow_right:`},
				)
			.setTimestamp()
			.setFooter('React with 👍 to acknowldge')
			client.channels.cache.get(config.channelID).send(reportEmbed);
			user.send(config.message);
		} else {
			const reportEmbed = new Discord.MessageEmbed()
			.setColor(`0x${config.embedColor}`)
			.setTitle('Report :triangular_flag_on_post:')
			.addFields(
				{name: 'Message', value: `https://discordapp.com/channels/${config.guildID}/${reaction.message.channel.id}/${reaction.message.id}`},
				{name: 'Author', value: reaction.message.author, inline: true},
				{name: 'Channel', value: `#${reaction.message.channel.name}`, inline: true},
				{name: 'Reported By', value: user, inline: true},
				{name: 'Link', value: `[Go to Message](https://discordapp.com/channels/${config.guildID}/${reaction.message.channel.id}/${reaction.message.id}) :arrow_right:`},
				)
			.setTimestamp()
			.setFooter('React with 👍 to acknowldge')
			client.channels.cache.get(config.channelID).send(reportEmbed);
			user.send(config.message);
		}
		return;
	}
});

client.login(config.token);