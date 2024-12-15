import { Account, Client, Databases, Functions, Storage } from 'appwrite';

export const client: Client = new Client();
client.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const database: Databases = new Databases(client);

export const storage: Storage = new Storage(client);

export const account: Account = new Account(client);

export const functions: Functions = new Functions(client);
