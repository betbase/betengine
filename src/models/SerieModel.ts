import { Models } from 'appwrite';
import { SerieFormatEnum } from '@/models/SerieFormatEnum';
import { GameModel } from '@/models/GameModel';
import { TeamModel } from '@/models/TeamModel';
import { TournamentModel } from '@/models/Tournament';
import { StreamProviderEnum } from '@/models/StreamProviderEnum';
import { SerieMapModel } from '@/models/SerieMapModel';

export interface SerieModel extends Models.Document {
  game: GameModel;
  format: SerieFormatEnum;
  startTimeScheduled: string;
  startDate?: string;
  started: boolean;
  finished: boolean;
  live: boolean;
  cancelled: boolean;
  homeTeam: TeamModel;
  homeTeamWon: boolean;
  homeTeamScore: number;
  awayTeamWon: boolean;
  awayTeamScore: number;
  awayTeam: TeamModel;
  rosterReady: boolean;
  tournament: TournamentModel;
  streamChannel?: string | null;
  streamProvider?: StreamProviderEnum | null;
  seriesMaps?: SerieMapModel[];
}
