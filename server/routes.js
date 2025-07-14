import express from 'express'
import { gitHubController } from './controllers/gitHubController.js'


const routes = express.Router()
const controller = gitHubController();

routes.post('/getFiles', controller.fetchModifiedFiles)
routes.post('/generateDocument', controller.generateDocument)

export default routes;