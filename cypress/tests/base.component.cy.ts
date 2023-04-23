import { BaseComponent } from '../../src/app/helpers/base/base.component'

describe('BaseComponent', () => {
  it('should mount', () => {
    cy.mount(BaseComponent)
  })
})
