import fs from 'fs'
import zlib from 'zlib'
import path from 'path'
import {fileURLToPath} from 'url'
import {dirname} from 'path'

const compress = async () => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const inputFile = path.join(__dirname, 'files', 'fileToCompress.txt')
  const outputFile = path.join(__dirname, 'files', 'archive.gz')

  const readStream = fs.createReadStream(inputFile)
  const writeStream = fs.createWriteStream(outputFile)
  const gzip = zlib.createGzip()

  readStream.pipe(gzip).pipe(writeStream)

  writeStream.on('finish', () => {
    console.log('File was compressed')
    fs.unlinkSync(inputFile)
  })
}

await compress()
