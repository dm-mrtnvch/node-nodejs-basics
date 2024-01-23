import path, {dirname} from 'path'
import {fileURLToPath} from 'url'
import fs from 'fs'

const create = async () => {
  const fileContent = 'I am fresh and young'
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const filePath = path.join(__dirname, '/files/fresh.txt')

  try {
    await fs.promises.writeFile(filePath, fileContent, {flag: 'wx'})
  } catch (e) {
    throw new Error('FS operation failed')
  }
}

await create()
