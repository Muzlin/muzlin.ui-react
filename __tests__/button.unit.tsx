import React from 'react'
import renderer from 'react-test-renderer'
import Button from '../lib/button'
describe('button', () => {
  it('是个div', () => {
    const json = renderer.create(<Button></Button>).toJSON()
    console.log(json)
    expect(json).toMatchSnapshot()
  })
})
