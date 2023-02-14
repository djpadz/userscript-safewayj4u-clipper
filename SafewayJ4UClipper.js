// ==UserScript==
// @name        SafewayJ4UClipper
// @description Clip all coupons on many Albertsons companies' websites.
// @match       https://www.acmemarkets.com/*/coupons-deals.html
// @match       https://www.albertsons.com/*/coupons-deals.html
// @match       https://www.andronicos.com/*/coupons-deals.html
// @match       https://www.balduccis.com/*/coupons-deals.html
// @match       https://www.carrsqc.com/*/coupons-deals.html
// @match       https://www.haggen.com/*/coupons-deals.html
// @match       https://www.jewelosco.com/*/coupons-deals.html
// @match       https://www.kingsfoodmarkets.com/*/coupons-deals.html
// @match       https://www.pavillions.com/*/coupons-deals.html
// @match       https://www.randalls.com/*/coupons-deals.html
// @match       https://www.safeway.com/*/coupons-deals.html
// @match       https://www.shaws.com/*/coupons-deals.html
// @match       https://www.starmarket.com/*/coupons-deals.html
// @match       https://www.tomthumb.com/*/coupons-deals.html
// @match       https://www.vons.com/*/coupons-deals.html
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

