console.log('custom script 1 connected');


//Custom JS Here

console.log('custom script connected');

var a;
var x;


//UNDERLINE FOR INPUTS ON FOCUS
function focusLine(){
    $('input').on('focus', function(){
        // x = $(this).innerWidth();
        $(this).parent($('.form-group')).find($('.input-focus')).addClass('focused');
        $('.focused').css('width', $(this).innerWidth());
        $(this).parent($('.form-group')).find('label').removeClass('l-filled');
        $(this).parent($('.form-group')).find('label').addClass('l-focus');
    });
    //CHECKS FOR INPUT DATA AND ADJUSTS LABELS ACCORDINGLY
    $('input').on('blur focusout', function(){
        if(a.length >= 1){
            $(this).parent($('.form-group')).find($('.input-focus')).css('width', '0');
            $(this).parent($('.form-group')).find($('.input-focus')).removeClass('focused').css('width', '0');
            $(this).parent($('.form-group')).find('label').addClass('l-filled');
        } else if(a.length == 0 || a.length == ''){
            // $(this).parent($('.form-group')).find($('.input-focus')).css('width', '0');
            $(this).parent($('.form-group')).find($('.input-focus')).removeClass('focused').css('width', '0');
            $(this).parent($('.form-group')).find('label').removeClass('l-filled l-focus');
        }
    });
};

//POPULATES VARIABLE TO DETERMINE LABEL POSITION AND COLOR
function inputFill(){
    $('input').on('keyup change focus blur focusout', function(){
        a = $(this).val();
    });
};

//CHECKS INPUTS ON LOAD TO DETERMINE LABEL POSITION AND COLOR
function filledLoad(){
    $('input').each(function(){
        a = $(this).val();
    });
};


//SPLASH BUTTON OPTION
//function splash(){
//  $('.btn').on('click', function(e){
//    e.preventDefault();
//    $(this).parent($('.row')).find($('.splash')).addClass('splashed').on('animationend', function(){
//      $(this).parent($('.row')).find($('.splash')).removeClass('splashed');
//    });
//  });
//};


//RIPPLE-EFFECT FOR BUTTONS
function rippleBtn(){
    $('.ripple').on('click', function(e){
        e.preventDefault;
        
        var $div = $('<div></div>');
            btnOffset = $(this).offset(),
            xPos = e.pageX - btnOffset.left,
            yPos = e.pageY - btnOffset.top;
        
        $div.addClass('splash splashed');
        var $ripple = $('.splash');
        
        $ripple.css('height', $(this).height());
        $ripple.css('width', $(this).height());
        $div
            .css({
                top: yPos - ($ripple.height()/2),
                left: xPos - ($ripple.width()/2),
                background: $(this).data('ripple-color')
            })
            .appendTo($(this));
        window.setTimeout(function(){
            $div.remove();
        }, 1000);
    });
};

//RIPPLE EFFECT FOR CHECKBOXES
function blip(){
    $('.styled-box').on('click', function(){
        $(this).parent($('div[class^="col"]'))
            .find($('.blip')).addClass('blipped')
            .find($(''))
            
        $('.blip').on('animationend', function(){
            $(this).parent($('div[class^="col"]')).find($('.blip')).removeClass('blipped');
        });
    });
};

//RIPPLE EFFECT FOR RADIO BUTTONS
function radioBlip(){
    $('.styled-radio').on('click', function(){
        $(this).parent($('div[class^="col"]')).find($('.r-blip')).addClass('blipped');
        $('.r-blip').on('animationend', function(){
            $(this).parent($('div[class^="col"]')).find($('.r-blip')).removeClass('blipped');
        });
    });
};
//TODO: ORGANIZE ALL 'ANIMATION END FUNCTIONS IN TO ONE FUNCTION'

function customTwo(){
    $('input[type="checkbox"]').click(function(){
        if($(this).is(':checked')){
            $(this).parent($('div[class^="col"]')).find($('.cc-blip')).addClass('blip-checked');
            $(this).parent($('div[class^="col"]')).find($('.blip-2')).addClass('blipped');
            $('.blip-2').on('animationend', function(){
                $(this).parent($('div[class^="col"]')).find($('.blip-2')).removeClass('blipped');
            });
        } else if($(this).is(':not("checked")')){
            $(this).parent($('div[class^="col"]')).find($('.cc-blip')).removeClass('blip-checked');
        }
    });
};

function datePicker(){
    var picker = datepicker('#startDate');
}

function pFillDatePicker(){
    if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }
    
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
}

//PREVENT TAB LINKS FROM FOLLOWING TARGET [for testing]
function prevDef(){
    $('a[role="tab"]').on('click', function(){
        preventDefault();
    });
}


// function getCoords(el){
//     var box = el.getBoundingClientRect();
//     var body = document.body;
//     var docEl = document.documentElement;
//     var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
//     var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scollLeft;
//     var clientTop = docEl.clientTop || body.clientTop || 0;
//     var clientLeft = docEl.clientLeft || body.clientLeft || 0;
//     var top = box.top + scrollTop - clientTop;
//     var left = box.left + scrollLeft - clientLeft;
    
//     return{
//         top: Math.round(top),
//         left: Math.round(left)
//     };
// }

var navTabs = document.querySelector('.nav-tabs');//Will most likely be an `id` when in production


function setWidth(){
    var activeTab = document.querySelector('li.active');
    var lineUnder = document.querySelector('.tab-follower');
    var newWidth = `${activeTab.offsetWidth}px`;
    var newLeft = `${activeTab.offsetLeft}px`;
    lineUnder.style.width = newWidth;
    lineUnder.style.left = newLeft;
    // console.log(activeTab);
    console.log(newWidth);
}


navTabs.addEventListener('change load', setWidth());







// function datePickerCustom(){
//     var picker = datepicker(document.querySelector('#startDate'), {
//     position: 'tr', // Top right.
//     startDate: new Date(), // This month.
//     dateSelected: new Date(), // Today is selected.
//     minDate: new Date(2016, 5, 1), // June 1st, 2016.
//     maxDate: new Date(2099, 0, 1), // Jan 1st, 2099.
//     noWeekends: true, // Weekends will be unselectable.
//     formatter: function(el, date) {
//       // This will display the date as `1/1/2017`.
//       el.value = date.toDateString();
//     },
//     onSelect: function(instance) {
//       // Show which date was selected.
//       console.log(instance.dateSelected);
//     },
//     onShow: function(instance) {
//       console.log('Calendar showing.');
//     },
//     onHide: function(instance) {
//       console.log('Calendar hidden.');
//     },
//     onMonthChange: function(instance) {
//       // Show the month of the selected date.
//       console.log(instance.currentMonthName);
//     },
//     customMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
//     customDays: ['S', 'M', 'T', 'W', 'Th', 'F', 'S'],
//     overlayPlaceholder: 'Enter a 4-digit year',
//     overlayButton: 'Go!',
//     disableMobile: true // Conditionally disabled on mobile devices.
//     });
// };

$(window).on('load', function(){
    inputFill();
    filledLoad();
    focusLine();
//    splash();
    rippleBtn();
    blip();
    radioBlip();
    // customTwo();
    //THIS CALLS IN THE CUSTOM DATEPICKER THAT CAN BE STYLED TO UTILIZE MATERIAL STYLES
    datePicker();
    // datePickerCustom();
    pFillDatePicker();
    // tabWidth();
});


























