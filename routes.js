import express from 'express'
import { gitHubController } from './controllers/gitHubController.js'


const routes = express.Router()
const controller = gitHubController();


routes.post('/getFiles',(req, res) => {
    controller.fetchModifiedFiles(req.body.pullUrl)
    res.send("sucess")
}
 )

export default routes;