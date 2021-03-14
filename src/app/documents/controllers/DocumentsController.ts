import { Request, Response } from 'express'
import CreateDocumentsService from '../services/CreateDocumentsService'

class DocumentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, birth_date, cpf, rg } = request.body
    const createDoc = new CreateDocumentsService()
    const document = await createDoc.execute({
      name,
      birth_date,
      cpf,
      rg,
    })

    return response
      .status(200)
      .json({ msg: 'Document successfully registered', file: document })
  }
}

export default DocumentsController
