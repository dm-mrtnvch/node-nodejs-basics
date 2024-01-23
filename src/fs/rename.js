import {fileURLToPath} from 'url'
import path, {dirname} from 'path'
import fs from 'fs'

const rename = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url))
  const txtFile = path.join(basePath, 'files/wrongFilename.txt')
  const mdFile = path.join(basePath, 'files/properFilename.md')

  try {
    await fs.promises.access(mdFile)
    throw new Error('FS operation failed')
  } catch (e) {}

  try {
    await fs.promises.access(txtFile)
  } catch (e) {
    throw new Error('FS operation failed')
  }

  await fs.promises.rename(txtFile, mdFile)
}

await rename()
