import { Component, OnInit, Input, HostListener } from "@angular/core";
import { SquareConfig } from "../sudoku/square-config.interface";

@Component({
    selector: "app-puzzle-square",
    templateUrl: "./puzzle-square.component.html",
    styleUrls: ["./puzzle-square.component.scss"]
})
export class PuzzleSquareComponent implements OnInit {

    @Input() set config(value: SquareConfig) {
        if (value) {
            if (value.fixedContent) { this.fixedContent = value.fixedContent; }
            if (value.thickBorders) {
                const parts = value.thickBorders.split(",");
                if (parts.length >= 1 && parts[0].trim() === "1") { this.borderTop = true; }
                if (parts.length >= 2 && parts[1].trim() === "1") { this.borderRight = true; }
                if (parts.length >= 3 && parts[2].trim() === "1") { this.borderBottom = true; }
                if (parts.length >= 4 && parts[3].trim() === "1") { this.borderLeft = true; }
            }
            if (value.cageBorders) {
                const parts = value.cageBorders.split(",");
                if (parts.length >= 1 && parts[0].trim() === "1") { this.cageTop = true; }
                if (parts.length >= 2 && parts[1].trim() === "1") { this.cageRight = true; }
                if (parts.length >= 3 && parts[2].trim() === "1") { this.cageBottom = true; }
                if (parts.length >= 4 && parts[3].trim() === "1") { this.cageLeft = true; }
            }
            if (value.cageValue) { this.cageValue = value.cageValue; }
            if (value.shaded) { this.shaded = value.shaded; }
        }
    }
    @Input() selected = false;

    borderTop = false;
    borderRight = false;
    borderBottom = false;
    borderLeft = false;
    cageTop = false;
    cageRight = false;
    cageBottom = false;
    cageLeft = false;
    cageValue: string;
    shaded = false;
    fixedContent: string;

    realContent = "";
    centerContent = "";
    cornerContent = "";

    bg2 = false;
    bg3 = false;
    bg4 = false;
    bg5 = false;
    bg6 = false;
    bg7 = false;
    bg8 = false;
    bg9 = false;

    constructor() { }

    ngOnInit(): void {
    }

    // @HostListener("click", ["$event"])
    // clickEvent(event: MouseEvent) {
    //     console.log(`clicked x:${this.column} y:${this.row}`, event);
    //     if (!event.ctrlKey) {
    //         // TODO: alert other squares to set selected = false
    //     }

    //     this.selected = true;
    // }

    @HostListener("window:keydown", ["$event"])
    keyEvent(event: KeyboardEvent) {
        if (!this.selected) {
            return;
        }

        if (event.key !== "1"
            && event.key !== "2"
            && event.key !== "3"
            && event.key !== "4"
            && event.key !== "5"
            && event.key !== "6"
            && event.key !== "7"
            && event.key !== "8"
            && event.key !== "9"
            && event.key !== "!"
            && event.key !== "@"
            && event.key !== "#"
            && event.key !== "$"
            && event.key !== "%"
            && event.key !== "^"
            && event.key !== "&"
            && event.key !== "*"
            && event.key !== "("
            && event.key !== "Backspace"
            && event.key !== "Delete") {
            return;
        }

        if (event.key === "Backspace" || event.key === "Delete") {
            if (this.realContent) {
                this.realContent = "";
            } else {
                this.centerContent = "";
                this.cornerContent = "";
            }
            return;
        }


        if (event.altKey === true) {
            this.setColor(event.key);
        } else if (event.ctrlKey === true) {
            this.setCenterContent(event.key);
        } else if (event.shiftKey === true) {
            let key = event.key;
            if (event.key === "!") { key = "1"; }
            if (event.key === "@") { key = "2"; }
            if (event.key === "#") { key = "3"; }
            if (event.key === "$") { key = "4"; }
            if (event.key === "%") { key = "5"; }
            if (event.key === "^") { key = "6"; }
            if (event.key === "&") { key = "7"; }
            if (event.key === "*") { key = "8"; }
            if (event.key === "(") { key = "9"; }
            this.setCornerContent(key);
        } else {
            this.setContent(event.key);
        }

        event.preventDefault();
    }

    setCenterContent(input: string) {
        if (this.centerContent.includes(input)) {
            this.centerContent = this.centerContent.replace(input, "");
        } else {
            const tmp = `${this.centerContent}${input}`;
            const chars = tmp.split("");
            const sorted = chars.sort();
            this.centerContent = sorted.join("");
        }
    }

    setCornerContent(input: string) {
        if (this.cornerContent.includes(input)) {
            this.cornerContent = this.cornerContent.replace(input, "");
        } else {
            const tmp = `${this.cornerContent}${input}`;
            const chars = tmp.split("");
            const sorted = chars.sort();
            this.cornerContent = sorted.join("");
        }
    }

    getCornerContent(pos: number) {
        if (this.cornerContent.length < pos) {
            return "";
        } else {
            return this.cornerContent[pos - 1];
        }
    }

    setContent(input: string) {
        this.realContent = input;
    }

    setColor(input: string) {
        this.bg2 = this.bg3 = this.bg4 = this.bg5 = this.bg6 = this.bg7 = this.bg8 = this.bg9 = false;
        if (input === "2") { this.bg2 = !this.bg2; }
        if (input === "3") { this.bg3 = !this.bg3; }
        if (input === "4") { this.bg4 = !this.bg4; }
        if (input === "5") { this.bg5 = !this.bg5; }
        if (input === "6") { this.bg6 = !this.bg6; }
        if (input === "7") { this.bg7 = !this.bg7; }
        if (input === "8") { this.bg8 = !this.bg8; }
        if (input === "9") { this.bg9 = !this.bg9; }
    }

}
