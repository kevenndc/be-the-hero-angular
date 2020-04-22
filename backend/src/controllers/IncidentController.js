const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { title, description, value } = request.body;
    const ong_id = request.headers.authorization;
    let id = '';

    try {
      [id] = await connection('incidents').insert({
        title,
        value,
        description,
        ong_id
      });
    } catch (error) {

      return response.status(500);
    }
    

    return response.json({ id });
  },

  async index(request, response) {
    const { page = 1 } = request.query;
    const ong_id = request.headers.authorization;
    const [incidentCount] = await connection('incidents').count();

    const incidents = await connection('incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .select(
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'
      )
      .limit(5)
      .offset((page - 1) * 5);

      response.header('X-Total-Count', incidentCount['count(*)']);

      response.json(incidents);
  },

  async delete(request, response) {
    const { id } = request.params;
    const ong_id = request.headers.authorization;

    const incident = await connection('incidents')
      .select('ong_id')
      .where('id', id)
      .first()

    if (!incident) return response.status(404).json({ error: 'Incident no found.' });

    if (incident.ong_id !== ong_id) {
      return response.status(402).json({ error: 'Operation not permited.' });
    }

    await connection('incidents')
      .where('id', id)
      .delete();

    response.status('204').send();
  }
}