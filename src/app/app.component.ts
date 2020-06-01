import { Component, HostListener, OnInit } from "@angular/core";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {

    fixedRow1Col1 = "";
    fixedRow1Col2 = "";
    fixedRow1Col3 = "";
    fixedRow1Col4 = "";
    fixedRow1Col5 = "";
    fixedRow1Col6 = "";
    fixedRow1Col7 = "";
    fixedRow1Col8 = "";
    fixedRow1Col9 = "";
    fixedRow2Col1 = "";
    fixedRow2Col2 = "";
    fixedRow2Col3 = "";
    fixedRow2Col4 = "";
    fixedRow2Col5 = "";
    fixedRow2Col6 = "";
    fixedRow2Col7 = "";
    fixedRow2Col8 = "";
    fixedRow2Col9 = "";
    fixedRow3Col1 = "";
    fixedRow3Col2 = "";
    fixedRow3Col3 = "";
    fixedRow3Col4 = "";
    fixedRow3Col5 = "";
    fixedRow3Col6 = "";
    fixedRow3Col7 = "";
    fixedRow3Col8 = "";
    fixedRow3Col9 = "";
    fixedRow4Col1 = "";
    fixedRow4Col2 = "";
    fixedRow4Col3 = "";
    fixedRow4Col4 = "";
    fixedRow4Col5 = "";
    fixedRow4Col6 = "";
    fixedRow4Col7 = "";
    fixedRow4Col8 = "";
    fixedRow4Col9 = "";
    fixedRow5Col1 = "";
    fixedRow5Col2 = "";
    fixedRow5Col3 = "";
    fixedRow5Col4 = "";
    fixedRow5Col5 = "";
    fixedRow5Col6 = "";
    fixedRow5Col7 = "";
    fixedRow5Col8 = "";
    fixedRow5Col9 = "";
    fixedRow6Col1 = "";
    fixedRow6Col2 = "";
    fixedRow6Col3 = "";
    fixedRow6Col4 = "";
    fixedRow6Col5 = "";
    fixedRow6Col6 = "";
    fixedRow6Col7 = "";
    fixedRow6Col8 = "";
    fixedRow6Col9 = "";
    fixedRow7Col1 = "";
    fixedRow7Col2 = "";
    fixedRow7Col3 = "";
    fixedRow7Col4 = "";
    fixedRow7Col5 = "";
    fixedRow7Col6 = "";
    fixedRow7Col7 = "";
    fixedRow7Col8 = "";
    fixedRow7Col9 = "";
    fixedRow8Col1 = "";
    fixedRow8Col2 = "";
    fixedRow8Col3 = "";
    fixedRow8Col4 = "";
    fixedRow8Col5 = "";
    fixedRow8Col6 = "";
    fixedRow8Col7 = "";
    fixedRow8Col8 = "";
    fixedRow8Col9 = "";
    fixedRow9Col1 = "";
    fixedRow9Col2 = "";
    fixedRow9Col3 = "";
    fixedRow9Col4 = "";
    fixedRow9Col5 = "";
    fixedRow9Col6 = "";
    fixedRow9Col7 = "";
    fixedRow9Col8 = "";
    fixedRow9Col9 = "";

    borderRow1Col1 = "1, 0, 0, 1";
    borderRow1Col2 = "1, 0, 0, 0";
    borderRow1Col3 = "1, 0, 0, 0";
    borderRow1Col4 = "1, 0, 0, 1";
    borderRow1Col5 = "1, 0, 0, 0";
    borderRow1Col6 = "1, 0, 0, 0";
    borderRow1Col7 = "1, 0, 0, 1";
    borderRow1Col8 = "1, 0, 0, 0";
    borderRow1Col9 = "1, 1, 0, 0";
    borderRow2Col1 = "0, 0, 0, 1";
    borderRow2Col2 = "0, 0, 0, 0";
    borderRow2Col3 = "0, 0, 0, 0";
    borderRow2Col4 = "0, 0, 0, 1";
    borderRow2Col5 = "0, 0, 0, 0";
    borderRow2Col6 = "0, 0, 0, 0";
    borderRow2Col7 = "0, 0, 0, 1";
    borderRow2Col8 = "0, 0, 0, 0";
    borderRow2Col9 = "0, 1, 0, 0";
    borderRow3Col1 = "0, 0, 0, 1";
    borderRow3Col2 = "0, 0, 0, 0";
    borderRow3Col3 = "0, 0, 0, 0";
    borderRow3Col4 = "0, 0, 0, 1";
    borderRow3Col5 = "0, 0, 0, 0";
    borderRow3Col6 = "0, 0, 0, 0";
    borderRow3Col7 = "0, 0, 0, 1";
    borderRow3Col8 = "0, 0, 0, 0";
    borderRow3Col9 = "0, 1, 0, 0";
    borderRow4Col1 = "1, 0, 0, 1";
    borderRow4Col2 = "1, 0, 0, 0";
    borderRow4Col3 = "1, 0, 0, 0";
    borderRow4Col4 = "1, 0, 0, 1";
    borderRow4Col5 = "1, 0, 0, 0";
    borderRow4Col6 = "1, 0, 0, 0";
    borderRow4Col7 = "1, 0, 0, 1";
    borderRow4Col8 = "1, 0, 0, 0";
    borderRow4Col9 = "1, 1, 0, 0";
    borderRow5Col1 = "0, 0, 0, 1";
    borderRow5Col2 = "0, 0, 0, 0";
    borderRow5Col3 = "0, 0, 0, 0";
    borderRow5Col4 = "0, 0, 0, 1";
    borderRow5Col5 = "0, 0, 0, 0";
    borderRow5Col6 = "0, 0, 0, 0";
    borderRow5Col7 = "0, 0, 0, 1";
    borderRow5Col8 = "0, 0, 0, 0";
    borderRow5Col9 = "0, 1, 0, 0";
    borderRow6Col1 = "0, 0, 0, 1";
    borderRow6Col2 = "0, 0, 0, 0";
    borderRow6Col3 = "0, 0, 0, 0";
    borderRow6Col4 = "0, 0, 0, 1";
    borderRow6Col5 = "0, 0, 0, 0";
    borderRow6Col6 = "0, 0, 0, 0";
    borderRow6Col7 = "0, 0, 0, 1";
    borderRow6Col8 = "0, 0, 0, 0";
    borderRow6Col9 = "0, 1, 0, 0";
    borderRow7Col1 = "1, 0, 0, 1";
    borderRow7Col2 = "1, 0, 0, 0";
    borderRow7Col3 = "1, 0, 0, 0";
    borderRow7Col4 = "1, 0, 0, 1";
    borderRow7Col5 = "1, 0, 0, 0";
    borderRow7Col6 = "1, 0, 0, 0";
    borderRow7Col7 = "1, 0, 0, 1";
    borderRow7Col8 = "1, 0, 0, 0";
    borderRow7Col9 = "1, 1, 0, 0";
    borderRow8Col1 = "0, 0, 0, 1";
    borderRow8Col2 = "0, 0, 0, 0";
    borderRow8Col3 = "0, 0, 0, 0";
    borderRow8Col4 = "0, 0, 0, 1";
    borderRow8Col5 = "0, 0, 0, 0";
    borderRow8Col6 = "0, 0, 0, 0";
    borderRow8Col7 = "0, 0, 0, 1";
    borderRow8Col8 = "0, 0, 0, 0";
    borderRow8Col9 = "0, 1, 0, 0";
    borderRow9Col1 = "0, 0, 1, 1";
    borderRow9Col2 = "0, 0, 1, 0";
    borderRow9Col3 = "0, 0, 1, 0";
    borderRow9Col4 = "0, 0, 1, 1";
    borderRow9Col5 = "0, 0, 1, 0";
    borderRow9Col6 = "0, 0, 1, 0";
    borderRow9Col7 = "0, 0, 1, 1";
    borderRow9Col8 = "0, 0, 1, 0";
    borderRow9Col9 = "0, 1, 1, 0";

    shadedRow1Col1 = false;
    shadedRow1Col2 = false;
    shadedRow1Col3 = false;
    shadedRow1Col4 = false;
    shadedRow1Col5 = false;
    shadedRow1Col6 = false;
    shadedRow1Col7 = false;
    shadedRow1Col8 = true;
    shadedRow1Col9 = false;
    shadedRow2Col1 = false;
    shadedRow2Col2 = false;
    shadedRow2Col3 = false;
    shadedRow2Col4 = false;
    shadedRow2Col5 = false;
    shadedRow2Col6 = false;
    shadedRow2Col7 = false;
    shadedRow2Col8 = false;
    shadedRow2Col9 = false;
    shadedRow3Col1 = false;
    shadedRow3Col2 = false;
    shadedRow3Col3 = false;
    shadedRow3Col4 = false;
    shadedRow3Col5 = false;
    shadedRow3Col6 = false;
    shadedRow3Col7 = false;
    shadedRow3Col8 = false;
    shadedRow3Col9 = false;
    shadedRow4Col1 = false;
    shadedRow4Col2 = false;
    shadedRow4Col3 = false;
    shadedRow4Col4 = false;
    shadedRow4Col5 = false;
    shadedRow4Col6 = false;
    shadedRow4Col7 = false;
    shadedRow4Col8 = false;
    shadedRow4Col9 = false;
    shadedRow5Col1 = false;
    shadedRow5Col2 = false;
    shadedRow5Col3 = false;
    shadedRow5Col4 = false;
    shadedRow5Col5 = false;
    shadedRow5Col6 = false;
    shadedRow5Col7 = false;
    shadedRow5Col8 = false;
    shadedRow5Col9 = false;
    shadedRow6Col1 = false;
    shadedRow6Col2 = false;
    shadedRow6Col3 = false;
    shadedRow6Col4 = false;
    shadedRow6Col5 = false;
    shadedRow6Col6 = false;
    shadedRow6Col7 = false;
    shadedRow6Col8 = false;
    shadedRow6Col9 = false;
    shadedRow7Col1 = false;
    shadedRow7Col2 = false;
    shadedRow7Col3 = false;
    shadedRow7Col4 = false;
    shadedRow7Col5 = false;
    shadedRow7Col6 = false;
    shadedRow7Col7 = false;
    shadedRow7Col8 = false;
    shadedRow7Col9 = false;
    shadedRow8Col1 = false;
    shadedRow8Col2 = false;
    shadedRow8Col3 = false;
    shadedRow8Col4 = false;
    shadedRow8Col5 = false;
    shadedRow8Col6 = false;
    shadedRow8Col7 = false;
    shadedRow8Col8 = false;
    shadedRow8Col9 = false;
    shadedRow9Col1 = false;
    shadedRow9Col2 = false;
    shadedRow9Col3 = false;
    shadedRow9Col4 = false;
    shadedRow9Col5 = false;
    shadedRow9Col6 = false;
    shadedRow9Col7 = false;
    shadedRow9Col8 = false;
    shadedRow9Col9 = false;

    scale: number;

    ngOnInit(): void {
        this.calcScale(window.innerWidth, window.innerHeight);
    }

    @HostListener("window:resize", ["$event"])
    onResize(event) {
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
