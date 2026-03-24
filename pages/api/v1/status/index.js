import database from "infra/database.js";
import { version } from "react";

async function status(request, response) {
  const udpdateAt = new Date().toISOString();

  //Versão do Postgres
  const dbVersionValue = await database.query("SELECT version();");
  const dbVersionResult = dbVersionValue.rows[0].version.split(" ")[1];
  //Conexẽs Maximas
  const dbMaxConnectionValue = await database.query("SHOW max_connections;")
  const dbMaxConnectionResult = dbMaxConnectionValue.rows[0].max_connections;
  //Conexões Usadas
  response.status(200).json({
    update_at: udpdateAt,
    database:{
      data_base_version: dbVersionResult,
      max_connect: dbMaxConnectionResult,
    },
  });
}

export default status;
