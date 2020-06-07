import { GridCoords } from "./grid-coords.interface";

export interface CageConfig {
    label: string;
    sum: number;
    squares: Array<GridCoords>;
}
