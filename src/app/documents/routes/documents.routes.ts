import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import DocumentsController from '@app/documents/controllers/DocumentsController'
import isAuthenticated from '@server/middlewares/isAuthenticated'

const documentsRouter = Router()
const documentsController = new DocumentsController()

documentsRouter.post(
  '/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      birth_date: Joi.string().required(),
      cpf: Joi.number().integer().positive().required(),
      rg: Joi.number().integer().positive().required(),
    },
  }),
  documentsController.create,
)

export default documentsRouter
