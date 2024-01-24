const parseEnv = () => {
  const prefix = 'RSS_'
  const rssEnvs = []

  for (const key in process.env) {
    if (key.startsWith(prefix)) {
      const name = key.substring(prefix.length)
      const value = process.env[key]
      const rssEnv = `${prefix}${name}=${value}`

      rssEnvs.push(rssEnv)
    }
  }

  console.log(rssEnvs.join('; '))
}

parseEnv()
