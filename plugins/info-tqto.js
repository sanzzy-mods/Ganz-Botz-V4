import { promises } from 'fs'
import { join } from 'path'
import { xpRange } from '../lib/levelling.js'
import moment from 'moment-timezone'
import os from 'os'
import fs from 'fs'
import fetch from 'node-fetch'
let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ `,dmenuf + '\n\n' + cmenua, collab, [['THNKS FANGZ','Ok']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: bottime,
                        body: 'Contributor FangzXD',          previewType: 0,
                        jpegThumbnail: await (await fetch(thumbdoc)).buffer(),
                        sourceUrl: swb
                      }}
})
}


handler.help = ['tqto', 'contributor']
handler.tags = ['info','main']
handler.command = /^(tqto|thanksto|contributor)$/i
handler.private = false

export default handler