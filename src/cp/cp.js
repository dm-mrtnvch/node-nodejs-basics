import {spawn} from 'child_process'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'

const spawnChildProcess = async (args) => {
  const __dirname = dirname(fileURLToPath(import.meta.url))
  const filePath = path.join(__dirname, 'files', 'script.js')

  const child = spawn('node', [filePath, ...args], {
    stdio: ['inherit', 'inherit', 'inherit', 'ipc']
  })

  process.stdin.on('data', (data) => {
    child.stdin.write(data)
  })
}

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2'])
