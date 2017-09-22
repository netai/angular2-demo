import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';

@NgModule({
  imports: [UserModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }