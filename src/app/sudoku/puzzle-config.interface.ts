import { SquareConfig } from "./square-config.interface";

export interface PuzzleConfig {
    squares: Array<SquareConfig>;
    extras: string;
}
