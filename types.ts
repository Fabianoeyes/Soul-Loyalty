export type SlideId = 0 | 1 | 2 | 3;

export interface SlideProps {
  isActive: boolean;
  onNext?: () => void;
  onPrev?: () => void;
}

export interface ChartData {
  name: string;
  value: number;
  prevValue?: number;
}