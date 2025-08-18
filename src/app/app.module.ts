import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCalculatorComponent } from './my-calculator/my-calculator.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { MyCalculatorModule } from './my-calculator/my-calculator.module';
import { EmptyRouteComponent } from './component/empty-route/empty-route.component';

@NgModule({
  declarations: [AppComponent, NavigationComponent, EmptyRouteComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, MyCalculatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
