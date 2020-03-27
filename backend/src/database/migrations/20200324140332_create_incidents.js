
exports.up = function (knex) {//responsável pela criação da tabela
  return knex.schema.createTable('incidents', function (table) {
    table.increments();
    table.string('title').notNullable();
    table.string('description').notNullable();
    table.decimal('value').notNullable();

    table.string('ong_id').notNullable();

    table.foreign('ong_id').references('id').inTable('ongs')
    //ong_id referencia a coluna id da tabela ongs
  });
};

exports.down = function (knex) {//Deletar tabela, caso precise voltar átras dela.
    return knex.schema.dropTable('incidents');
};
