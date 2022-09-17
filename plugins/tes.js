import fs from 'fs';
import crypto from 'crypto'
let handler = async (m, { conn, text, usedPrefix }) => {

    let sewa = `
  〔 llı OWNER ${wm} ıll 〕
    
Nama: ${nameowner}
Umur: ${umurowner}
Asal: ${asalowner}

Nomor: ${nomorowner}
`

    let img1 = fs.readFileSync('./img/atas.png');
    let img2 = fs.readFileSync('./img/bawah.png');
    return conn.sendButton(m.chat, hiasan, sewa, img1, [["menu", usedPrefix + "menu"], ["profile", usedPrefix + "profile"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://instagram.com/aguzfamilia",
                mediaType: "VIDEO",
                title: hiasan,
                body: bottime,
                previewType: 0,
                thumbnail: img1
            }
        }
    })
}
handler.help = ["gini"]
handler.tags = ["main"]
handler.command = /^gini$/i
export default handler