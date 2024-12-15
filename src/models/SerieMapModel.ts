import { Models } from 'appwrite';

export interface SerieMapModel extends Models.Document {
  mapName: string;
  mapId: string;
  finished: boolean;
  homeTeamScore: number;
  homeTeamWon: boolean;
  awayTeamScore: number;
  awayTeamWon: boolean;
}
