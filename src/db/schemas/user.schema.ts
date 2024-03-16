import { time } from 'console';
import { date, integer, pgTable, serial, text, timestamp,varchar } from 'drizzle-orm/pg-core';


export const users = pgTable("users", {
    id: serial("id").primaryKey(),
    name: varchar("name").notNull(),
    email: varchar("email").notNull().unique(),
    age: integer("age").default(null),
    date_of_birth: date("date").default(null),
    password: text("password").notNull(),
    created_on: timestamp("created_on").notNull().defaultNow(),
    modified_on: timestamp("modified_on").notNull().defaultNow(),
    last_logged_in: timestamp('last_logged_in').default(null),
    is_deleted: integer('is_deleted').default(0)
})