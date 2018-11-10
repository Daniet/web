import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  d:any = document
  n:any = navigator
  w:any = window

  constructor(){ }

  element(tag:string){
    let node = this.d.querySelector(tag)
    return {
      node: node,
      size:{
        w: `${node.offsetWidth}px`,
        h: `${node.offsetHeight}px`
      }
    }
  }

  selector(element:string){
    return this.d.querySelectorAll(element)
  }

  getMenu(){
    return [{
      href: '',
      ico: 'face',
      name: 'Perfil'
    },{
      ico: 'widgets',
      href: '/folder',
      name: 'Portafolio'
    },{
      ico: 'business',
      href: '/working',
      name: 'Trabajos'
    },{
      ico: 'contacts',
      name: 'Redes sociales',
      href: '/social networks'
    }]
  }

  getScroll(cor:string = null){
    let x = window.scrollX
    let y = window.scrollY
    if(cor == 'x'){
      return x
    }else if(cor == 'y'){
      return y
    }else{
      return {
        x: x,
        y: y
      }
    }
  }

  getSize(dim:string = null){
    if(dim == 'w'){
      return `${this.w.innerWidth}px`
    }else if(dim  == 'h'){
      return `${this.w.innerHeight}px`
    }else{
      return {
        w: `${this.w.innerWidth}px`,
        h: `${this.w.innerHeight}px`
      }
    }
  }

}
