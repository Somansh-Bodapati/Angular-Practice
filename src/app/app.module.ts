import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserInputComponent, InvestmentResultsComponent],
    imports: [FormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}