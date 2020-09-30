# reportbot

Discord bot that allows users to report messages by adding a reaction

## Installation

- Create a discord bot here: https://discord.com/developers/applications
- Open a terminal in the folder the bot is in
- `npm install`
- Fill in the `config.js` file.

* **SUGGESTED WAY TO RUN**
* Install PM2: https://pm2.keymetrics.io/docs/usage/quick-start/
* `npm install pm2@latest -g`
* `pm2 start ecosystem.config.js`
* `pm2 status`, and confirm `reportbot` is running

* If not using pm2: `node .`