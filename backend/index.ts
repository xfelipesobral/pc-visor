import express from 'express'

import routes from './src/routes'

const appPort = process.env.SERVER_PORT || 3300

const app = express()

app.use(express.json())

app.use(routes)

app.listen(appPort, () => console.log(`Server is running on port ${appPort}!`))