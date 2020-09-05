require('dotenv').config();
const { CommandoClient } = require('discord.js-commando');
const path = require('path');

const client = new CommandoClient({
    commandPrefix: 's?',
    owner: '573909482619273255',
    invite: 'https://discord.gg/bRCvFy9',
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['user', 'User commands.'],
        ['admin', 'Admin commands.'],
        ['developer', 'Developer commands.']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.once("ready", () => {
    console.log(`${client.user.username} logged in!`)
    client.user.setActivity(`with ${client.users.size} other users!`);
});

client.on('error', console.error);
client.login();