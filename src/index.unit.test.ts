import { RRTest } from './RRTest'

describe('RRTest class tests', () => {
  test('parse, returns valid pased string', () => {
    const res = new RRTest().parse(
      '(id, name, email, type(id, name, customFields(c1, c2, c3), customFields2(c1, c6, c3)), externalId)'
      ).toString()

    expect(res).toBe(`- id
- name
- email
- type
  - id
  - name
  - customFields
    - c1
    - c2
    - c3
  - customFields2
    - c1
    - c6
    - c3
- externalId
`)
  })

  test('parse, returns valid pased sorted string', () => {
    const res = new RRTest().parse(
      '(id, name, email, type(id, name, customFields(c1, c2, c3), customFields2(c1, c6, c3)), externalId)'
      ).sort().toString()

      // console.log(res)

    expect(res).toBe(`- email
- externalId
- id
- name
- type
  - customFields
    - c1
    - c2
    - c3
  - customFields2
    - c1
    - c3
    - c6
  - id
  - name
`)
  })

  test('parse, invalid input, return undefined', () => {
    const res = new RRTest().parse(
      '(id, name, email, type(id, name, customFields(c1, c2, c3), customFields2(c1, c6, c3)), externalId'
      )
    
    expect(res).toBe(undefined)
  })
})
