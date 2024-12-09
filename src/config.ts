export const MAX_PREDICTIONS_PER_SLIP = import.meta.env
  .VITE_MAX_PREDICTIONS_PER_SLIP
  ? parseInt(import.meta.env.VITE_MAX_PREDICTIONS_PER_SLIP)
  : 5;
export const PREDICTION_STAKE_STEP = import.meta.env.VITE_PREDICTION_STAKE_STEP
  ? parseInt(import.meta.env.VITE_PREDICTION_STAKE_STEP)
  : 10;
export const MIN_PREDICTION_STAKE = import.meta.env.VITE_MIN_PREDICTION_STAKE
  ? parseInt(import.meta.env.VITE_MIN_PREDICTION_STAKE)
  : 10;
