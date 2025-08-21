import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './component/navigation/navigation.component';
import { MyCalculatorModule } from './my-calculator/my-calculator.module';
import { EmptyRouteComponent } from './component/empty-route/empty-route.component';
import { MyObjectListModule } from './object-list/object-list.module';
import { CommonModule } from '@angular/common';
import { LifeCycleModule } from './lifecycle/life-cycle.module';
import { RequestModule } from './requests/request.module';
import { DirectivesModule } from './directives/directives.module';
import { PipesModule } from './pipes/pipes.module';
import { ViewStylesModule } from './view-styles/view-styles.module';

@NgModule({
  declarations: [AppComponent, NavigationComponent, EmptyRouteComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    MyCalculatorModule,
    MyObjectListModule,
    LifeCycleModule,
    RequestModule,
    DirectivesModule,
    PipesModule,
    ViewStylesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
