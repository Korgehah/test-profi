export type GameStep = 'menu' | 'names' | 'game' | 'results';

export interface ResultsProps {
  name: string;
  score: number;
}
