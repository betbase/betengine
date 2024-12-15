import { Models } from 'appwrite';

export interface UserModel extends Models.Document {
  currency: number;
  correctPredictions: number;
  wrongPredictions: number;
  signupBonusClaimed: boolean;
}
