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
  const databaseName = process.env.POSTGRES_DB;
  const dbOpenConnectionValue = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName]
  });
  const dbOpenConnectionResult = dbOpenConnectionValue.rows[0].count

  response.status(200).json({
    update_at: udpdateAt,
    database: {
      data_base_version: dbVersionResult,
      max_connect: dbMaxConnectionResult,
      open_connect: dbOpenConnectionResult,
    },
  });
}

export default status;
