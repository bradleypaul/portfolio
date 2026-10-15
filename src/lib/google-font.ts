// next/font can't feed ImageResponse, so fetch a TTF subset from Google Fonts
// at build time. Only the glyphs in `text` are downloaded.
export async function loadGoogleFont(family: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${family.replace(/ /g, '+')}&text=${encodeURIComponent(text)}`
  const css = await (await fetch(url)).text()
  const src = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)

  if (!src) {
    throw new Error(`Could not find a TTF for ${family}`)
  }

  const response = await fetch(src[1])
  return response.arrayBuffer()
}
