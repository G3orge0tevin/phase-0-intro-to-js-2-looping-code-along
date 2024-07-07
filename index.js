function writeCards(names, giftType) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${giftType} gift!`);
    }
    return messages;
}
const names = ["Guadalupe", "Ollie", "Aki"];
const messages = writeCards(names);
console.log(messages);

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        n--;
    }
}