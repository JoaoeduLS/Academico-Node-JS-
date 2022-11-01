import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Aluno from 'App/Models/Aluno'

export default class extends BaseSeeder {
  public async run() {
    await Aluno.createMany([
      {
        nome: 'Hugo',
        cpf: 1234567989,
        matricula: '21114290013',
        email: 'Joaoeduardo.lsilva@gmail.com',
        telefone: '6199999999',
        cep: 72220201,
        logradouro: 'ceilandia',
        complemento: 'conjunto A',
        numero: 12,
        bairro: 'bairro',
      },
    ])
    // Write your database queries inside the run method
  }
}
