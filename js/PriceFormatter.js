
/**
 * @author -> Dare Adewole
 */
const { reverse, compact } = require('lodash')
const PRICE_PATTERN = /^[0-9]+$/g

module.exports = {
    PriceFormatter: {
        format (price) {
            if (!price.match(PRICE_PATTERN))
                throw new Error('Price must be a numeric value')
            price = `${price || 0}`
            var formattedPrice = compact(reverse(price.split('')).join('').split(/([0-9]{3})/g))
            return reverse(formattedPrice.join(',').split('')).join('')
        },
        formatAsync (price) {
            return new Promise((resolve, reject) => {
                if (!price.match(PRICE_PATTERN)) reject('Price must be a numeric value')
                else resolve(this.format(price))
            })
        }
    }
}
