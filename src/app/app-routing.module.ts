import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { SudokuComponent } from "./sudoku/sudoku.component";
import { HelpComponent } from "./help/help.component";


const routes: Routes = [
    { path: "", pathMatch: "full", redirectTo: "/home" },
    { path: "home", component: HomeComponent },
    { path: "sudoku", component: SudokuComponent },
    { path: "help", component: HelpComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
