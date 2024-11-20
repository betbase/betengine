import { Client, Databases, Storage } from 'appwrite';

export const client: Client = new Client();
client.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const database: Databases = new Databases(client);

export const storage: Storage = new Storage(client);
