import express from 'express'
import * as funcs from '../src/debug.js'

const app = express()
app.use(express.text({ type: '*/*' }))

const PORT = 3000

Object.keys(funcs).forEach((fnName) => {
    if (fnName === 'getConfig') {
        app.get(`/${fnName}`, async (req, res) => {
            try {
                const result = await funcs[fnName]()
                res.send(result)
            } catch (err) {
                res.status(500).json({ success: false, error: err.message })
            }
        })
    } else {
        app.post(`/${fnName}`, async (req, res) => {
            try {
                const result = await funcs[fnName](req.body)
                res.send(result)
            } catch (err) {
                res.status(500).json({ success: false, error: err.message })
            }
        })
    }
})

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`))
