import { Component, HostListener, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { SquareConfig } from "./sudoku/square-config.interface";
import { PuzzleConfig } from "./sudoku/puzzle-config.interface";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

    selectedSquares: Array<string> = [];

    squareConfigs: Array<SquareConfig> = [];
    scale: number;

    puzzleInstructions = "";
    puzzleTitle = "";
    puzzleAuthor = "";

    constructor(
        private http: HttpClient,
    ) {}

    ngOnInit(): void {
        this.calcScale(window.innerWidth, window.innerHeight);
        this.loadPuzzleConfig("test");
    }

    loadPuzzleConfig(puzzleId: string) {
        console.log(`${window.location.href}/assets/puzzles/${puzzleId}.json`);
        this.http.get<PuzzleConfig>(`${window.location.href}/assets/puzzles/${puzzleId}.json`).subscribe(data => {
            this.squareConfigs = data.squares;
            this.puzzleInstructions = data.instructions;
            this.puzzleTitle = data.title;
            this.puzzleAuthor = data.author;
        });
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
        // TODO: there seems to be crazy lag when calling this method with modifiers like ctrl...
        // console.log("squareClicked", row, col, event);
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
        // event.preventDefault();
        // event.stopPropagation();

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
