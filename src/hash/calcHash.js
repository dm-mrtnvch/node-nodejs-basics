import fs from 'fs'
import crypto from 'crypto'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'

const calculateHash = async () => {
  const scriptFilePath = fileURLToPath(import.meta.url)
  const __dirname = dirname(scriptFilePath)
  const readFilePath = path.join(__dirname, 'files', 'fileToCalculateHashFor.txt')

  const fileStream = fs.createReadStream(readFilePath)
  const hash = crypto.createHash('sha256')

  fileStream.pipe(hash).setEncoding('hex')

  hash.on('finish', () => {
    console.log(hash.read())
  })
}

await calculateHash()
