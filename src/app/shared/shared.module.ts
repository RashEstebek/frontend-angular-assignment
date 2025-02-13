import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { HighlightDemoComponent } from './highlight-demo/highlight-demo.component';
import { SharedModuleRouting } from './shared-routing.module';
import { RxjsDemoComponent } from './rxjs-demo/rxjs-demo.component';

@NgModule({
  declarations: [HighlightDemoComponent, RxjsDemoComponent], 
  imports: [CommonModule, SharedModuleRouting, HighlightDirective],
  providers: [RxjsDemoComponent]
})
export class SharedModule {}
