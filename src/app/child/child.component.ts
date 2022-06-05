import { Component, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
    <h2>Child Component</h2>

    <p>Input Decorator:</p>
    <p *ngIf='isLoggedInInput; else loggedOutInput'>Welcome back!</p>
    <ng-template #loggedOutInput>
      <p>Please Login!</p>
    </ng-template>

    <p>Getters and Setters:</p>
    <p>{{gettersAndSettersMessage}}</p>

    <p>ngOnChanges:</p>
    <p>{{ngOnChangesMessage}}</p>

    <p>@Output() Decorator:</p>
    <p>{{parentMessage}}</p>
  `
})
export class ChildComponent implements OnChanges {
  // @Input() Decorator: 

  @Input('isLoggedInInput') public isLoggedInInput: boolean = false;

  // Getters and Setters:

  private _isLoggedInGettersAndSetters: boolean = false;

  get isLoggedInGettersAndSetters(): boolean {
    return this._isLoggedInGettersAndSetters;
  }

  @Input('isLoggedInGettersAndSetters')
  set isLoggedInGettersAndSetters(value: boolean) {
    this._isLoggedInGettersAndSetters = value;
    this.gettersAndSettersMessage = value ? 'Welcome Back!' : 'Please Login!' ;
  }

  public gettersAndSettersMessage: string = 'Please Login!';

  // ngOnChanges:

  @Input('isLoggedInNgOnChanges') public isLoggedInNgOnChanges: boolean = false;

  public ngOnChangesMessage: string = 'Please Login!';

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (changes['isLoggedInNgOnChanges'] !== undefined) {
      this.ngOnChangesMessage = changes['isLoggedInNgOnChanges'].currentValue ? 'Welcome Back!' : 'Please Login!';
    }
  }

  // Template Reference Variables:

  public text: string = 'Hello, World!';

  public alertText() {
    alert(this.text);
  }

  // @ViewChild() decorator:

  public parentMessage: string = '';
}
