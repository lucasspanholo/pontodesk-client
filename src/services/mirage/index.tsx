import { createServer, Factory, Model, Response, ActiveModelSerializer } from 'miragejs'
import faker from 'faker'

type User = {
  name: string;
  email: string;
  created_at: string;
}

export function makeServer() {
  const server = createServer({
    serializers: {
      application: ActiveModelSerializer,
    },
    
    models: {
      user: Model.extend<Partial<User>>({}) // os usuários que eu salvar devem conter ou não todos os items 
    },

    factories: { // permite criar dados ficticios para utilizar ao inicializar o sistema
      user: Factory.extend({
        name(i: number) {
          return `User ${i + 1}`
        },
        email() {
          return faker.internet.email().toLowerCase(); // gera e-mails fake
        },
        createdAt() {
          return faker.date.recent(10); // gerar datas de cadastros até 10 dias ( contando a partir de hoje )
        },
      })
    },

    seeds(server) { // Irá criar 200 usuarios de forma automatica
      server.createList('user', 200);
    },

    routes() {
      this.namespace = 'api';
      this.timing = 750; // para ter um tempo de processamento durante as ações

      this.get('/users', function (schema, request) {
        const {page = 1, per_page = 10 } = request.queryParams

        const total = schema.all('user').length

        // 10 - 20 
        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const users = this.serialize(schema.all('user'))
          .users
          .sort((a, b) => a.createdAt - b.createdAt)
          .slice(pageStart, pageEnd)

        return new Response(
          200,
          { 'x-total-count': String(total) },
          { users }
        )
      });

      this.get('/users/:id');
      this.post('/users');

      this.namespace = '';
      this.passthrough();
    }
  })

  return server;
}