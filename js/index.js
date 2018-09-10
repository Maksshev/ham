let squareDivs = $('#section2 div');
for (let i = 0; i < squareDivs.length; i++) {
    let width = $(squareDivs[i]).width();
    $(squareDivs[i]).height(`${0.78*width}`);
}
let imgBlock = $('#section5_img');
let filterButtons = $('#filter_buttons div');
let loadMore = $('.load_more');
let clickCount = 0;
let imgBlockOffset = $(imgBlock).offset().top;

let ourServiceMenu = $('#our_services_menu div');
let ourServiceImg = $('#our_services_content img');
let ourServiceText = $('#our_services_content div');
let text1 = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adip isicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
let text2 = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in';
let text3 = 'Li Europan lingues es membres del sam familie. Lor separat existentie es un myth. Por scientie, musica, sport etc, litot Europa usa li sam vocabular. Li lingues differe solmen in li grammatica, li pronunciation e li plu commun vocabules. Omnicos directe al desirabilite de un nov lingua franca: On refusa continuar payar custosi traductores. At solmen va esser necessi far uniform grammatica, pronunciation e plu sommun paroles. Ma quande lingues coalesce, li grammatica del resultant lingue es plu simplic e regulari quam ti del coalescent lingues. Li nov lingua franca va esser plu simplic e regulari quam li existent Europan lingues. It va esser tam simplic quam Occidental in fact, it va esser Occidental. A un Angleso it va semblar un simpl';
let text4 = 'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.';
let text5 = 'A wonderful serenity has taken possession of my entire soul, like these sweet mornings of spring which I enjoy with my whole heart. I am alone, and feel the charm of existence in this spot, which was created for the bliss of souls like mine. I am so happy, my dear friend, so absorbed in the exquisite sense of mere tranquil existence, that I neglect my talents. I should be incapable of drawing a single stroke at the present moment; and yet I feel that I never was a greater artist than now. When, while the lovely valley teems with vapour around me, and the meridian sun strikes the upper surface of the impenetrable foliage of my trees, and but a few stray gleams steal into the inner sanctuary, I throw myself down among the tall grass by.';
let text6 = 'One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. "What\'s happened to me?" he thought. It wasn\'t a dream. His room, a proper human room although a little too small, lay peacefully between its four familiar walls. A collection of textile samples lay spread out on the table - Samsa was a travelling salesman - and above it ther.';
for (let i = 0; i < ourServiceMenu.length; i++) {
    $(ourServiceMenu[i]).click(function () {
        if (!$(this).hasClass('arrowOnClick')) {
            $(this).addClass('arrowOnClick');
            for (let i = 0; i < ourServiceMenu.length; i++) {
                if ($(ourServiceMenu[i]).text() !== $(this).text() && $(ourServiceMenu[i]).hasClass('arrowOnClick')) {
                    $(ourServiceMenu[i]).removeClass('arrowOnClick');
                    $(ourServiceMenu[i]).addClass('offClick');
                }
            }
            if ($(this).text() === 'Graphic Design') {
                $(ourServiceImg).attr('src', 'img/menu1.jpg');
                $(ourServiceText).text(text2);
            } else if ($(this).text() === 'Online Support') {
                $(ourServiceImg).attr('src', 'img/menu2.jpg');
                $(ourServiceText).text(text3);
            } else if ($(this).text() === 'App Design') {
                $(ourServiceImg).attr('src', 'img/menu3.jpg');
                $(ourServiceText).text(text4);
            } else  if ($(this).text() === 'Online Marketing') {
                $(ourServiceImg).attr('src', 'img/menu4.jpg');
                $(ourServiceText).text(text5);
            } else  if ($(this).text() === 'Seo Service') {
                $(ourServiceImg).attr('src', 'img/menu5.jpg');
                $(ourServiceText).text(text6);
            } else {
                $(ourServiceImg).attr('src', 'img/our_services.jpg');
                $(ourServiceText).text(text1);
            }
        }

    })
}



function all() {
    $(imgBlock).height('630px');
    $('#section5').height('1212px');
    for (let i = 1; i <= 36; i++) {
            $(imgBlock).append(`<img src="img/am_work/im${i}.jpg" alt="">`);
        }
    }

function webDesign() {
    $(imgBlock).height('630px');
    $('#section5').height('1212px');
    for (let i = 0; i <= 36; i += 2) {
        $(imgBlock).append(`<img src="img/am_work/im${i}.jpg" alt="">`);
    }
}

function graphicDesign() {
    $(imgBlock).height('630px');
    $('#section5').height('1212px');
    for (let i = 10; i <= 36; i++) {
        $(imgBlock).append(`<img src="img/am_work/im${i}.jpg" alt="">`);
    }
}

function landingPages() {
    $(imgBlock).height('630px');
    $('#section5').height('1212px');
    for (let i = 12; i <= 36; i+=2) {
        $(imgBlock).append(`<img src="img/am_work/im${i}.jpg" alt="">`);
    }
}

function appDesign() {
    $(imgBlock).height('630px');
    $('#section5').height('1212px');
    for (let i = 1; i <= 36; i+=3) {
        $(imgBlock).append(`<img src="img/am_work/im${i}.jpg" alt="">`);
    }
}

function wordPress() {
    $(imgBlock).height('630px');
    $('#section5').height('1212px');
    for (let i = 4; i <= 36; i+=4) {
        $(imgBlock).append(`<img src="img/am_work/im${i}.jpg" alt="">`);
    }
}

function seoService() {
    $(imgBlock).height('630px');
    $('#section5').height('1212px');
    for (let i = 5; i <= 36; i+=5) {
        $(imgBlock).append(`<img src="img/am_work/im${i}.jpg" alt="">`);
    }
}

all();


for (let i = 0; i < filterButtons.length; i++) {
    $(filterButtons[i]).click(function () {
        if (!$(this).hasClass('filter_selected')) {
            clickCount = 0;
            $(this).removeClass('filter_unselected');
            $(this).addClass('filter_selected');
            for (let j = 0; j < filterButtons.length; j++) {
                if ($(filterButtons[j]).text() !== $(this).text() && $(filterButtons[j]).hasClass('filter_selected')) {
                    $(filterButtons[j]).removeClass('filter_selected');
                    $(filterButtons[j]).addClass('filter_unselected');
                }
            }
            if ($(this).text() === 'All') {

                $(imgBlock).html('');
                all();
            } else if ($(this).text() === 'Graphic Design') {
                $(imgBlock).html('');
                graphicDesign();
            } else if ($(this).text() === 'Web Design') {
                $(imgBlock).html('');
                webDesign();
            } else if ($(this).text() === 'Landing Pages') {
                $(imgBlock).html('');
                landingPages();
            } else if ($(this).text() === 'Wordpress') {
                $(imgBlock).html('');
                wordPress();
            }
            let imgCount = $('#section5_img img').length/12;
            if (imgCount <= 1) {
                $(loadMore).removeClass('load_more');
                $(loadMore).addClass('load_more_hide');
            } else {
                $(loadMore).removeClass('load_more_hide');
                $(loadMore).addClass('load_more');
            }
        }
    })
}



$(loadMore).click(function () {
   let imgCount = $('#section5_img img').length;
   let maxClicks = Math.ceil(imgCount/12) - 1;
   let heightImgBlock = $(imgBlock).height();
   let sectionHeight = $('#section5').height();
   let updatedHeight = sectionHeight + 670;
   $('#section5').height(`${updatedHeight}px`);
   let scrollToTheEnd = imgBlockOffset + heightImgBlock + 33;
   $(imgBlock).animate({height: `${heightImgBlock + 630}px`}, 1000);
    $(document).scrollTop(scrollToTheEnd);
    clickCount++;
   if (clickCount === maxClicks) {
       $(loadMore).removeClass('load_more');
       $(loadMore).addClass('load_more_hide');
       clickCount = 0;
   }
});










