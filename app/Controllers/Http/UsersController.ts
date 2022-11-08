// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'

export default class UsersController {
  async store({ request }) {
    const dados = request.only(['email', 'password'])
    return await User.create(dados)
  }

  async login({ request, auth }) {
    const { email, password } = request.body()

    return await auth.use('api').attempt(email, password)
  }

  /*async atualiza({ request }) {
    const id = request.param('id')
    const dados = request.all()
    const mudanca = User.findOrFail(id)
    const atualizacao = (await mudanca).merge(dados).save()
    return atualizacao
  }*/
}
