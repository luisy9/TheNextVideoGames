export const useLocationPage = (locationPage) => {
  const play = locationPage.pathname.indexOf('PlayStation')
  const xbox = locationPage.pathname.indexOf('Xbox')
  const nintendo = locationPage.pathname.indexOf('Nintendo')

  return {
    play,
    xbox,
    nintendo
  }
}

export default useLocationPage
