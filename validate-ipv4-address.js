function validateIpv4Address(input) {
    const bytes = input.split('.')
    if(bytes[3] === '0') return false
    return true
}

module.exports = {
    validateIpv4Address
}
