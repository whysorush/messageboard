import { NgModule } from '@angular/core';
import{ RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './messages.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import{ MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatFormFieldControl} from '@angular/material/form-field';


import { ReactiveFormsModule } from '@angular/forms';
import { WebService } from './web.service';
import { AuthService } from './auth.service'
import{ HttpModule } from '@angular/http';
import {NewMessageComponent} from './new-message.component';
import {FormsModule} from '@angular/forms';
import { NavComponent } from './nav.component';
import {HomeComponent} from './home.component';
import {RegisterComponent} from './register.component';
import {LoginComponent} from './login.component';
import {UserComponent} from './user.component'


import { from } from 'rxjs';

var routes = [
  {
  path: '',
  component : HomeComponent
},
{
  path: 'messages',
  component : MessageComponent
},
{
  path: 'messages/:name',
  component : MessageComponent
},
{
  path: 'register',
  component : RegisterComponent
}   ,
{
  path: 'login',
  component : LoginComponent
},
{
  path: 'user',
  component : UserComponent
}    

];

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    NewMessageComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    UserComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule ,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    // MatFormFieldControl,
    HttpModule,
    FormsModule ,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [WebService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

// function forRoot(routes: any[]): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
//   throw new Error('Function not implemented.');
// }

