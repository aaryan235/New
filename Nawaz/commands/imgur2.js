module.exports.config = {
    name: "imgurv2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "jordanofficial",
    description: "imgur upload",
    commandCategory: "link",
    usages: `Please reply to image\n\nHow to use?\n${global.config.PREFIX}imgur [reply] <img>\n\nExample:\n${global.config.PRFIX}imgur <img reply>\n`,
    cooldowns: 1,
    dependencies: {
  "axios": "",}
};
 
module.exports.run = async ({ api, event }) => {
const axios = global.nodemodule['axios'];  
var ZiaRein = event.messageReply.attachments[0].url || args.join(" ");
    if(!ZiaRein) return api.sendMessage(`Please reply to image\n\nHow to use?\n${global.config.PREFIX}imgur [reply] <img>\n\nExample:\n${global.config.PRFIX}imgur <img reply>\n\nCreated by: ZiaRein`, event.threadID, event.messageID)
const res = await axios.get(`https://sim.ainz-project.repl.co/others/imgur?link=${encodeURIComponent(ZiaRein)}`);    
var ZiaReinn = res.data.uploaded.image;
    return api.sendMessage(ZiaReinn, event.threadID, event.messageID);
 
}