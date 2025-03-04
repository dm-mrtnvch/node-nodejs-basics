import fs from 'fs'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'

const read = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const filePath = path.join(__dirname, 'files', 'fileToRead.txt')
  const stream = fs.createReadStream(filePath, 'utf8')

  stream.on('data', (chunk) => {
    process.stdout.write(chunk)
  })
}

await read()
