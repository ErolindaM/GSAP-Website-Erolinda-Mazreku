import { Component, OnInit } from '@angular/core';
import gsap from 'gsap';
import { TweenMax, Expo } from 'gsap';


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.firstPartAnimations();
  }

  private firstPartAnimations():void{

    const titleWords = gsap.utils.toArray(".title .word");
    const paragraphWords=gsap.utils.toArray(".paragraph1 .word");

    gsap.set([titleWords, paragraphWords], { autoAlpha: 1 });

    gsap.from(titleWords, {
      duration: 1,
      y: 50,
      autoAlpha: 0,
      ease: "power2.out",
      stagger: 0.5,
    });

    gsap.from(paragraphWords, {
      duration: 1,
      y: 50,
      autoAlpha: 0,
      ease: "power2.out",
      stagger: 0.2,
    });

    TweenMax.from(".secondpart", 1.6, {
      delay: .3,
      opacity: 0,
      x: -90,
      ease: Expo.easeInOut
    })
    
    TweenMax.from(".location", 1.6, {
      delay: 1.2,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })
    TweenMax.from(".phone", 1.6, {
      delay: 1.5,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })
    TweenMax.from(".email", 1.6, {
      delay: 1.5,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })
    TweenMax.staggerFrom(".hours", 1.6, {
      delay: 1.8,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })
  }
}
