const { validateIpv4Address } = require('./validate-ipv4-address')

describe('IP Address Validator', () => {
    test('1.1.1.1 should return true', () => {
        const input = '1.1.1.1'
        const result = validateIpv4Address(input)
        const expected = true
        expect(result).toBe(expected)
    })
    test('192.168.1.1 should return true', () => {
        const input = '192.168.1.1'
        const result = validateIpv4Address(input)
        const expected = true
        expect(result).toBe(expected)
    })
    test('10.0.0.1 should return true', () => {
        const input = '10.0.0.1'
        const result = validateIpv4Address(input)
        const expected = true
        expect(result).toBe(expected)
    })
    test('127.0.0.1 should return true', () => {
        const input = '127.0.0.1'
        const result = validateIpv4Address(input)
        const expected = true
        expect(result).toBe(expected)
    })
    test('0.0.0.0 should return false', () => {
        const input = '0.0.0.0'
        const result = validateIpv4Address(input)
        const expected = false
        expect(result).toBe(expected)
    })
    test('255.255.255.255 should return false', () => {
        const input = '255.255.255.255'
        const result = validateIpv4Address(input)
        const expected = false
        expect(result).toBe(expected)
    })
})