import 'dotenv/config';
import type {Config} from "drizzle-kit";

export default {
    schema: './src/db/schemas',
    out: './src/db/migrations',
    driver: 'pg',
    dbCredentials: {
        user: process.env.DB_USER,
        host: process.env.DB_HOST as string,
        password: process.env.DB_PASSWORD as string,
        port: parseInt(process.env.DB_PORT || '5432'),
        database: process.env.DB_NAME as string,
    }
} satisfies Config