let handler  = async (m, { conn, usedPrefix: _p }) => {
let pp = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=Group'
let botol = global.wm
let str = `
✧─────[ *Group Anime* ]─────✧
🍀 Group 2 :
https://chat.whatsapp.com/CElgl37YTIJKzugfUYIwX6
✧──────────···──────────✧
`.trim()
conn.sendButton(m.chat, str, `${botol}`, [['🎀 OKE','Ok']],m)
}
handler.command = /^gcbot2$/i

export default handler 
