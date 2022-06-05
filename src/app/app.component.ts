import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  template: `
    <h1>Parent Component</h1>

    <p>Getters And Setters Buttons:</p>
    <button (click)='isLoggedInGettersAndSetters=true'>Login</button>
    <button (click)='isLoggedInGettersAndSetters=false'>Logout</button>

    <p>ngOnChanges Buttons:</p>
    <button (click)='isLoggedInNgOnChanges=true'>Login</button>
    <button (click)='isLoggedInNgOnChanges=false'>Logout</button>

    <app-child #child [isLoggedInInput]='isLoggedInInput' [isLoggedInGettersAndSetters]='isLoggedInGettersAndSetters' [isLoggedInNgOnChanges]='isLoggedInNgOnChanges'></app-child>

    <p>Template reference variables:</p>
    <p>{{child.text}}</p>
    <button (click)='child.alertText()'>Alert</button>
  `
})
export class AppComponent implements AfterViewInit {
  public isLoggedInInput: boolean = false;
  public isLoggedInGettersAndSetters: boolean = false;
  public isLoggedInNgOnChanges: boolean = false;

  // @ViewChild Decorator:

  @ViewChild(ChildComponent) public childComponentRef: ChildComponent = new ChildComponent();

  ngAfterViewInit() {
    // SetTimeout was called to prevent an error message in the debugger:
    setTimeout(() => {
      this.childComponentRef.parentMessage = 'Message from parent component';
    }, 100);
  }
}
