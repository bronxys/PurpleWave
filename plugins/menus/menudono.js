module.exports = {
nomes: ["menudono"],
uso: [""],
run: async () => {
aumentartotalcmds();
aumentarcmdsgeral();
if (!dono) return enviar(resposta.so_dono);
const menu = `
╭─⚝─⚝─⚝─⚝─⚝─⚝─⚝
┃🐈‍⬛»Bot: *${NomeDoBot}*
┃╰─»Usuário: *${nome}*
┃╰─»Minha Versão: *${versao}*
┃╰─»Biblioteca: *Baileys MD*
┃╰─»Dono: *${criador}*
┝─⚝─⚝─⚝─⚝─⚝─⚝─⚝
┃⚙️𝘐𝘕𝘍𝘖𝘚 
┃╰─»${prefix}Ping
┃╰─»${prefix}Dados
┃╰─»${prefix}Infodono
┃╰─»${prefix}Infocmd <comando>
┝─⚝─⚝─⚝─⚝─⚝─⚝─⚝
┃🫅🏽 DONO
┃╰─»${prefix}fotomenu <@imagem>
┃╰─»${prefix}setprefix <novo prefixo>
┃╰─»${prefix}setapikey <nova apikey>
┃╰─»${prefix}setnomebot <nome bot>
┃╰─»${prefix}setnomedono <nome dono>
┃╰─»${prefix}setnumerodono <número dono>
┃╰─»${prefix}blockcmd <comando>
┃╰─»${prefix}unblockcmd <comando>
┝─⚝─⚝─⚝─⚝─⚝─⚝─⚝
┃🔑 ATIVAÇÕES 
┃╰─»${prefix}bangp
┃╰─»${prefix}botoff <on/off>
┃╰─»${prefix}usarprefix <on/off>
┃╰─»${prefix}antipv <on/off>
╰─⚝─⚝─⚝─⚝─⚝─⚝─⚝
`;
await bot.sendMessage(
from,
{ image: { url: fotomenu }, caption: menu },
{ quoted: info }
);
},
};
