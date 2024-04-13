import { Component, OnInit, Inject, ElementRef } from '@angular/core';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { DOCUMENT } from '@angular/common';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    gsap.registerPlugin(ScrollTrigger);
    this.firstPartAnimations();
    this.secondPartAnimations();
    this.thirdPartAnimations();
    this.fourthPart1Animations();
    this.fourthPart2Animations();
    this.fifthPartAnimations();
    this.sixthPartAnimations();
    this.seventhPartAnimations();
  }

  private firstPartAnimations(): void {

    const titleWords = gsap.utils.toArray(".title .word");
    const paragraphWords = gsap.utils.toArray(".paragraph .word");
  
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

    gsap.from("#textCenter", {
      scaleX: "0",
      transformOrigin: "50% 50%",
      ease: "power2.out",
      duration: 3,
    });
  }

  private secondPartAnimations(): void {
    gsap.utils.toArray<HTMLElement>(".heading, .text2").forEach(element => {
      gsap.from(element, {
        opacity: 0,
        y: "5vh",
        ease: "power2.out",
        duration: 4,
        scrollTrigger: {
          trigger: element,
          start: "top 90%",
          end: "bottom 20%",
          scrub: true,
        }
      });
    });

    gsap.from(".secondpart", {
      scrollTrigger: {
        trigger: ".secondpart",
        start: "top center",
        end: "bottom bottom",
        scrub: true,
      },
      duration: 0.5,
      backgroundColor: "#ffffff",
      ease: "none",
    });

    const imageTimeline = gsap.timeline();
    imageTimeline.from(".image1, .image2", {
      opacity: 0,
      x: -50,
      rotate: 60,
      duration: 5,
    });

    ScrollTrigger.create({
      animation: imageTimeline,
      trigger: ".image1, .image2",
      start: "top 60%",
      end: "bottom bottom",
      scrub: true,
    });
  }

  private thirdPartAnimations(): void {

    
    gsap.to(".main", {
      scrollTrigger: {
        trigger: ".section-two",
        start: "top 50%", // Start when .section-two reaches top 70% of viewport
        end: "bottom bottom",
        scrub: true,
        onUpdate: self => {
          if (self.direction === -1) {
            // If scrolling up
            gsap.to(".main", {
              backgroundColor: "#f5f4e4", // Change back to section-one color
              overwrite: "auto"
            });
          } else {
            // If scrolling down
            gsap.to(".main", {
              backgroundColor: "#ebebcc", // Change to section-two color
              overwrite: "auto"
            });
          }
        }
      }
    });

    gsap.utils.toArray<HTMLElement>(".main .image-container").forEach(element => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 100%",
          end: "top 30%",
          scrub: true,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".main .letter").forEach(element => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      });
    });

    gsap.utils.toArray<HTMLElement>(".main .titles").forEach(element => {
      gsap.from(element, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: element,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      });
    });

    gsap.from(".main .paragraph", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".main .paragraph",
        start: "top 80%",
        end: "top 60%",
        scrub: true,
      },
    });

    gsap.from(".main .image-1", {
      opacity: 0,
      x: -80,
      duration: 5,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".main .image-1",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });

    gsap.from(".main .image-2", {
      opacity: 0,
      x: 80,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: ".main .image-2",
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });
  }

  private fourthPart1Animations(): void {
    const banners = document.querySelectorAll('.banner');

    banners.forEach(banner => {
      gsap.from(banner, {
        y: 90,
        opacity: 0,
        scrollTrigger: {
          trigger: banner,
          start: 'top 80%',
          end: 'bottom 50%',
          scrub: true
        }
      });
    });

    gsap.from(".fourthpart", {
      scrollTrigger: {
        trigger: ".fourthpart",
        start: "top 20%",
        end: "bottom bottom",
        scrub: true,
      },
      duration: 0.5,
      backgroundColor: "#ebebcc",
      ease: "none",
    });
  }

  private fourthPart2Animations(): void {
    gsap.set('.cards__wrapper', { autoAlpha: 1 });

    gsap.timeline({
      defaults: {
        duration: 1.25,
        stagger: 0.125,
        ease: "expo.inOut",
      },
    })
      .fromTo(".card__image--wrapper", { yPercent: 110 }, { yPercent: 0 }, 0)
      .set(".cards__wrapper, .card", { pointerEvents: "all" }, "-=1");

    // Add hover animation
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
      const imageWrapper = card.querySelector('.card__image--wrapper');
      const text = card.querySelector('.card__text');

      gsap.set(imageWrapper, { opacity: 0, scale: 1 }); // Initially hide the image and set scale to 1

      card.addEventListener('mouseenter', () => {
        gsap.to(text, {
          opacity: 0,
          duration: 0.5,
          ease: "power3.out"
        });

        gsap.to(imageWrapper, {
          opacity: 1, // Show the image on mouse enter
          scale: 1.05, // Scale up slightly
          duration: 0.5,
          ease: "power3.out"
        });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(imageWrapper, {
          opacity: 0, // Hide the image on mouse leave
          scale: 1, // Scale back to normal
          duration: 0.5,
          ease: "power3.out"
        });

        gsap.to(text, {
          opacity: 1,
          duration: 0.5,
          ease: "power3.out"
        });
      });

    });
  }


  private fifthPartAnimations():void{

    let workInfoItems = document.querySelectorAll('.work_photo_item');
    workInfoItems.forEach(function(item: any, index: number){
      item.style.zIndex = workInfoItems.length - index;
    });

    gsap.set(".work_photo_item",{
      clipPath: function(){
        return "inset(0px 0px 0px 0px)";
      }
    });

    const animation = gsap.to('.work_photo_item:not(:last-child)',{
      clipPath: function(){
        return "inset(0px 0px 100% 0px)";
      },
      stagger: .5,
      ease: "none"
    });

    ScrollTrigger.create({
      trigger: '.work',
      start: 'top top',
      end: 'bottom bottom',
      animation: animation,
      scrub: 1
    });

    gsap.from(".wrapp", {
      scrollTrigger: {
        trigger: ".wrapp",
        start: "top 30%",
        end: "top top",
        scrub: true,

      },
      duration: 0.5,
      backgroundColor: "#e9ffc7",
      ease: "none",
    });
  }

  private sixthPartAnimations():void{
    const images = document.querySelectorAll(".moveImages");

    images.forEach(image => {
      gsap.set(image, { y: -4 }); // Initial rotation
  
      gsap.to(image, {
        y: 4, // End rotation
        repeat: -1,
        yoyo: true,
        duration: 0.8,
        ease: "power2.inOut",
      });
    });
    gsap.from(".sixthpart", {
      scrollTrigger: {
        trigger: ".sixthpart",
        start: "top 30%",
        end: "top top",
        scrub: true,

      },
      duration: 0.5,
      backgroundColor: "#e3fcbb",
      ease: "none",
    });
  }


  private seventhPartAnimations(){
    const races = document.querySelector(".races")!;

    if (races) {
      function getScrollAmount() {
        let racesWidth = races.scrollWidth;
        return -(racesWidth - window.innerWidth);
      }

      const tween = gsap.to(races, {
        x: getScrollAmount,
        duration: 3,
        ease: "none",
      });

      ScrollTrigger.create({
        trigger: ".racesWrapper",
        start: "top 17%",
        end: () => `+=${getScrollAmount() * - 1}`,
        pin: true,
        animation: tween,
        scrub: 1,
        invalidateOnRefresh: true,
        
      });
    } 
  }
}
