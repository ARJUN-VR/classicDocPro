import express from 'express'
import { gitHubController } from './controllers/gitHubController.js'


const routes = express.Router()
const controller = gitHubController();


routes.get('/getFiles', controller.fetchModifiedFiles )

export default routes;