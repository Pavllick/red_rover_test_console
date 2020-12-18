import { RRTest } from './RRTest'

const res = new RRTest().parse('(id, name, email, type(id, name, customFields(c1, c2, c3), customFields2(c1, c6, c3)), externalId)')

console.log(res.toString())
console.log()
console.log()
console.log(res.sort().toString())
