import { Client, Databases, Users } from 'node-appwrite';

import * as crypto from 'crypto';
import { Models } from 'appwrite';

interface WebhookRequestHeaders {
  accept: string;
  'accept-encoding': string;
  'content-length': string;
  'content-type': string;
  host: string;
  'user-agent': string;
  'x-appwrite-webhook-events': string;
  'x-appwrite-webhook-id': string;
  'x-appwrite-webhook-name': string;
  'x-appwrite-webhook-project-id': string;
  'x-appwrite-webhook-signature': string;
  'x-appwrite-webhook-user-id': string;
  'x-forwarded-for': string;
  'x-forwarded-host': string;
  'x-forwarded-proto': string;
  'x-appwrite-key': string;
  'x-appwrite-trigger': string;
  'x-appwrite-event': string;
  'x-appwrite-user-id': string;
  'x-appwrite-user-jwt': string;
}

interface WebhookRequestBody extends Models.User<Models.Preferences> {
  targets: Models.Target[];
  accessedAt: string;
}

// This Appwrite function will be executed every time your function is triggered
export default async ({ req, res, log, error }: any) => {
  // You can use the Appwrite SDK to interact with other services
  // For this example, we're using the Users service
  const client = new Client()
    .setEndpoint(Bun.env['APPWRITE_FUNCTION_API_ENDPOINT'])
    .setProject(Bun.env['APPWRITE_FUNCTION_PROJECT_ID'])
    .setKey(req.headers['x-appwrite-key'] ?? '');
  const users = new Users(client);
  const database = new Databases(client);

  const headers = req.headers as WebhookRequestHeaders;
  const data = req.bodyJson as WebhookRequestBody;

  const validateWebhook = (
    payload: string,
    signatureKey: string,
    webhookSignature: string,
    webhookUrl: string
  ): boolean => {
    const signature = crypto
      .createHmac('sha1', signatureKey)
      .update(`https://${webhookUrl}${payload}`)
      .digest()
      .toString('base64');
    return signature === webhookSignature;
  };

  if (
    !validateWebhook(
      JSON.stringify(data),
      Bun.env['WEBHOOK_SIGNATURE_KEY'],
      headers['x-appwrite-webhook-signature'],
      headers.host
    )
  ) {
    error('Forbidden (403): Webhook could not be validated');
    return res.json({ message: 'Access forbidden' });
  }

  // Check if the user already exists in database
  try {
    const user = await database.getDocument(
      Bun.env['DATABASE_ID'],
      'users',
      data.$id
    );

    if (user) {
      error('Conflict (409): User already exists');
      return res.json({ message: 'User already exists' });
    }
  } catch {
    log(`User ${data.$id} does not exist in database.`);
  }

  // If not, create a new user in the database
  try {
    await database.createDocument(Bun.env['DATABASE_ID'], 'users', data.$id, {
      currency: 0,
      correctPredictions: 0,
      wrongPredictions: 0,
      signupBonusClaimed: false,
    });
    log(`User ${data.$id} created in database.`);
    return res.json({ message: 'User created in database' });
  } catch (e) {
    error(`Failed to create user in database: ${e.message}`);
    return res.json({ message: 'Failed to create user in database' });
  }
};
