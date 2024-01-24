const parseArgs = () => {
  const properArgs = []

  for (const [index, arg] of process.argv.entries()) {
    if (arg.startsWith('--')) {
      const name = arg.substring(2)
      const value = process.argv[index + 1]
      const resultString = `${name} is ${value}`

      properArgs.push(resultString)
    }
  }

  console.log(properArgs.join(', '))
}

parseArgs()
