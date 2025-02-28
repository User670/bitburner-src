import type { GoColor, GoOpponent, GoPlayType } from "@enums";

export type Board = (PointState | null)[][];

export type SimpleBoard = string[];

export type Move = {
  point: PointState;
  oldLibertyCount?: number | null;
  newLibertyCount?: number | null;
  createsLife?: boolean;
};

type MoveType =
  | "capture"
  | "defendCapture"
  | "eyeMove"
  | "eyeBlock"
  | "pattern"
  | "growth"
  | "expansion"
  | "jump"
  | "defend"
  | "surround"
  | "corner"
  | "random";

type MoveFunction = () => Promise<Move | null>;
export type MoveOptions = Record<MoveType, MoveFunction>;

export type EyeMove = {
  point: PointState;
  createsLife: boolean;
};

export type BoardState = {
  board: Board;
  previousPlayer: GoColor | null;
  /** The previous board position as a SimpleBoard */
  previousBoard: SimpleBoard | null;
  ai: GoOpponent;
  passCount: number;
  cheatCount: number;
};

export type PointState = {
  color: GoColor;
  chain: string;
  liberties: (PointState | null)[] | null;
  x: number;
  y: number;
};

export type Play = {
  success: boolean;
  type: GoPlayType;
  x: number;
  y: number;
};

export type Neighbor = {
  north: PointState | null;
  east: PointState | null;
  south: PointState | null;
  west: PointState | null;
};

export type GoScore = {
  White: { pieces: number; territory: number; komi: number; sum: number };
  Black: { pieces: number; territory: number; komi: number; sum: number };
};

export type OpponentStats = {
  wins: number;
  losses: number;
  nodes: number;
  nodePower: number;
  winStreak: number;
  oldWinStreak: number;
  highestWinStreak: number;
  favor: number;
};
