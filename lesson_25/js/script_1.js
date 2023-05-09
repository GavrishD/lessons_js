class PhoneNumber {
    constructor(phoneNumber) {
        this.phoneNumber = phoneNumber
    }

    operatorCheck() {
        let mobileOperator
        if (/380(63|73|93)\d{7}/.test(this.phoneNumber)) mobileOperator = 'Lifecell'
        else if (/380(50|66|95|99)\d{7}/.test(this.phoneNumber)) mobileOperator = 'Vodafone Україна'
        else if (/380(39|67|68|96|97|98)\d{7}/.test(this.phoneNumber)) mobileOperator = 'Kyivstar'

        return mobileOperator
    }

    render(targetBlock) {
        document.querySelector(targetBlock).append(this)
    }

    [Symbol.toPrimitive](hint) {
        let result

        switch(hint) {
            case 'number':
                result = this.phoneNumber
                break
            case 'string':
                result = `${this.operatorCheck()} -> +${this.phoneNumber},`
                break
            default:
                result = null
                break
        }
        return result
    }
}

new PhoneNumber(380677898765).render('.task-block')
new PhoneNumber(380734567878).render('.task-block')
new PhoneNumber(380666789875).render('.task-block')