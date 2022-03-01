const { division } = require('./division')
const { addition } = require('./addition')



test('10 / 5 = 2', () => {
expect(division(10, 5)).toBe(2)
})

test('10 + 5 = 15', () => {
    expect(addition(10, 5)).toBe(15)
    })