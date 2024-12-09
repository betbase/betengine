import React, { createContext, useContext, useState, useEffect } from 'react';
import { SerieModel } from '@/models/SerieModel';
import { TeamModel } from '@/models/TeamModel';

export interface MatchPrediction {
  serie: SerieModel;
  proposedWinner: TeamModel;
  stake: number;
}

interface VoteslipContextType {
  predictions: MatchPrediction[];
  addPrediction: (prediction: MatchPrediction) => void;
  updatePrediction: (
    serieId: string,
    proposedWinnerId: string,
    stake: number
  ) => void;
  removePrediction: (serieId: string, proposedWinnerId: string) => void;
  totalStake: number;
}

const VoteslipContext = createContext<VoteslipContextType | undefined>(
  undefined
);

export const VoteslipProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [predictions, setPredictions] = useState<MatchPrediction[]>(() => {
    const savedPredictions = localStorage.getItem('predictions');
    return savedPredictions ? JSON.parse(savedPredictions) : [];
  });

  const [totalStake, setTotalStake] = useState(0);

  useEffect(() => {
    localStorage.setItem('predictions', JSON.stringify(predictions));
    setTotalStake(
      predictions.reduce((acc, prediction) => acc + prediction.stake, 0)
    );
  }, [predictions]);

  const addPrediction = (prediction: MatchPrediction) => {
    setPredictions((prevPredictions) => {
      const exists = prevPredictions.some(
        (p) =>
          p.serie.$id === prediction.serie.$id &&
          p.proposedWinner.$id === prediction.proposedWinner.$id
      );

      if (!exists) {
        return [...prevPredictions, prediction];
      }
      return prevPredictions;
    });
  };

  const updatePrediction = (
    serieId: string,
    proposedWinnerId: string,
    stake: number
  ) => {
    setPredictions((prevPredictions) =>
      prevPredictions.map((prediction) =>
        prediction.serie.$id === serieId &&
        prediction.proposedWinner.$id === proposedWinnerId
          ? { ...prediction, stake }
          : prediction
      )
    );
  };

  const removePrediction = (serieId: string, proposedWinnerId: string) => {
    setPredictions((prevPredictions) =>
      prevPredictions.filter(
        (prediction) =>
          prediction.serie.$id !== serieId ||
          prediction.proposedWinner.$id !== proposedWinnerId
      )
    );
  };

  return (
    <VoteslipContext.Provider
      value={{
        predictions,
        addPrediction,
        updatePrediction,
        removePrediction,
        totalStake
      }}>
      {children}
    </VoteslipContext.Provider>
  );
};

export const useVoteslip = (): VoteslipContextType => {
  const context = useContext(VoteslipContext);
  if (context === undefined) {
    throw new Error('useVoteslip must be used within a VoteslipProvider');
  }
  return context;
};
