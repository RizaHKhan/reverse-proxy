import express from 'express'
import os from 'os'

const app = express()
app.use(express.json())
const PORT = 3000

app.get('/', (_, res) => {
    res.send({ message: 'Hello, World!' })
})

app.get('/foobar', (_, res) => {
    res.send({ message: 'Hello, World! From Foobar' })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
    console.log(`Hostname: ${os.hostname()}`)
    console.log(
        `IP Address: ${
            Object.values(os.networkInterfaces())
                .flat()
                .find((iface) => iface.family === 'IPv4' && !iface.internal)
                .address
        }`,
    )
})
