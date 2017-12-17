const Discord = require("discord.js");

const TOKEN = "Mzg5NzMwMDU2NjAxMDc1NzEz.DQ__Vw.aZl7h_dsMzshPeWRlsRnrRUTQiI";
const PREFIX = "A?";

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "Idk",
]; 

var fortunes = [
    "Oh no, you tried to ddos someone, but you ddosed yourself ://",
    "The user has been ddosed!"
];    

var bot = new Discord.Client();

bot.on("ready", function(message) {
    console.log("Ready");
});

bot.on("ready", () => {
    bot.user.setGame("A?help");
});

bot.on("guildMemberAdd", function(member) {
    member.guild.channels.find("name", "general").sendMessage(member.toString() + " **Welcome to this Server!**");
});  

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;   

    if (message.content == "A?stb") {
        message.reply("Sting is the best!, his YT is K Sting Gaming and he pro hub player!");
    }   
    
    if (message.content == "A?nub") {
        message.reply("You nub");
    }
    
    if (message.content == "A?boi") {
        message.channel.sendMessage("Boi :facepalm:")
    }
    
    if (message.content == "A?invite") {
        message.channel.sendMessage("Invite me with this!: https://discordapp.com/api/oauth2/authorize?client_id=389730056601075713&scope=bot&permissions=1");
    }

    if (message.content == "A?avatar") {
        message.reply(message.author.avatarURL);
    }    

    if (message.content == "A?b-avatar") {
        message.reply(message.guild.iconURL);
    }
    
    if (message.content == "A?arnexmeme") {
        message.channel.sendMessage("https://imgur.com/a/JaWoM")
    } 
    
    if (message.content == "A?help") {
        message.reply("**Check your DM's! :mailbox:**")
      message.author.sendMessage("```List of Commands: A?stb, A?nubarnex, A?noticeme, A?ping, A?nub, A?boi, A?invite, A?avatar, A?8ball, A?einfo, A?a-info, A?arnexmeme, A?ddosme, A?countdown5, A?ddos @user#1234, A?iamdaone```")
    }
    
    if (message.content =="A?countdown5") {
        message.channel.send(`Counting down`).then(function(m) {
             m.edit(`5`) + m.edit(`4`) + m.edit(`3`) + m.edit(`2`) + m.edit(`1`) + m.edit(`0`)
     })
    } 

    if (message.content =="A?ddosme") {
        message.channel.send(`ddos'ing you!`).then(function(m) {
             m.edit(`your ip is 666.666.666`) + m.edit(`your internet service is Barney5FpsBroadband`) + m.edit(`Your info is exposed :D, jk, i have quickly edited them so no one see`)            
     })
    }
    
    if (message.content == "A?iamdaone") {
        message.channel.send(`Get ready!`).then(function(m) {
            m.edit(`I`) + m.edit(`da`) + m.edit(`one`) + m.edit(`JOHN`) + m.edit(`CENA!!`)
            message.channel.sendMessage("https://www.youtube.com/watch?v=RZIhpba83hY")
    })  
   }      
    
    if (message.content == "A?fxyt/dt") {
        message.channel.sendMessage("**Faulty's YT Chnnel: Faulty X - GFX, Faulty's discord: Faulty X | GFX#1018**")
    }
    
    if (message.content == "A?hellnaw") {
        message.channel.sendMessage("say hell naw to the naw to the naw")
    }  
    
    if (message.content == "A?urwifi?") {
        message.channel.sendMessage("My wifi service is Barney's 5Fps Wifi")

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "8ball":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Please insert a question...")
            break;
        case "ddos":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Please mention a user to ddos!")
            break;   
        case "einfo":
            var embed = new Discord.RichEmbed()    
                .addField("About Bot", "Bot by Faulty X", true)
                .addField("About Owner", "Faulty X | GFX#1018", true)
                .addField("Commands", "Do A?help for all commands", true)
                .addField("Beta Testers", "Cloud,Faulty X", true)
                .addField("Bot Version", "1.0.3", true)
                .setColor(0x00ff)
                .setFooter("Bot by Faulty X | GFX#1018, one person dev")
                .setThumbnail(message.guild.iconURL)
            message.channel.sendMessage(embed);
            break;
        case "userinfo":
            var embed = new Discord.RichEmbed()   
                .setAuthor(message.author.username)
                .setDescription("This is the users info!")
                .setColor(0x00ff)
                .addField("Full Username", `${message.author.username}#${message.author.discriminator}`) 
                .addField("ID", message.author.id)
                .addField("Created At", message.author.createdAt);
            message.channel.sendMessage(embed);
            return;              
        case "noticeme":
            message.channel.sendMessage(message.author.toString() + " helloo");
            break; 
        case "nubarnex":
            message.channel.sendMessage(message.author.toString() + " I'm not noob, im cool :rage:");
            break; 
        case "removerole":
            message.member.removeRole(message.member.guild.roles.find("name", "test"));
            message.channel.sendMessage("**Successfully removed role from you!**")
            break;    
        case "deleterole":
            message.guild.roles.find("name", "test").delete();
            message.channel.sendMessage("**Deleted Role Successfully!**");
            break;             
    }        
});

client.login(process.env.BOT_TOKEN) ;
