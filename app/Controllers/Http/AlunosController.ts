/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Aluno from 'App/Models/Aluno'
import AlunoValidator from 'App/Validators/AlunoValidator'

export default class AlunosController {
  async index() {
    return await Aluno.query().preload('turmas').preload('chamadas')
  }
  async store({ request }) {
    const dados = await request.validate(AlunoValidator)
    return await Aluno.create(dados)
  }
  async show({ request }) {
    const id = request.param('id')
    return await Aluno.findOrFail(id)
  }
  async destroy({ request }) {
    const id = request.param('id')
    const aluno = await Aluno.findOrFail(id)

    return await aluno.delete()
  }
  async update({ request }) {
    const id = request.param('id')
    const aluno = await Aluno.findOrFail(id)
    const dados = await request.validate(AlunoValidator)

    aluno.merge(dados)
    return await aluno.save()
  }
}
