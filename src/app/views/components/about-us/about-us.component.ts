import { Component, OnInit } from '@angular/core';
import { TweenMax, Expo } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    TweenMax.from(".heading", 1.6, {
      delay: .3,
      opacity: 0,
      x: -90,
      ease: Expo.easeInOut
    })

    TweenMax.from(".image1", 1.6, {
      delay: .8,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".heading1", 1.6, {
      delay: 1.2,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".paragraph2", 1.6, {
      delay: 1.5,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })
    TweenMax.staggerFrom(".paragrap3", 1.6, {
      delay: 1.8,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".firstcol", 1.6, {
      delay: 2.2,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })

    TweenMax.from(".secondcol", 1.6, {
      delay: 2.4,
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut
    })
    
    TweenMax.from(".arrow", 1.6, {
      delay: 2.8,
      opacity: 0,
      repeat:-1,
      y: 4,
      yoyo:true,
      ease: "power2.inOut",
    })
    
    TweenMax.from(".heading2", {
      opacity: 0,
      x: -90,
      ease: Expo.easeInOut,
      scrollTrigger: {
        trigger: ".heading2",
        start: "top 75%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });
  
    TweenMax.from(".paragraph3", {
      opacity: 0,
      x: -90,
      ease: Expo.easeInOut,
      scrollTrigger: {
        trigger: ".paragraph3",
        start: "top 75%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });
    TweenMax.from(".icons", {
      opacity: 0,
      x: -90,
      ease: Expo.easeInOut,
      scrollTrigger: {
        trigger: ".icons",
        start: "top 75%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });
    TweenMax.from(".points", {
      opacity: 0,
      x: -90,
      ease: Expo.easeInOut,
      scrollTrigger: {
        trigger: ".points",
        start: "top 75%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });
    TweenMax.from(".image2", {
      opacity: 0,
      y: 90,
      ease: Expo.easeInOut,
      scrollTrigger: {
        trigger: ".image2",
        start: "top 75%",
        end: "bottom top",
        toggleActions: "play none none reverse",
      },
    });
  
    TweenMax.from(".btn-outline-info", {
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
      scrollTrigger: {
        trigger: ".btn-outline-info",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });
  
  
    TweenMax.from(".display-5", {
      opacity: 0,
      y: 20,
      ease: Expo.easeInOut,
      scrollTrigger: {
        trigger: ".display-5",
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    });
  
    TweenMax.from(".left", {
      opacity: 0,
      y: 90,
      ease: Expo.easeInOut,
      scrollTrigger: {
        trigger: ".card",
        start: "top 65%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
      },
    });
    TweenMax.from(".right", {
      opacity: 0,
      y: 90,
      ease: Expo.easeInOut,
      scrollTrigger: {
        trigger: ".card",
        start: "top 65%",
        end: "bottom 50%",
        toggleActions: "play none none reverse",
      },
    });
  }
}