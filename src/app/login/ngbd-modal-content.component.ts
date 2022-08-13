import {Component, Input} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Login</h4>
      <button type="button" class="btn-close" aria-label="Close" (click)="activeModal.dismiss('Cross click')"></button>
    </div>

    <div class="modal-body">
        <input type="text" class="form-control" [formControl]="loginUser" placeholder="Username" aria-label="Username"
               aria-describedby="basic-addon1">
        <br>
        <input type="password" class="form-control" [formControl]="loginPwd" placeholder="Password"
               aria-label="password" aria-describedby="basic-addon1">


    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-primary" (click)="loginOkPressed()">OK</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>

    </div>

  `
})
export class NgbdModalContent {

  @Input() name: any;

  constructor(public activeModal: NgbActiveModal) {
  }
  userName = "dolores.gonzales@example.com"
  userPwd = "peter"
  loggedInStatus = false

  loginUser = new FormControl()
  loginPwd = new FormControl()

  ngOnInit(): void{
    console.log("hello")
  }

loginOkPressed() {
  console.log("fc",this.loginUser.value)
if(this.loginUser.value==this.userName && this.loginPwd==this.loginPwd) { this.loggedInStatus=true}
console.log("logged in status",this.loggedInStatus)
  this.activeModal.close()

}



}
