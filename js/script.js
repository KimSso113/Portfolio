// splitting
$(function() {
    Splitting();
});


// 헤더 영역 토글 active 기능
$(function() {
    var prevScrollTop = 0;
    document.addEventListener("scroll", function(){
      var nowScrollTop = $(window).scrollTop();
        
        if(nowScrollTop > prevScrollTop){
            $('header').addClass('active');
        } else {
            $('header').removeClass('active');
        }
        prevScrollTop = nowScrollTop;
    })  
});


// scrolla.js
$(function(){
    $('.animate').scrolla({
        mobile: true,
        once: false,
    })
});


//04 svg path 길이 구하기
$(function(){
    $('.svgAni').find('#svgAni01').each(function(i, path){
        var length = path.getTotalLength();
        // alert(length);
    })
})


// .con01 gsap 애니메이션
// $(function() {
//     gsap.timeline({
//         scrollTrigger: {
//             trigger: '.con01',
//             start: '0% 80%',
//             end: '100% 100%',
//             scrub: 1,
//             // markers: true
//         }
//     })
//     .to ('.wrap', {background: '#fff', color: '#000', ease: 'none', duration: 5}, 0)
//     .to ('.svgAni path', {stroke: '#000', ease: 'none', duration: 5}, 0)
//     .to ('.scrollpath', {opacity: '0', ease: 'none', duration: 5}, 0)
//     .fromTo ('.videoWrap video', {'clip-path': 'inset(60% 60% 60% 60% round 30%)'}, {'clip-path': 'inset(0% 0% 0% 0% round 0%)', ease: 'none', duration: 10}, 0)
// });



// .con02 gsap 애니메이션
// title 글자 애니메이션
$(function(){

    gsap.registerPlugin(ScrollTrigger);

    
    gsap.timeline({
        scrollTrigger: {
            trigger: '.con02',
            start: '0% 100%',
            end: '0% 20%',
            scrub: 1,
            // markers: true
        }
    })
    .fromTo ('.con02 .title .a', {x: '-100%'}, {x :'0%', ease: 'none', duration: 5}, 0)
    .fromTo ('.con02 .title .b', {x: '100%'}, {x :'0%', ease: 'none', duration: 5}, 0)


    // workList 나타날때 배경색 검정색으로
    gsap.timeline({
        scrollTrigger: {
            trigger: '.workList',
            start: '0% 100%',
            end: '0% 100%',
            scrub: 1,
            // markers: true
        }
    })
    .to ('.wrap', {background: '#000', color: '#fff', ease: 'none', duration: 5}, 0)

    // title 글자 fixed로 변경
    .to ('.con02 .title', {position: 'fixed', ease: 'none', duration: 5, left: '0', top: '0', width: '100%'}, 0)

    // workList margin-top줘서 자연스럽게 나타나도록
    .fromTo ('.workList', {margin: '0 auto'}, {margin: '100vh auto 0', position: 'relative', zIndex: '10', duration: 1}, 0)

    // workList title이 화면 밖으로 나가는 애니메이션
    gsap.timeline({
        scrollTrigger: {
            trigger: '.workList',
            start: '100% 50%',
            end: '100% 0%',
            scrub: 1,
            markers: true
        }
    })
    .to ('.con02 .title .a', {x: '-100%'},0)
    .to ('.con02 .title .b', {x: '100%'}, 0)
});


$(function() {
    $('.menuOpen').on('click', function(){
        $('.gnb').toggleClass('on');
        $(this).toggleClass('on');
        $('body').toggleClass('on'); //스크롤 방지
    })
});
