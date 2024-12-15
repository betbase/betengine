import { Client, Databases, Permission, Role, Users } from 'node-appwrite';
import { jwtDecode, JwtPayload } from 'jwt-decode';

interface AuthToken extends JwtPayload {
  userId: string;
  sessionId: string;
}

export default async ({ req, res, log, error }: any) => {
  if (req.method === 'OPTIONS') {
    return res.send('', 200, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
  }

  const authToken = req.headers['authorization']
    ?.split('Bearer ')[1]
    .split(', ')[0];

  if (!authToken) {
    error('Forbidden (403): Authorization token is required');
    return res.json({ message: 'Access forbidden' }, 403, {
      'Access-Control-Allow-Origin': '*'
    });
  }

  const { serieId } = req.bodyJson;
  if (!serieId) {
    error('Bad Request (400): serieId is required');
    return res.json({ message: 'serieId is required' }, 400, {
      'Access-Control-Allow-Origin': '*'
    });
  }

  const { userId }: AuthToken = jwtDecode(authToken);

  if (!userId) {
    error('Forbidden (403): User not found');
    return res.json({ message: 'Access forbidden' }, 403, {
      'Access-Control-Allow-Origin': '*'
    });
  }

  log(authToken);

  const client = new Client()
    .setEndpoint(Bun.env['APPWRITE_FUNCTION_API_ENDPOINT'])
    .setProject(Bun.env['APPWRITE_FUNCTION_PROJECT_ID'])
    .setJWT(authToken);
  const database = new Databases(client);

  try {
    await database.getDocument(Bun.env['DATABASE_ID'], 'series', serieId);
  } catch (e) {
    error(`Not Found (404): Serie not found - ${e}`);
    return res.json({ message: 'Serie not found' }, 500, {
      'Access-Control-Allow-Origin': '*'
    });
  }

  const favouriteId = `${serieId}${userId}`;

  if (req.method === 'POST') {
    try {
      await database.createDocument(
        Bun.env['DATABASE_ID'],
        'favourites',
        favouriteId,
        {
          serie: serieId,
          user: userId
        },
        [
          Permission.read(Role.user(userId)),
          Permission.delete(Role.user(userId))
        ]
      );
      return res.json({ message: 'Favourite created' }, 200, {
        'Access-Control-Allow-Origin': '*'
      });
    } catch (e) {
      error(`Internal Server Error (500): Could not create favourite - ${e}`);
      return res.json({ message: 'Could not create favourite' }, 500, {
        'Access-Control-Allow-Origin': '*'
      });
    }
  }

  if (req.method === 'DELETE') {
    try {
      await database.deleteDocument(
        Bun.env['DATABASE_ID'],
        'favourites',
        favouriteId
      );
      return res.json({ message: 'Favourite deleted' }, 200, {
        'Access-Control-Allow-Origin': '*'
      });
    } catch (e) {
      error(`Internal Server Error (500): Could not delete favourite - ${e}`);
      return res.json({ message: 'Could not delete favourite' }, 500, {
        'Access-Control-Allow-Origin': '*'
      });
    }
  }

  return res.json({ message: 'Method Not Allowed (405)' }, 405, {
    'Access-Control-Allow-Origin': '*'
  });
};
