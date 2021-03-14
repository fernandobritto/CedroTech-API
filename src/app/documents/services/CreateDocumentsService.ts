import fs from 'fs'
import path from 'path'

interface IRequest {
  name: string
  birth_date: string
  cpf: number
  rg: number
}

class CreateDocumentsService {
  public async execute({ name, birth_date, cpf, rg }: IRequest) {
    const dataTem = new Date().getTime()

    const file = path.format({
      root: '/',
      dir: 'src/storage/',
      name: dataTem + '_doc',
      ext: '.txt',
    })

    const data = ` Nome Completo: ${name} \n Data de Nascimento: ${birth_date} \n CPF: ${cpf} \n RG: ${rg}`

    const newDoc = await fs.appendFileSync(file, data)

    return newDoc
  }
}

export default CreateDocumentsService
