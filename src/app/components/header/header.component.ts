//components\header\header.component.ts

import { Component, OnInit } from '@angular/core';

declare var particlesJS: any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  title = "angular-header-pokemon";

  constructor() {}

  ngOnInit() {
    particlesJS.load('particles-js', '../../../assets/particles.json', null);
  }

  scrollToBottom(): void {
    //Función que hace scroll hacia abajo 100vh (100% de la altura de la pantalla)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    window.scrollTo({ top: vh, behavior: 'smooth' });
  }
}
