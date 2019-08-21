let oUl = $(".clear")[0];
let oli = $(".coverOne>.clear>li");
function show(a, i, name) {
    let clerity = 0;
    let timer;
    timer = setInterval(function () {
        $(a).css("opacity", `${clerity}`);
        if (clerity <= 1) {
            clerity += 0.01;
        } else if (clerity >= 1) {
            console.log(i, clerity);
            $(".coverOne").css("display", "none");
            oli.css('opacity', 0)
            $(name).css("display", "block");
            clearInterval(timer);
            return;
        }
    }, 10)
}
function play_show(name) {
    let i = 7;
    let i2 = 8;
    $(".coverOne").css("display", "block");
    // oli.css('opacity',0)
    let timer2 = setInterval(function () {
        show(oli[i], i, name);
        show(oli[i2], i2, name);
        i--;
        i2++;
        if (i < 0) {
            clearInterval(timer2);
            return;
        }
    }, 50);
}
// function ()
$loginBox = $("#app");
$information = $("#information");
$work = $("#work");
$workExperience = $("#workExperience");
$contactMe = $("#contactMe");
// $("#app").on('click', function () {
//     $loginBox.hide();
//     play_show(".information");
// })
// $("#information").on('click', function () {
//     $information.hide();
//     play_show(".work");
// })
// $("#work").on('click', function () {
//     $work.hide();
//     play_show(".workExperience");
// })
// $("#workExperience").on('click', function () {
//     $workExperience.hide();
//     play_show(".contactMe");
// })
play_show(".loginBox");




// var page1 = document.getElementById('page1'),        //滑动item
// page2 = document.getElementById('page2'),
// page3 = document.getElementById('page3'),
// wraper = document.getElementById('wraper'),
//     content = document.getElementById('content');    //滑动容器
// var itemHeight = wraper.offsetHeight;                //滑动item高度         
// var index = 0;                                       //滑动计数
var moveY,                                           //滑动距离
    endY,                                            //滑动停止的Y坐标
    startY;                                          //滑动开始的Y坐标
// content.style.height = (itemHeight * 3) + 'px'
// 触摸开始
function boxTouchStart(e) {
    e = e || window.event;
    console.log(arguments)
    var touch = e.touches[0];
    // var tar = e.target || e.srcElement;
    startY = touch.pageY;
    // endY = content.style.webkitTransform;
    // if (!endY) {
    //     endY = 0;
    // } else {
    //     endY = parseInt(endY.replace('translateY(', ''))
    // }
}

// 触摸结束
// function boxTouchEnd(e) {
//     var touch = e.touches[0];
//     moveY = touch.pageY - startY;
//     console.log(e)
//     //下一页
//     if (moveY < 0) {
//         // if (index == 3) {
//         //     return false;
//         // }

//         // content.style.webkitTransform = 'translateY(-' + (itemHeight * index) + 'px)'
//         $loginBox.hide();
//         play_show(".information");
//         return true;

//     }
//     //上一页
//     else if (moveY > 0) {
//         $information.hide();
//         play_show(".app");

//         return false;
//         // if (index == 1) {
//         //     return false;
//         // }
//         // content.style.webkitTransform = 'translateY(' + (itemHeight + endY) + 'px)'
//     }
// }
// 触摸移动
// function boxTouchMove(e) {
//     var touch = e.touches[0];
//     moveY = touch.pageY - startY;
//     // index = Number(e.target.id.split('page')[1])

//     //下一页
//     if (moveY < 0) {
//     //     // if (index == 3) {
//     //     //     return false;
//     //     // }

//     //     // content.style.webkitTransform = 'translateY(-' + (itemHeight * index) + 'px)'
//     //     $loginBox.hide();
//     //     play_show(".information");
//     //     return true;

//     // }
//     // //上一页
//     // else if (moveY > 0) {
//     //     $information.hide();
//     //     play_show(".app");

//     //     return false;
//         // if (index == 1) {
//         //     return false;
//         // }
//         // content.style.webkitTransform = 'translateY(' + (itemHeight + endY) + 'px)'
//     }

// }
$loginBox.on('touchstart', function (e) {
    var touch = e.touches[0];

    // console.log(touch)
    // console.log(e)
    startY = touch.pageY;
})
$information.on('touchstart', function (e) {
    var touch = e.touches[0];
    startY = touch.pageY;
})
$work.on('touchstart', function (e) {
    var touch = e.touches[0];
    startY = touch.pageY;
})
$workExperience.on('touchstart', function (e) {
    var touch = e.touches[0];
    startY = touch.pageY;
})
$contactMe.on('touchstart', function (e) {
    var touch = e.touches[0];
    startY = touch.pageY;
})


$loginBox.on('touchmove', function (e) {
    // console.log(e)
    // var touch = e.touches[0];
    var touch = e.touches[0];
    // console.log(touch);
    // console.log(touch.pageY);
    moveY = touch.pageY - startY;

    //     //下一页
    //     if (moveY < 0) {
    //         $loginBox.hide();
    //         play_show(".information");
    //     }
})
$("#information").on('touchmove', function (e) {
    var touch = e.touches[0];
    moveY = touch.pageY - startY;
    console.log(e)
    //下一页
    //     if (moveY < 0) {
    //         $information.hide();
    //         play_show(".work");
    //     }
    //     //上一页
    //     else if (moveY > 0) {
    //         $information.hide();
    //         play_show(".loginBox");

    //     }
})
$("#work").on('touchmove', function (e) {

    var touch = e.touches[0];
    moveY = touch.pageY - startY;
    // console.log(e)
    // //下一页
    // if (moveY < 0) {
    //     $work.hide();
    //     play_show(".workExperience");
    // }
    // //上一页
    // else if (moveY > 0) {
    //     $work.hide();
    //     play_show(".information");

    // }
})
$("#workExperience").on('touchmove', function (e) {

    var touch = e.touches[0];
    moveY = touch.pageY - startY;
    // console.log(e)
    // // 下一頁
    // if (moveY < 0) {
    //     $work.hide();
    //     play_show(".information");

    // }
    // // 上一頁
    // else if (moveY > 0) {
    //     $workExperience.hide();
    //     play_show(".contactMe");

    // }
})
$("#contactMe").on('touchmove', function (e) {
    var touch = e.touches[0];
    moveY = touch.pageY - startY;
    //     console.log(e)
    //         // 上一頁
    //     if (moveY > 0) {
    //         $contactMe.hide();
    //         play_show(".workExperience");
    //     }
})



$loginBox.on('touchend', function (e) {
    // console.log(e)
    // // var touch = e.touches[0];
    // var touch = e.touches[0];
    // console.log(touch);
    // console.log(touch.pageY);
    // moveY = touch.pageY - startY;
    console.log("end");
    //下一页
    if (moveY < 0) {
        $loginBox.hide();
        play_show(".information");
    }
})
$("#information").on('touchend', function (e) {
    // var touch = e.touches[0];
    // moveY = touch.pageY - startY;
    // console.log(e)
    //下一页
    if (moveY < 0) {
        $information.hide();
        play_show(".work");
    }
    //上一页
    else if (moveY > 0) {
        $information.hide();
        play_show(".loginBox");

    }
})
$("#work").on('touchend', function (e) {

    // var touch = e.touches[0];
    // moveY = touch.pageY - startY;
    // console.log(e)
    //下一页
    if (moveY < 0) {

        $work.hide();
        play_show(".workExperience");
    }
    //上一页
    else if (moveY > 0) {
        $work.hide();
        play_show(".information");

    }
})
$("#workExperience").on('touchend', function (e) {

    // var touch = e.touches[0];
    // moveY = touch.pageY - startY;
    // console.log(e)
    // 下一頁
    if (moveY < 0) {
        $workExperience.hide();
        play_show(".contactMe");

    }
    // 上一頁
    else if (moveY > 0) {
        $workExperience.hide();
        play_show(".work");

    }
})
$("#contactMe").on('touchend', function (e) {
    // var touch = e.touches[0];
    // moveY = touch.pageY - startY;
    // console.log(e)
    // 上一頁
    if (moveY > 0) {
        $contactMe.hide();
        play_show(".workExperience");
    }
})
play_show(".loginBox");