import { SquareConfig } from "./square-config.interface";
import { CageConfig } from "./cage-config.interface";
import { GridCoords } from "./grid-coords.interface";

export interface PuzzleConfig {
    squares: Array<SquareConfig>;
    boxes: Array<Array<GridCoords>>;
    cages: Array<CageConfig>;
    checkRowColumns: boolean;
    checkBoxes: boolean;
    checkCages: boolean;
    checkThermo: boolean;
    checkSandwich: boolean;
    checkKightsEvens: boolean;
    checkKightsOdds: boolean;
    checkKingsEvens: boolean;
    checkKingsOdds: boolean;
    checkQueensEvens: boolean;
    checkQueensOdds: boolean;
    extras: string;
    instructions: string;
    title: string;
    author: string;
}
