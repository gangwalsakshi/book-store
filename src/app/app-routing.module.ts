import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BookDetailsComponent } from "./books/book-details/book-details.component";
import { BookEditComponent } from "./books/book-edit/book-edit.component";
import { BookStartComponent } from "./books/book-start/book-start.component";
import { BooksComponent } from "./books/books.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";

const appRoutes:Routes=[
    {path:'', redirectTo:"/books", pathMatch:"full"},
    {path:'books',component:BooksComponent, children:[
        {path:'',component:BookStartComponent},
        {path:'new', component:BookEditComponent},
        {path:':id', component:BookDetailsComponent},
        {path:':id/edit', component:BookEditComponent}
      ]},
    {path:'shopping-list',component:ShoppingListComponent}
    
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{



}