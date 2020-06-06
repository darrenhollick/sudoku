import { Component, OnInit, HostListener } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { SquareConfig } from "./square-config.interface";
import { PuzzleConfig } from "./puzzle-config.interface";
import { CageConfig } from "./cage-config.interface";
import { GridCoords } from "./grid-coords.interface";

@Component({
    selector: "app-sudoku",
    templateUrl: "./sudoku.component.html",
    styleUrls: ["./sudoku.component.scss"]
})
export class SudokuComponent implements OnInit {

    scale: number;
    selectedSquares: Array<string> = [];
    squareConfigs: Array<SquareConfig> = [];

    checkRowColumns = true;
    checkBoxes = true;
    checkCages = false;
    checkThermo = false;
    checkSandwich = false;
    checkKightsEvens = false;
    checkKightsOdds = false;
    checkKingsEvens = false;
    checkKingsOdds = false;
    checkQueensEvens = false;
    checkQueensOdds = false;

    puzzleInstructions = "";
    puzzleTitle = "";
    puzzleAuthor = "";

    constructor(
        private http: HttpClient,
    ) {}

    ngOnInit(): void {
        // this.calcScale(window.innerWidth, window.innerHeight);
        this.loadPuzzleConfig("test");
    }

    loadPuzzleConfig(puzzleId: string) {
        // console.log(`../assets/puzzles/${puzzleId}.json`);
        this.http.get<PuzzleConfig>(`../assets/puzzles/${puzzleId}.json`).subscribe(data => {
            this.squareConfigs = data.squares;
            data.boxes.forEach(box => this.loadBox(box));
            data.cages.forEach(cage => this.loadCage(cage));
            this.puzzleInstructions = data.instructions;
            this.puzzleTitle = data.title;
            this.puzzleAuthor = data.author;
            this.puzzleAuthor = data.author;
        });
    }

    loadBox(coords: Array<GridCoords>) {
        coords.forEach(coord => {
            const square = this.squareConfigs.find(x => x.row === coord.row && x.column === coord.col);
            let t = "0";
            let r = "0";
            let b = "0";
            let l = "0";
            if (!coords.find(x => x.row === coord.row - 1 && x.col === coord.col)) { t = "1"; }
            if (!coords.find(x => x.row === coord.row && x.col === coord.col + 1)) { r = "1"; }
            if (!coords.find(x => x.row === coord.row + 1 && x.col === coord.col)) { b = "1"; }
            if (!coords.find(x => x.row === coord.row && x.col === coord.col - 1)) { l = "1"; }
            square.thickBorders = `${t}, ${r}, ${b}, ${l}`;
        });
    }

    loadCage(cage: CageConfig) {
        const labelCoords = cage.squares.sort((a, b) => a.row - b.row).sort((a, b) => a.col - b.col)[0];
        const labelSquare = this.squareConfigs.find(x => x.row === labelCoords.row && x.column === labelCoords.col);
        labelSquare.cageLabel = cage.label;

        cage.squares.forEach(coord => {
            const square = this.squareConfigs.find(x => x.row === coord.row && x.column === coord.col);
            let t = "0";
            let r = "0";
            let b = "0";
            let l = "0";
            if (!cage.squares.find(x => x.row === coord.row - 1 && x.col === coord.col)) { t = "1"; }
            if (!cage.squares.find(x => x.row === coord.row && x.col === coord.col + 1)) { r = "1"; }
            if (!cage.squares.find(x => x.row === coord.row + 1 && x.col === coord.col)) { b = "1"; }
            if (!cage.squares.find(x => x.row === coord.row && x.col === coord.col - 1)) { l = "1"; }
            square.cageBorders = `${t}, ${r}, ${b}, ${l}`;
        });
    }

    checkPuzzle() {
        // TODO: check if grid is completely filled in

        if (this.checkRowColumns) {
            // TODO: run check
        }
        if (this.checkBoxes) {
            // TODO: run check
        }
        if (this.checkCages) {
            // TODO: run check
        }
        if (this.checkThermo) {
            // TODO: run check
        }
        if (this.checkSandwich) {
            // TODO: run check
        }
        if (this.checkKightsEvens) {
            // TODO: run check
        }
        if (this.checkKightsOdds) {
            // TODO: run check
        }
        if (this.checkKingsEvens) {
            // TODO: run check
        }
        if (this.checkKingsOdds) {
            // TODO: run check
        }
        if (this.checkQueensEvens) {
            // TODO: run check
        }
        if (this.checkQueensOdds) {
            // TODO: run check
        }

        alert("Congratulations!  You solved this puzzle!");
    }

    getSquareConfig(row: number, col: number) {
        return this.squareConfigs.find(x => x.row === row && x.column === col);
    }

    isSelected(row: number, col: number): boolean {
        if (this.selectedSquares.includes(`${row},${col}`)) {
            return true;
        }
        return false;
    }

    squareMouseDown(row: number, col: number, event: MouseEvent) {
        event.preventDefault();
        event.stopPropagation();

        const key = `${row},${col}`;
        if (event.ctrlKey && !this.selectedSquares.includes(key)) {
            this.selectedSquares.push(key);
        } else {
            this.selectedSquares = [ key ];
        }
    }

    squareEntered(row: number, col: number, event: MouseEvent) {
        const key = `${row},${col}`;
        if (event.buttons === 1 && !this.selectedSquares.includes(key)) {
            this.selectedSquares.push(key);
        }
    }

    @HostListener("window:mousedown", ["$event"])
    windowMouseDown(event: MouseEvent) {
        console.log("windowMouseDown", event);

        let el = event.target as any;

        while (el.tagName !== "APP-PUZZLE-SQUARE" && el.parentNode) {
            el = el.parentNode;
        }

        if (el.tagName !== "APP-PUZZLE-SQUARE") {
            this.selectedSquares = [];
        }
    }

    @HostListener("window:resize", ["$event"])
    windowResized(event) {
        this.calcScale(event.target.innerWidth, event.target.innerHeight);
    }

    calcScale(width: number, height: number) {
        const tmpScale = Math.min(
            width / ((75 * 9) + 2 + 4 + 80),
            height / ((75 * 9) + 2 + 4 + 80)
        );

        if (tmpScale > 1) {
            this.scale = 1;
        } else {
            this.scale = tmpScale;
        }
    }

}
