// ==UserScript==
// @name        SafewayJ4UClipper
// @description Clip all coupons on the Safeway website
// @match       https://www.safeway.com/justforu/coupons*
// ==/UserScript==

/* global $ */

(() => {
  function clipAllCoupons (e) {
    const theButton = $(e.target)
    theButton.prop('disabled', true)
    setInterval(() => {
      theButton.text('getting all coupons...')
      if ($('button.btn.load-more').click().length === 0) {
        theButton.text('clipping...')
        $('[id^=couponAddBtn]').click()
        clearInterval()
        setInterval(() => {
          if ($('[id^=couponAddBtn]').length === 0) {
            theButton.text('Done!')
            clearInterval()
            setInterval(() => {
              theButton.remove()
              clearInterval()
            }, 1000)
          }
        }, 1000)
      }
    }, 2000)
  }

  $('<button/>')
    .css('position', 'fixed')
    .css('top', '0')
    .css('right', '0')
    .css('width', '100px')
    .css('height', '50px')
    .css('border', '3px solid #000')
    .css('border-radius', '25px')
    .css('background-color', '#080')
    .css('z-index', '99')
    .text('Clip all coupons')
    .click(clipAllCoupons)
    .appendTo(document.body)
})()
