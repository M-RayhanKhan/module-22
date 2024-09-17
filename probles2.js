// problem 2 
function sendNotification(email) {
    if (!email.includes('@')) {
        const errorMessage = "Invalid Email"
        return errorMessage
    }
    const mainEmail = email.split('@')
    const userName = mainEmail[0]
    const domainName = mainEmail[1]
    const message = userName + " sent you an email from " + domainName
    return message
}

// const string = 'zihad@gmail.com'
const string = 'farhan34@yahoo.com'
const result = sendNotification(string)
console.log(result);