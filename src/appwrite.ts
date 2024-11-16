import { Client, Databases } from 'appwrite';

export const client: Client = new Client();
client.setProject(import.meta.env.VITE_APPWRITE_PROJECT_ID);

export const database: Databases = new Databases(client);
