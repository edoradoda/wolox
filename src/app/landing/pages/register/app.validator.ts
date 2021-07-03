import { FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export const validarQueSeanIguales: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmarPassword = control.get('confirmarPassword');
if(password==null){
  return { 'noSonIguales': true }
}else{
    return password.value === confirmarPassword.value ? null : { 'noSonIguales': true };

}
};