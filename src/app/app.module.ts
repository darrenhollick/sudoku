import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PuzzleSquareComponent } from "./sudoku/puzzle-square/puzzle-square.component";
import { HomeComponent } from "./home/home.component";
import { HelpComponent } from "./help/help.component";
import { SudokuComponent } from "./sudoku/sudoku.component";


@NgModule({
    declarations: [
        AppComponent,
        PuzzleSquareComponent,
        HomeComponent,
        HelpComponent,
        SudokuComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
