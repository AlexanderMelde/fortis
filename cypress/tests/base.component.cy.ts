import { BaseComponent } from '../../src/app/base/base.component'

describe('BaseComponent', () => {
  it('should mount', () => {
    cy.mount(BaseComponent)
  })
})
