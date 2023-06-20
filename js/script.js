document.addEventListener("DOMContentLoaded", () => {
  (function scroll() {
    window.addEventListener("scroll", () => {
      let header = document.querySelector(".header");
      let height_header = header.offsetHeight;
      let windowY = window.scrollY;
      if (windowY >= height_header) {
        header.classList.add("_header-scroll");
      } else {
        header.classList.remove("_header-scroll");
      }
    });
  })(),
    setTimeout(() => {
      if (document.documentElement.clientWidth < 769) {
        (function spollers() {
          const spollers = document.querySelectorAll(".spollers");

          spollers.forEach((item) => {
            item.addEventListener("click", (e) => {
              self = e.currentTarget;
              let spoller = self.querySelector(".spoller");
              let cardTop = self.querySelector(".card-service__top");
              let spanIcon = self.querySelector(".icon-arrow-down");
              self.classList.toggle("spollers-parent");
              spoller.classList.toggle("open");
              if (spanIcon) {
                spanIcon.classList.toggle("open");
              }
              if (cardTop) {
                cardTop.classList.toggle("open");
              }

              if (spoller.style.maxHeight) {
                spoller.style.maxHeight = null;
              } else {
                spoller.style.maxHeight = spoller.scrollHeight + "px";
              }
            });
          });
        })();
      }

      (function video() {
        const videoBody = document.querySelector(".video__body");
        videoBody.addEventListener("click", (e) => {
          let self = e.currentTarget;
          let image = self.querySelector(".video__image");
          let videoBottom = self.querySelector(".video__bottom");
          let videoInfo = self.querySelector(".video__info");
          if (self.classList.contains("playing")) {
            return;
          } else {
            self.classList.add("playing");
            image.classList.add("playing");
            videoBottom.classList.add("playing");
            videoInfo.classList.add("playing");
          }
          const t = videoBody.dataset.videoSrc;
          self.insertAdjacentHTML(
            "afterbegin",
            '<iframe src="https://www.youtube.com/embed/' +
              t +
              '?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
          );
        });
      })(),
        (function slider() {
          const swiper = new Swiper(".swiper", {
            // Optional parameters
            direction: "horizontal",
            loop: true,
            autoplay: true,

            // If we need pagination
            pagination: {
              el: ".swiper-pagination",
            },
          });
        })();
    }, 1000);

  (function scrollAnimation() {
    const animationBlocks = document.querySelectorAll("[data-animation]");
    let observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    animationBlocks.forEach((block) => {
      observer.observe(block);
    });
  })(),
    (function burger() {
      let iconMenu = document.querySelector(".icon-menu");
      let body = document.querySelector("body");
      const menuBody = document.querySelector(".menu__body");
      if (iconMenu) {
        iconMenu.addEventListener("click", function (e) {
          let top = document.body.style.top;
          menuBody.classList.toggle("_active");
          document.documentElement.classList.toggle("menu-open");
          if (menuBody.classList.contains("_active")) {
            body.style.position = "fixed";
            top = `-${window.scrollY}px`;
          } else {
            body.style.position = "";
            body.style.top = "";
            window.scrollTo(0, parseInt(scrollY || "0") * -1);
          }
        });
        //При нажатии на ссылки в меню, меню-бургер закрывается
        menuBody.addEventListener("click", (e) => {
          if (e.target.classList.contains("menu__link")) {
            menuBody.classList.remove("_active");
            body.style.position = "";
            document.documentElement.classList.remove("menu-open");
          }
        });
      }
    })();
});
