import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  validationToken: boolean = false;
  user = 'Lucas Gabriel'
  userIconText = ""

  validation(){
    this.validationToken = !this.validationToken;
    console.log(this.validationToken);
    this.userIconText = this.getLetters(this.user);
  }

  getLetters(user: string){
    const letters = user.split(' ').map(word => word.charAt(0)).join('');
    return letters;
  }
}
