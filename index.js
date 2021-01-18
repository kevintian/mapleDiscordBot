const dotenv = require("dotenv");
dotenv.config();
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
var cron = require("node-cron");

const { prefix, flagTimes } = config;

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else if (message.content.startsWith(prefix + "foo")) {
    message.channel.send("bar!");
  }
});

flagTimes.forEach(cronTime => {
  cron.schedule(
    cronTime,
    async () => {
      /*
        "asia": "505667339614814230",
        "botServer": "771601695728730112"
      */
      const flagChannel = await guild.channels.fetch("784700229231575040");
      flagChannel.send("<@&787007601841274920> in five minutes everyone!");
    },
    { timezone: "Etc/UTC" }
  );
});

client.login(process.env.BOT_TOKEN);
