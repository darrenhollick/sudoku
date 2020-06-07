import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { PuzzleInfo } from "./puzzle-info.interface";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {

    tags: Array<string> = [];
    puzzles: Array<PuzzleInfo> = [];

    constructor(
        private http: HttpClient,
    ) { }

    ngOnInit(): void {
        this.http.get<Array<PuzzleInfo>>(`../assets/puzzles.json`).subscribe(data => {
            this.puzzles = data;

            this.puzzles.forEach(puzzle => {
                puzzle.tags.forEach(tag => {
                    if (!this.tags.includes(tag)) {
                        this.tags.push(tag);
                    }
                });
            });
        });
    }

    getPuzzlesByTag(tag: string): Array<PuzzleInfo> {
        return this.puzzles.filter(puzzle => {
            return puzzle.tags.includes(tag);
        });
    }

}
