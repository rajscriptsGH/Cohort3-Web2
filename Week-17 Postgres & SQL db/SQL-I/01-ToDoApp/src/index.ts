import { Client } from 'pg'

const pgClient = new Client("postgresql://neondb_owner:npg_hZedaC6T2Vlc@ep-empty-tooth-adeuvoex-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require")

// const pgClient = new Client({
//     user: "neondb_owner",
//     password: "npg_hZedaC6T2Vlc",
//     port: 5431,
//     host: "ep-empty-tooth-adeuvoex-pooler.c-2.us-east-1.aws.neon.tech",
//     database: "neondb",
//     ssl: true
// })

async function dbConnect() {
    await pgClient.connect()
    const response = await pgClient.query("SELECT * FROM users")
    console.log(response.rows);

}

dbConnect()