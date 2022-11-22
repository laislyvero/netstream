//what is the difference between caal,apply and bind

var employee1 ={firstName:'john', lastName:'Rogers'}

function invite(greetings1,greetings2) {
    console.log(`${greetings2} ${this.firstName} ${greetings2}`)
}
invite.call(employee1, 'Hello','how are you')
invite.apply(employee1, ['Hello','how are you'])

var inviteEmployee = invite.bind(employee1)
invite.bind('Hello', 'How are you')