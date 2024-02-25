const { readFileSync } = require('fs')
require("dotenv").config();

let badWords = [
  "vagina",
  "dick",
  "mdrchod",
  "mdrchod",
  "chutiya",
  "lodu",
  "whore",
  "hore",
  "hoe",
  "hoes",
  "lode",
  "cum",
  "idiot",
  "bastard",
  "cunt",
  "butt",
  "pussy",
  "chut",
  "suck",
  "scum",
  "scumbag",
  "niggr",
  "nigga",
  "chod",
  "bhenchod",
  "bc",
  "bhodike",
  "bsdk","randi",
  "gandu",
  "stfu",
  "ass",
  "asshole",
  "madarchod",
  "fuck",
  "motherfucker",
  "mother fucker",
  "mf",
  "mfs",
  "fk",
  "fck",
  "gand",
  "laund",
  "loda",
  "gulambi"];

global.message = {
    success: "✅ 𝚂𝚞𝚌𝚌𝚎𝚜𝚜! 𝙾𝚙𝚛𝚊𝚝𝚒𝚘𝚗 𝙲𝚘𝚖𝚙𝚕𝚎𝚝𝚎𝚍.",
    admin: "*👤 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- Dear, this command is only for Admins. You have to be a admin in this group to use this command.",
    botAdmin: "*🤖 B𝙾𝚃 A𝙳𝙼𝙸𝙽 N𝙴𝙴𝙳𝙴𝙳!*\n\n- I'm not an Admin, so I can't execute this command in this group. Please make me an Admin.",
    owner: "*👑 O𝚆𝙽𝙴𝚁 N𝙴𝙴𝙴𝙳𝙴𝙳!*\n\n- Bruh, this command is only made for this bot's owner. So you can't use this command.",
    group: "*👥 G𝚛𝚘𝚞𝚙 N𝚎𝚎𝚍𝚎𝚍!*\n\n- This command can only be executed in a group chat.",
    private: 'This command is only for private chats.',
    wait: '🔄 Processing request...',
    link: 'I need a link to process this command.',
    error: "❌ Oops! An error occurred while processing your request. Please try again later.",
    ban: `You're banned from using this bot!`,
    nsfw: 'This group is not *NSFW* enabled.',
    banChat: 'This group is banned from using this bot, please contact owner to get unbanned.'
},

module.exports = {
  botname: process.env.BotName || "DEVELOPER", 
  author: process.env.Author || "@DEVELOPER",
  packname: process.env.PackName || "DEVELOPER v2 MD",
  socialLink: process.env.Web || "https://github.com/PikaBotz",
  footer: process.env.Footer || "©DEVELOPER Bot",
  prefa: process.env.Prefix || ['-'],
  themeemoji: process.env.ThemeEmoji || "🎐",
  ownername: process.env.Owner_Name || "DEVELOPER",
  ownernumber: process.env.Owner_Number || "923417680053",
  instagramId: process.env.Insta || "8.08_only_mine",
  warns: process.env.Warns_Limits || 3,
  mongoUrl: process.env.MongoDB || "mongodb+srv://cloudsbed:hamza302@$@cluster0.ssf22ds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  welcome: process.env.Welcome_Msg || '*@$user* joined this group today as $membersth member.\n\n_$prefix welcome off to disable this message._',
  left: process.env.Left_Msg || 'Ex-member *@$user* is no longer available in this group chat.\n\n_$prefix goodbye off to disable this message._',
  promote: process.env.Promote_Msg || '*@$user* has been promoted as an admin in this group.\n\n_$prefix promotem off to disable this message._',
  demote: process.env.Demote_Msg || '*@$user* has been demoted to a member in this group.\n\n_$prefix demotem off to disable this message._',
  sessionId: process.env.SESSION_ID || "YzQwdDI_AN_YA_4MGQ=", 
  image_1: readFileSync('data:image/jpeg;base64,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'), // Thumbnail for allmenu command
  image_2: readFileSync('./lib/Assets/image_2.jpg'), // null image
  image_3: readFileSync("data:image/jpeg;base64,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"), // Thumbnail for Dashboard
  aliveMedia: readFileSync("./lib/Assets/aliveMedia.mp4"),
  menuMedia: readFileSync('./lib/Assets/menuMedia.mp4'),
  badWords: badWords,
  message: {
    success: message.success,
    admin: message.admin,
    botAdmin: message.botAdmin,
    owner: message.owner,
    group: message.group,
    private: message.private,
    wait: message.wait,
    link: message.link,
    error: message.error,
    ban: message.ban,
    nsfw: message.nsfw,
    banChat: message.banChat
  },
}



// Ignore them 👇🏻
global.botname = process.env.BotName || "Queen Anya" 
global.author = process.env.Author || "@PikaBotz" 
global.packname = process.env.PackName || "Queen Anya v2 MD" 
global.myweb = process.env.Web || "https://github.com/PikaBotz" 
global.footer = process.env.Footer || "© Queen Anya Bot" 
global.prefa = process.env.Prefix || ['-'] 
global.themeemoji = process.env.ThemeEmoji || "🎐" 
global.ownername = process.env.Owner_Name || "Pika~Kun" 
global.ownernumber = process.env.Owner_Number || "923417680053" 
global.adress = process.env.Continent || "Asia, India, Assam" 
global.timezone = process.env.TimeZone || "Asia/Kolkata" 
global.instagramId = process.env.Insta || "8.08_only_mine" 
global.email = process.env.Email_Id || "example@example.com" 
  
//--------------- Tip ----------------\\
global.Tips = [
`Type *$prefix info* for more information....`,
`Type *$prefix settings* to commit changes in the bot.`,
`If you got a bug or error, then please report to developer asap by *$prefix report* command.`
]

//--------------- Menu images ----------------\\
global.image_1 = readFileSync('data:image/jpeg;base64,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') // Thumbnail for allmenu command
global.image_2 = readFileSync('./lib/Assets/image_2.jpg') // null image
global.image_3 = readFileSync("./lib/Assets/image_3.jpg") // Thumbnail for Dashboard
global.menu_pic = "https://i.ibb.co/PhDcZTM/Thumbnail.png";

