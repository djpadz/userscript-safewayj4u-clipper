// ==UserScript==
// @name        SafewayJ4UClipper
// @description Clip all coupons on the Safeway website
// @match       https://www.safeway.com/justforu/coupons*
// ==/UserScript==

/* global $ */

(() => {
  function clipAllCoupons () {
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

  const theButton = $('<button/>')
  theButton.css('position', 'fixed')
  theButton.css('top', '0')
  theButton.css('right', '0')
  theButton.css('width', '100px')
  theButton.css('height', '50px')
  theButton.css('border', '3px solid #000')
  theButton.css('border-radius', '25px')
  theButton.css('background-color', '#080')
  theButton.css('z-index', '99')
  theButton.text('Clip all coupons')
  theButton.click(clipAllCoupons)
  theButton.appendTo(document.body)
})()
