import fetch from 'node-fetch'
let handler = async(m, { conn, text, usedPrefix, command }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)

let str = `*https://instagram.com/yxbxrock*

Pengen mentahan nya ?
Nih ada santai bro....
https://chat.whatsapp.com/D71CKTjDBgkBYmaNZuUmcG

https://github.com/Yxbxrock
wa.me/6282365089294`
let wibu = `https://api-reysekha.herokuapp.com/api/random/cosplay?apikey=apirey` 
let thumb = await(await fetch(wibu)).buffer()
conn.sendButtonDoc(m.chat, str, wm,'Thankyou','Bilek', m, { contextInfo: { externalAdReply: { showAdAttribution: true,
    mediaUrl: "https://instagram.com/yxbxrock",
    mediaType: "VIDEO",
    description: "https://chat.whatsapp.com/D71CKTjDBgkBYmaNZuUmcG", 
    title: 'Xyze Bot-[MD]',
    body: wm,
    thumbnail: thumb,
    sourceUrl: sgc
  }
  } }) 
          }
handler.help = ['source code']
handler.tags = ['info']
handler.command =  /^(script|sc)$/i

export default handler
