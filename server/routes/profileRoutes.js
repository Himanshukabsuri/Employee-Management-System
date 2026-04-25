import {Router} from 'express'
import { protect } from '../middleware/auth.js'
import { getProfile, updateProfile } from '../controllers/profileController.js'

const profileROuter = Router()

profileROuter.get('/',protect,getProfile);
profileROuter.post('/',protect,updateProfile)

export default profileROuter;


