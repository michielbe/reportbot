# Report Bot

Discord bot that allows users to report messages by adding a reaction

## Installation

- Create a discord bot here: https://discord.com/developers/applications
- `git clone https://github.com/DaziePants/reportbot.git`
- `cd reportbot`
- `npm install`
- Fill in the `config.js` file.

**SUGGESTED WAY TO RUN**
- Install PM2: https://pm2.keymetrics.io/docs/usage/quick-start/
- `npm install pm2@latest -g`
- `pm2 start ecosystem.config.js`
- `pm2 status`, and confirm `ReportBot` is running
* If not using pm2: `node .`

## How it works

1. React to any message you want to report with the chosen report emoji.
2. ReportBot will instantly remove the reaction so your report is relatively anonymous.
3. ReportBot will send a message to the chosen channel with your report information*.
4. You will receive a DM confirming that your report was recieved.

*This includes the messages content, author, channel, who reported and a link to the message.
