const { Structures } = require("discord.js");

module.exports = Structures.extend("Guild", Guild => class extends Guild {

  get store() {
    return this.client.store.findAll("guildId", this.id);
  }

  async getSettings() {
    const data = await this.client.settings.findOrCreate({ where: { id: this.id } });
    console.log(data);
  }

});