const { Command } = require('discord.js-commando');

module.exports = class PingCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'ping',
            group: 'user',
            memberName: 'ping',
            description: 'Play an intense game of ping pong!',
        });
    }

    async run(message) {
        return await message.channel.send('Pong! 🏓');
    }
};