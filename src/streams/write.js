import fs from 'fs'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'

const write = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const filePath = path.join(__dirname, 'files', 'fileToWrite.txt')
  const stream = fs.createWriteStream(filePath)

  process.stdin.pipe(stream)
}

await write()
