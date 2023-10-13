import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent {
constructor(private _FormBuilder:FormBuilder){}
checkForm:FormGroup = this._FormBuilder.group({
  details:[''],
  phone:[''],
  city:['']
})


handleForm():void{
  console.log(this.checkForm.value);

}

}
