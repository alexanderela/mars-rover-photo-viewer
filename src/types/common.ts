export interface Obj {
  [key: string]: string;
}

export interface FetchRoverProps {
  rover: string;
  options?: Obj;
  page: number;
}

export enum Rover {
  CURIOSITY = "curiosity",
  OPPORTUNITY = "opportunity",
  SPIRIT = "spirit",
}