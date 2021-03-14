import { Router } from 'express'
import usersRouter from '@app/users/routes/users.routes'
import sessionsRouter from '@app/users/routes/sessions.routes'
import documentsRouter from '@app/documents/routes/documents.routes'

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/sessions', sessionsRouter)
routes.use('/documents', documentsRouter)

export default routes
