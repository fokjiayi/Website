// Typing effect
var i = 0;
var txt = 'Hi, my name is Jia Yi 👋'; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("title").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
typeWriter();

// function to store the current tab that the user was on
function storeCurrTab(tabname){
  localStorage.setItem("currTab", tabname);
}

var curr = localStorage.getItem("currTab");
console.log("current tab:", curr)
// var triggerEl = document.querySelector('#v-pills-tab button[data-bs-target="#v-pills-'+curr+'"]');
// var tabTrigger = new bootstrap.Tab(triggerEl)
// tabTrigger.show() // Select tab by name
var someTabTriggerEl = document.querySelector('#v-pills-tab button[data-bs-target="#v-pills-'+curr+'"]')
var tab = new bootstrap.Tab(someTabTriggerEl)

tab.show()



/*Portfolio skills bar jquery*/
var offsetTop = $('#v-pills-aboutme').offset().top;
$(window).scroll(function() {
var height = $(window).height();
if($(window).scrollTop()+height > offsetTop) {
  jQuery('.skillbar').each(function(){
    jQuery(this).find('.skillbar-bar').animate({
      width:jQuery(this).attr('data-percent')
    },2000);
  });
}
});
// $(document).ready(function () {
//     $('.skillbar').each(function () {
//         $(this).find('.skillbar-bar').animate({
//             width: $(this).attr('data-percent')
//         }, 4000);
//     });
// });

// window.smoothScroll = function(target) {
//     var scrollContainer = target;
//     do { //find scroll container
//         scrollContainer = scrollContainer.parentNode;
//         if (!scrollContainer) return;
//         scrollContainer.scrollTop += 1;
//     } while (scrollContainer.scrollTop == 0);

//     var targetY = 0;
//     do { //find the top of target relatively to the container
//         if (target == scrollContainer) break;
//         targetY += target.offsetTop;
//     } while (target = target.offsetParent);

//     scroll = function(c, a, b, i) {
//         i++; if (i > 30) return;
//         c.scrollTop = a + (b - a) / 30 * i;
//         setTimeout(function(){ scroll(c, a, b, i); }, 15);
//     }
//     // start scrolling
//     scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
// }
// function checkVisible(elm) {
//   var rect = elm.getBoundingClientRect();
//   var viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
//   return !(rect.bottom < 0 || rect.top - viewHeight >= 0);
// }


// ele = document.getElementById("v-pills-aboutme");

// // console.log(ele.classList.contains("active"));
// setInterval(function() {
//   // method to be executed;
//   if (ele.classList.contains("active")){
//     console.log("one")
//   }
// }, 1000);


// $(document).ready(function () {
  // if (ele.classList.contains("active")){
    // $('.skill-box').find('b').each(function (i) {
    //   return $(this).prop('Counter', 0).animate({
    //     Counter: $(this).parent().data('percent')
    //   }, {
    //     duration: 1000,
    //     easing: 'swing',
    //     step(now) {
    //       return $(this).text(Math.ceil(now) + '%');
    //     }
    //   });
    // });
  
    // return $('.skill-box .skills-circle li').each(function (i) {
    //   const _right = $(this).find('.bar-circle-right');
    //   const _left = $(this).find('.bar-circle-left');
    //   const _percent = $(this).attr('data-percent');
    //   let deg = 3.6 * _percent;
    //   if (_percent <= 50) {
    //     return _right.animate({
    //       circle_rotate: deg
    //     }, {
    //       step(deg) {
    //         $(this).css('transform', `rotate(${deg}deg)`);
    //       },
    //       duration: 1000
    //     });
    //   } else {
    //     const full_deg = 180;
    //     deg -= full_deg;
    //     let run_duration = 1000 * (50 / _percent);
    //     return _right.animate({
    //       circle_rotate: full_deg
    //     }, {
    //       step(full_deg) {
    //         $(this).css('transform', `rotate(${full_deg}deg)`);
    //       },
    //       duration: run_duration,
    //       easing: 'linear',
    //       complete() {
    //         run_duration -= 1000;
    //         _left.css({
    //           'clip': 'rect(0, 150px, 150px, 75px)',
    //           'background': '#04b3d5'
    //         });
    //         return _left.animate({
    //           circle_rotate: deg
    //         }, {
    //           step(deg) {
    //             $(this).css('transform', `rotate(${deg}deg)`);
    //           },
    //           duration: Math.abs(run_duration),
    //           easing: 'linear'
    //         });
    //       }
    //     });
    //   }
    // });

  // }
  // });