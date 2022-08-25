const sqlite3 = require('sqlite3');
const path = require('path');

const db = new sqlite3.Database(path.join('./databaseDados.sqlite3'), (err) => {
  if (err) {
    console.log(err);
  }
});

function addtb(idcpf, name) {
  db.serialize(() => {
    db.run("CREATE TABLE IF NOT EXISTS dadosPessoais(cpf TEXT, nome TEXT)");
    const stmt = db.prepare("INSERT INTO dadosPessoais VALUES(?,?)");
    console.log(`ADICIONANDO ===> [${idcpf} - ${name}]`);
    stmt.run(idcpf, name);
  });

};

module.exports = addtb;