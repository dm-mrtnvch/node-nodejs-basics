import { Transform } from 'stream'

const transform = async () => {
  const reverseTransformation = new Transform({
    transform(chunk, bufferEncoding, transformCallback) {
      this.push(chunk.toString().split('').reverse().join(''))
      transformCallback()
    }
  })

  process.stdin.pipe(reverseTransformation).pipe(process.stdout)
}

await transform()
