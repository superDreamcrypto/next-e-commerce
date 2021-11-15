import nc from 'next-connect'
import dbConnect from '../../../config/dbConnect'
import onError from '../../../middlewares/error'
import { myBookings } from '../../../controllers/bookingControllers'
import isAuthenticatedUser from '../../../middlewares/auth'

const handler = nc({ onError })

dbConnect()

handler.use(isAuthenticatedUser).get(myBookings)

export default handler