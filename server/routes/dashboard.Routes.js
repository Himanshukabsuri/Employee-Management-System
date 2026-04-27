import {Router} from 'express'
import { protect } from '../middleware/auth'
import { getDashboard } from '../controllers/dashboardController'

const dashboardRouter = Router()

dashboardRouter.get('/',protect,getDashboard)

export default dashboardRouter;