
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
// import the GridModule for the Grid component
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { AppComponent }  from './app.component';
=======
import { ScheduleModule, View } from '@syncfusion/ej2-angular-schedule';
import { WeekService, MonthService} from '@syncfusion/ej2-angular-schedule';
import { AppComponent } from './app.component';
>>>>>>> c7018dbf216840d76b6d00af873cb24843c68ef5

/**
 * Module
 */
@NgModule({
<<<<<<< HEAD
  //declaration of ej2-angular-grids module into NgModule
  imports:      [ BrowserModule, GridModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
=======
    imports: [
        BrowserModule,
        ScheduleModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [WeekService,
                MonthService]
>>>>>>> c7018dbf216840d76b6d00af873cb24843c68ef5
})
export class AppModule { }

