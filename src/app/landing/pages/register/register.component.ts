
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { WoloxService } from 'src/app/services/wolox.service';
import { validarQueSeanIguales } from './app.validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  // Form_ = new FormGroup({
  //   name: new FormControl(''),
  //   apellido: new FormControl(''),
  //   pais: new FormControl(''),
  //   email: new FormControl(''),
  //   telefono: new FormControl(''),
  //   password: new FormControl(''),
  //   terminos: new FormControl(''),
  //   confirmarPassword: new FormControl(''),
  // });

   
  Form_: FormGroup;
  spinnerButton = false;
  addButtonRulerFw = false;
  messageError = '';
  messageSuccess = '';

  keyword = 'name';
  data = [];
  validPattern = "^[a-zA-Z0-9]*$";
  validPatternNum = "^[0-9]*$";
  capital: any;

  constructor(
      private httpServices: AuthService,
      private woloxService: WoloxService,
      private router: Router,
      private formBuilder: FormBuilder,
    ) {
      this.Form_=this.createFormGroup();
      this.loadCountry();
    
  }

  ngOnInit() {
  }

  createFormGroup() {
    return this.formBuilder.group({
      name:['',[Validators.required, Validators.maxLength(30)]],
      apellido:['',[Validators.required, Validators.maxLength(30)]],
      pais:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      telefono:['',[Validators.required, Validators.maxLength(10),Validators.pattern(this.validPatternNum)]],
      password:['',[Validators.required, Validators.minLength(6),Validators.pattern(this.validPattern)]],
      terminos:['',[Validators.required]],
      confirmarPassword:['',[Validators.required]],
    },{
      validators: validarQueSeanIguales
    });

    }

  onSaveForm(){
    this.messageError="";
    this.messageSuccess="";
    this.addButtonRulerFw=false;
    if(this.Form_.valid){
        this.spinnerButton=true;
        var  user={
                  name: this.Form_.value.name,
                  last_name: this.Form_.value.apellido,
                  country: this.Form_.value.pais,
                  province: this.capital,
                  mail: this.Form_.value.email,
                  phone: this.Form_.value.telefono,
                  password: this.Form_.value.password
                  };
        this.httpServices.register(user).subscribe(
          (data: any) => {
              this.spinnerButton=false;
              this.messageError="";

            console.log("result=",data);
            if(data.token!=null){
              localStorage.setItem('token',data.token);
              this.messageSuccess="Registro exitoso!";
              setTimeout(function() {
                this.messageSuccess="";
                this.router.navigate(['/land']);
              }.bind(this), 3000);
            }else{
              this.messageError="Registro Fallido";
              this.spinnerButton=false;
            }
          },
          (error: any) => {
            this.messageError="La Api en wolox no responde";
            this.spinnerButton=false;
          },
      );//end loginService
    }else{
      console.log('No Valid')  // aqui van los valores a enviar al servicio
    }

  }
  
loadCountry() {
  this.woloxService.getCountry().subscribe(
    (data: any) => {
      // console.log("countrys",data)
      this.data=data
    },
    (error: any) => {
      this.messageError="El api de Country no responde";
      this.spinnerButton=false;
    },
  );//end saveFormVpn
}

  get name(){
    return this.Form_.get('name');
  }

  get apellido(){
    return this.Form_.get('apellido');
  }

  get pais(){
    return this.Form_.get('pais');
  }

  get email(){
    return this.Form_.get('email');
  }

  get telefono(){
    return this.Form_.get('telefono');
  }

  get password(){
    return this.Form_.get('password');
  }

  selectEvent(item) {
    // do something with selected item
    this.capital=item.capital
  }

  onChangeSearch(val: string) {
    // fetch remote data from here
    // And reassign the 'data' which is binded to 'data' property.
  }
  
  onFocused(e){
    // do something when input is focused
  }


  checarSiSonIguales(): boolean {
    return this.Form_.hasError('noSonIguales') &&
      this.Form_.get('password').dirty &&
      this.Form_.get('confirmarPassword').dirty;
  }


}

