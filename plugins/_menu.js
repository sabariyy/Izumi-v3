const { PREFIX, izumi, mode, commands, getJson } = require("../lib/");
const version = require("../package.json").version;
const config = require("../config");
izumi({
    pattern: 'menu ?(.*)',
    fromMe: mode,
    desc: 'Displays the bot menu with commands categorized by type.',
    type: 'info'
}, async (message, match, client) => {
    const readMore = String.fromCharCode(8206).repeat(4001);

    let menu = `\n╭━━━〔 *⺀𝛿𝛼𝜷𝜶𝜈𝜄 ᝃ𑁍* ⁩〕━━━━···▸
┃ ✰╭─────────────···▸
┃ ✰│ *Oᴡɴᴇʀ* : ⺀𝛿𝛼𝜷𝜶𝜈𝜄 ᝃ𑁍
┃ ✰│ *Pʀᴇꜰɪx* : ${PREFIX}
┃ ✰ │ *Mᴏᴅᴇ* : 𝐏ᴜʙʟɪᴄ
┃ ✰│ *Vᴇʀꜱɪᴏɴ* : ${version}
┃ ✰ │ *Pʟᴜɢɪɴꜱ* : *Cᴏᴍᴍᴀɴᴅꜱ*: ${commands.filter((command) => command.pattern).length}
┃ ✰╰─────────────···▸
╰━━━━━━━━━━━━━━━━···▸\n`;

    let cmnd = [];
    let category = [];

    commands.forEach((command) => {
        let cmd;
        if (command.pattern instanceof RegExp) {
            cmd = String(command.pattern).split(/\W+/)[1];
        }

        if (!command.dontAddCommandList && command.pattern) {
            let type = command.type ? command.type.toLowerCase() : "misc";
            cmnd.push({ cmd, type });

            if (!category.includes(type)) category.push(type);
        }
    });

    cmnd.sort();
    category.sort().forEach((cmmd) => {
        menu += `\n╭━━━━━━━━━━━━━━━━━···▸`;
        menu += `\n┃  ╭─────────────┅┄▻`;
        menu += `\n┃  │  「 *${cmmd.toUpperCase()}* 」`;
        menu += `\n┃  ╰┬────────────┅┄▻`;
        menu += `\n┃  ┌┤\n`;
        let comad = cmnd.filter(({ type }) => type === cmmd);
        comad.forEach(({ cmd }) => {
            menu += `\n┃  │☆ ${cmd.trim()}`;
        });
        menu += `\n┃  ╰──────────────···▸`;
        menu += `\n╰━━━━━━━━━━━━━━━━━···▸\n`;
    });

    menu += `\n\n${config.BOT_NAME}`;
    let mediaUrl = config.MENU_URL;

    await message.sendFromUrl(mediaUrl, { fileLength: "5555544444", gifPlayback: true, caption: menu }, { quoted: message });
});
