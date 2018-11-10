import { Component, OnInit } from '@angular/core';

import { HostListener } from '@angular/core'

import { AppService } from './services/app.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'Daniel Andrés'

  container:any
  footer:any
  nav:any

  menu:any

  constructor(
    private appService:AppService
  ){
    this.menu = this.appService.getMenu()
  }

  ngOnInit(){

    this.resizePage()
  }

  resizePage(){

    this.container = this.appService.element('.container')
    this.footer = this.appService.element('footer')
    this.nav = this.appService.element('nav')

    let scrollY = this.appService.getScroll('y')
    this.container.node.style.minHeight = this.appService.getSize('h')
    if(scrollY > 1){
      this.nav.node.style.height = `64px`
    }else{
      this.nav.node.style.height = `calc(${this.appService.getSize('h')} - ${this.footer.size.h})`
    }
  }

  @HostListener('window:resize', ['$event'])
  doSomethingOnInternalScroll($event:Event){
    this.resizePage()
  }

  @HostListener('window:scroll', ['$event'])
  doResizeWindow($event:Event){
    this.resizePage()
  }

}
