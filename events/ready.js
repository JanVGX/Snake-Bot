module.exports = async (client) => {

  client.Ready = true;

  client.user.setActivity("+info | Made by JanVGX", { type: "PLAYING", url:"https://www.twitch.tv/janvgx" }).then(() => {

    client.Manager.init(client.user.id);

    client.log("Successfully Logged in as " + client.user.tag);

  });

  client.RegisterSlashCommands();

};
