import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { TitleComponent } from './title/title.component';
import { ItemListComponent } from './item-list/item-list.component';
import { TotService } from './tot.service';

@NgModule({
  imports: [SharedModule.forRoot()],
  declarations: [TitleComponent, ItemListComponent],
  exports: [TitleComponent, ItemListComponent],
  providers: [TotService]
})
export class CoreModule {

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only!');
    }
  }
}
