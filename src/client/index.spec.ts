describe('client', () => {
  const startAppSpy = jest.fn()
  jest.doMock('client/core/startApp', () => startAppSpy)

  it('should perform start app', () => {
    require('.')

    expect(startAppSpy).toBeCalledTimes(1)
  })
})
