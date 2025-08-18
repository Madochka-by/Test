import { NgModule } from '@angular/core';
import { MyCalculatorComponent } from './my-calculator.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [FormsModule, CommonModule, BrowserModule],
  exports: [MyCalculatorComponent],
  declarations: [MyCalculatorComponent],
  providers: [],
})
export class MyCalculatorModule {}
