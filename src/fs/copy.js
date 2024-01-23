import fs from 'fs'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'

const copy = async () => {
  const basePath = dirname(fileURLToPath(import.meta.url))
  const sourcePath = path.join(basePath, '/files')
  const destinationPath = path.join(basePath, '/files_copy')

  const isSourceFolderExist = fs.existsSync(sourcePath)
  if (!isSourceFolderExist) throw new Error('FS operation failed')

  const isDestinationFolderExist = fs.existsSync(destinationPath)
  if (isDestinationFolderExist) throw new Error('FS operation failed')

  const mkdirResult = await fs.promises.mkdir(destinationPath)
  if (mkdirResult?.code === 'EEXIST') throw new Error('FS operation failed')

  const files = await fs.promises.readdir(sourcePath)

  if (files) {
    for (const file of files) {
      const sourceFile = path.join(sourcePath, file)
      const destinationFile = path.join(destinationPath, file)
      await fs.promises.copyFile(sourceFile, destinationFile)
    }
  }
};

await copy()
