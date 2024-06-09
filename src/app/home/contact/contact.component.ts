import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';
import Swal from 'sweetalert2';
import { Contact } from 'src/app/models/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public contactForm: FormGroup;

  constructor(private fb: FormBuilder, private service: ServicesService) {
    this.myContact();
   }

  ngOnInit(): void {    
  }

    get nameInvalid(){
    return this.contactForm.get('name').invalid && this.contactForm.get('name').touched;
  }

  get emailInvalid(){
    return this.contactForm.get('email').invalid && this.contactForm.get('email').touched;
  }

  get subInvalid(){
    return this.contactForm.get('subject').invalid && this.contactForm.get('subject').touched;
  }

  get messageInvalid(){
    return this.contactForm.get('message').invalid && this.contactForm.get('message').touched;
  }

  myContact(){
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      subject: ['', Validators.required], 
      message: ['', Validators.required]
    });
  }

  send(){

    const contact = new Contact(
      this.contactForm.value.name,
      this.contactForm.value.email,
      this.contactForm.value.subject,
      this.contactForm.value.message
    );

    if (this.contactForm.invalid){
      Swal.fire({
        title: 'Please, complete the Form',
        /* text: 'Please, complete the Form', */
        icon: 'info',
        confirmButtonText: 'OK'
      });
      return;
    }else{
      this.service.sendEmail(contact).subscribe( res => {        
        if (res['resultado'] === '200'){
          Swal.fire({
            title: 'Message sent success',
            text: 'Please, verify your spam or main e-mail',
            icon: 'success',
            showConfirmButton: false,
            timer: 4000
          });
          this.contactForm.reset();
        }else{
          Swal.fire({
            title: 'Error!',
            text: 'Please, try again to send your message later',
            icon: 'error',
            confirmButtonText: 'Try it'
          });
        }
      });
    }
  }

}
