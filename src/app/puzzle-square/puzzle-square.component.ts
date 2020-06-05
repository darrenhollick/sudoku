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

        if (event.key === "Backspace" || event.key === "Delete") {
            if (this.realContent) {
                this.realContent = "";
            } else {
                this.centerContent = "";
                this.cornerContent = "";
            }
            return;
        }

        if (!this.isNumber(event.key)
            && event.key !== "!"
            && event.key !== "@"
            && event.key !== "#"
            && event.key !== "$"
            && event.key !== "%"
            && event.key !== "^"
            && event.key !== "&"
            && event.key !== "*"
            && event.key !== "("
            && event.code !== "Numpad1"
            && event.code !== "Numpad2"
            && event.code !== "Numpad3"
            && event.code !== "Numpad4"
            && event.code !== "Numpad5"
            && event.code !== "Numpad6"
            && event.code !== "Numpad7"
            && event.code !== "Numpad8"
            && event.code !== "Numpad9"
            // && event.key !== "End"         // Shift Num 1
            // && event.key !== "ArrowDown"   // Shift Num 2
            // && event.key !== "PageDown"    // Shift Num 3
            // && event.key !== "ArrowLeft"   // Shift Num 4
            // && event.key !== "Clear"       // Shift Num 5
            // && event.key !== "ArrowRight"  // Shift Num 6
            // && event.key !== "Home"        // Shift Num 7
            // && event.key !== "ArrowUp"     // Shift Num 8
            // && event.key !== "PageUp"      // Shift Num 9
            && event.key !== "Backspace"
            && event.key !== "Delete") {
            return;
        }

        console.log("key", event);

        if (event.altKey === true && this.isNumber(event.key)) {
            this.setColor(event.key);
        } else if (event.ctrlKey === true && this.isNumber(event.key)) {
            this.setCenterContent(event.key);
        } else if (event.shiftKey === true || event.code.startsWith("Numpad")) {
            let key = event.key;
            if (event.key === "!" || event.code === "Numpad1") { key = "1"; }
            if (event.key === "@" || event.code === "Numpad2") { key = "2"; }
            if (event.key === "#" || event.code === "Numpad3") { key = "3"; }
            if (event.key === "$" || event.code === "Numpad4") { key = "4"; }
            if (event.key === "%" || event.code === "Numpad5") { key = "5"; }
            if (event.key === "^" || event.code === "Numpad6") { key = "6"; }
            if (event.key === "&" || event.code === "Numpad7") { key = "7"; }
            if (event.key === "*" || event.code === "Numpad8") { key = "8"; }
            if (event.key === "(" || event.code === "Numpad9") { key = "9"; }
            this.setCornerContent(key);
        } else if (this.isNumber(event.key)) {
            this.setContent(event.key);
        }

        event.preventDefault();
    }
    isNumber(input: string): boolean {
        if (input === "1" || input === "2" || input === "3" || input === "4" || input === "5" || input === "6" || input === "7" || input === "8" || input === "9") {
            return true;
        } else {
            return false;
        }
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
