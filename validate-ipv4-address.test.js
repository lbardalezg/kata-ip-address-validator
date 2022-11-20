const { validateIpv4Address } = require('./validate-ipv4-address')

describe('IP Address Validator', () => {
    test('1.1.1.1 should return true', () => {
        const input = '1.1.1.1'
        const result = validateIpv4Address(input)
        const expected = true
        expect(result).toBe(expected)
    })
})