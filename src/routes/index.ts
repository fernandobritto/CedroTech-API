import { Router } from 'express'
import usersRouter from '@app/users/routes/users.routes'
import sessionsRouter from '@app/users/routes/sessions.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)

export default routes
