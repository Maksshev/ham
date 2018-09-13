let squareDivs = $('#section2 div');
let filters = ['graphic', 'web', 'landing', 'wordpress', 'section5_img img'];
for (let i = 0; i < squareDivs.length; i++) {
    let width = $(squareDivs[i]).width();
    $(squareDivs[i]).height(`${0.78*width}`);
}
let imgBlock = $('.section5_img');
let filterButtons = $('#filter_buttons div');
let loadMore = $('.load_more');
let clickCount = 0;
let imgBlockOffset = $(imgBlock).offset().top;
let ourServiceMenu = $('#our_services_menu');
let ourServiceMenuDivs = $('#our_services_menu div');
let ourServicesContent = $('#our_services_content');
let ourServicesContentDivs = $('#our_services_content div');
let ourServiceImg = $('#our_services_content > div img');
let ourServiceText = $('#our_services_content > div div');
let text0 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let text1 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in';
let text2 = 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simpl';
let text3 = 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.';
let text4 = 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by.';
let text5 = 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it ther.';
let textArray = [text0, text1, text2, text3, text4, text5];

for (let i = 0; i <= 5; i++) {
    $(ourServicesContent).append(`
        
        <div id="${i}" class="ourServiceMenu">
            <img src="img/menu${i}.jpg" alt="">
            <div>${textArray[i]}</div>
        </div>
    `)
}


$('.ourServiceMenu').height(0);

$('#0').height(194);



$(ourServiceMenu).click(function (e) {
    if (e.target !== this) {
        if (!$(e.target).hasClass('arrowOnClick')) {
            $(ourServiceMenuDivs).each(function () {
                if ($(this) !== $(e.target)) {
                    $(this).removeClass('arrowOnClick');
                    $(this).addClass('offClick');
                }
            });
            $(e.target).removeClass('offClick');
            $(e.target).addClass('arrowOnClick');
            if ($(e.target).text() === 'Web Design') {
                $('.ourServiceMenu:not(#0)').animate({height: '0'}, 500);
                $('#0').animate({height: '194px'}, 500);
            } else if ($(e.target).text() === 'Graphic Design') {
                $('.ourServiceMenu:not(#1)').animate({height: '0'}, 500);
                $('#1').animate({height: '194px'}, 500);
            } else if ($(e.target).text() === 'Online Support') {
                $('.ourServiceMenu:not(#2)').animate({height: '0'}, 500);
                $('#2').animate({height: '194px'}, 500);
            } else if ($(e.target).text() === 'App Design') {
                $('.ourServiceMenu:not(#3)').animate({height: '0'}, 500);
                $('#3').animate({height: '194px'}, 500);
            } else if ($(e.target).text() === 'Online Marketing') {
                $('.ourServiceMenu:not(#4)').animate({height: '0'}, 500);
                $('#4').animate({height: '194px'}, 500);
            } else if ($(e.target).text() === 'Seo Service') {
                $('.ourServiceMenu:not(#5)').animate({height: '0'}, 500);
                $('#5').animate({height: '194px'}, 500);
            }
        }
    }
    e.stopPropagation();
});






for (let i = 1; i <= 36; i++) {
    let filter = filters[Math.floor(Math.random()*4)];
    $('.section5_img').append(`<img class="${filter}" src="img/am_work/im${i}.jpg">`);
    showFilter(4);
}

$('#filter_buttons').click(function (e) {
    if (e.target !== this) {
        if (!$(e.target).hasClass('filter_selected')) {
            $('#filter_buttons div').each(function () {
                if ($(this) !== $(e.target)) {
                    $(this).removeClass('filter_selected');
                    $(this).addClass('filter_unselected');
                }
            });
            $(e.target).removeClass('filter_unselected');
            $(e.target).addClass('filter_selected');
            if ($(e.target).text() === 'Graphic Design') {
                $('.section5_img img').hide();
                showFilter(0);
            } else if ($(e.target).text() === 'Web Design') {
                $('.section5_img img').hide();
                showFilter(1);
            } else if ($(e.target).text() === 'Landing Pages') {
                $('.section5_img img').hide();
                showFilter(2);
            } else if ($(e.target).text() === 'Wordpress') {
                $('.section5_img img').hide();
                showFilter(3);
            } else {
                $('.section5_img img').hide();
                showFilter(4);
            }

        }
    }
    e.stopPropagation();
});





function showFilter(selector) {
    $(`.${filters[selector]}`).slice(0, 12).fadeIn();
    if ($(`.${filters[selector]}:hidden`).length === 0) {
        $(".load_more").css('visibility', 'hidden');
    } else {
        $(".load_more").css('visibility', 'visible');
    }
    $('.load_more').off('click');
    $(".load_more").on('click', function (e) {
        e.preventDefault();
        $('.load_more').hide();
        $('.lds-circle').css('display', 'inline-block');
        setTimeout(function () {
            $('.load_more').show();
            $('.lds-circle').css('display', 'none');
            $(`.${filters[selector]}:hidden`).slice(0, 12).slideDown();
            if ($(`.${filters[selector]}:hidden`).length === 0) {
                $(".load_more").css('visibility', 'hidden');
            }
                let offset = $('.load_more').offset().top;
                let offsetDf = offset - 680;
                $('html,body').animate({
                    scrollTop: `${offsetDf}`
                }, 1500);
        }, 2000);

    });
}

let interval;
let timeCount;
let filterName;



$('.section5_img img').mouseenter(function (e) {
        if ($(this).is(':visible')) {
            let timeNow = Date.now();
            interval = setInterval(function () {
                timeCount = Date.now() - timeNow;
            }, 1);
            filterName = $(this).attr('class');
            $('#hoverImg').finish('mouseleave');
            let imgOffset = $(this).offset();
            $('#hoverImg').offset(imgOffset);
            setTimeout(function () {
                if (timeCount > 1500) {
                    let filterText;
                    if (filterName === 'graphic') {
                        filterText = 'Graphic Design';
                    } else if (filterName === 'web') {
                        filterText = 'Web Design';
                    } else if (filterName === 'landing') {
                        filterText = 'Landing Pages';
                    } else if (filterName === 'wordpress') {
                        filterText = 'Wordpress';
                    }
                    $('#hoverImg div > span:last-of-type').text(filterText);
                    $('#hoverImg').animate({height: '210px', width: '290px'}, 600);
                }

            }, 1600);
        }
}).mouseleave(function () {
    clearInterval(interval);
    timeCount = 0;
});



$('#hoverImg').mouseleave(function (e) {
    clearInterval(interval);
    timeCount = 0;
    $('#hoverImg').finish();
    $(this).css({top: '0', left: '0', height: '0', width: '0'});

});


$('.bnews').mouseenter(function (e) {
    $(this).find('.text_bnews > span').text('Amazing Image Post');
}).mouseleave(function (e) {
    $(this).find('.text_bnews > span').text('Amazing Blog Post');
});


for (let i = 1; i <= 5; i++) {
    $('.slide_menu').append(`
        <div class="g${i} slide_big_circle">
            <div id="gi${i}" class="slide_little_circle">
                <img class="small_img" src="img/gallery/wp${i}.jpg">
            </div>
        </div>
    `);
    $(`.g${i}`).css('order', `${i}`);
}

function showOrder() {
    let imgClass;
    $('#bigImg .slide_big_circle').each(function () {
        if ($(this).css('order') !== '3') {
            $(this).hide();
        } else {
            $(this).fadeIn(2400);
            $(this).find('.slide_little_circle').css({border: '2px solid #18cfab'});
            imgClass = $(this).attr('class');
        }
    });
    $('#slider .slide_big_circle').each(function () {
        if ($(this).attr('class') === imgClass) {
            $(this).animate({bottom: '+=15'});
            $(this).find('.slide_little_circle').css({border: '2px solid #18cfab'});
        } else {
            $(this).animate({bottom: '0'});
            $(this).find('.slide_little_circle').css({border: '2px solid rgba(11, 52, 46, 0.5)'});
        }
    })
}

showOrder();

// let firstImg = $('#slider .g3');

// $(firstImg).css('bottom', '15px');
// $(firstImg).find('.slide_little_circle').css({border: '2px solid #18cfab'});


$('#slider .slide_big_circle').click(function () {
    let current;
    let swap;
    let currentOrder = $(this).css('order');
    if (currentOrder!== '3') {
        $('#slider .slide_big_circle').each(function () {
            if ($(this).css('order') === '3') {
                $(this).animate({width: '0'}, 600, function () {
                    $(this).css('order', `${currentOrder}`);
                });
                $(this).animate({width: '60px'}, 600);
            }
        });
        $(this).slideUp('slow', function () {
            $(this).css('order', '3');
        });
        $(this).slideDown('slow');
        $('#bigImg .slide_big_circle').each(function () {
            if ($(this).css('order') === `${currentOrder}`) {
                current = this;
            } else if ($(this).css('order') === '3') {
                swap = this;
            }
        });
        $(current).css('order', '3');
        $(swap).css('order', `${currentOrder}`);
        showOrder();
    }

})









































