import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg"
import { create } from "node:domain";
import { Pool } from "pg";

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
}

function createPrismaClient(): PrismaClient {

    // Create a new Postgres connection pool
    const pool = new Pool({
        connectionString: process.env.DATABASE_URL,
    });
    // Pool keeps a small set of connections open and ready with database
    // instead of opening a brand new connection to dB every single time you want to run a query (slow, wasteful)

    const adapter = new PrismaPg(pool);

    return new PrismaClient({ adapter })
} 

const prisma = globalForPrisma.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
    globalForPrisma.prisma = prisma;
}

export default prisma;