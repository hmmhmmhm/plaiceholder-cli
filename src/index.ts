import { blurhashToCss } from 'blurhash-to-css'
import inquirer from 'inquirer'
import clipboard from 'native-clip'

void (async () => {
  console.log(`🔮  Image to Blurhash ->  https://blurred.dev`)
  const { hash } = await inquirer.prompt<{ hash: string }>([
    {
      type: 'input',
      name: 'hash',
      message: 'Please type hash. (blurhash)'
    }
  ])

  try {
    const css = blurhashToCss(hash)
    let cssString = ``
    cssString += `background-image: ${css.backgroundImage};\n`
    cssString += `background-position: ${css.backgroundPosition};\n`
    cssString += `background-size: ${css.backgroundSize};\n`
    cssString += `background-repeat: ${css.backgroundRepeat};\n`
    cssString += `filter: ${css.filter};\n`
    cssString += `transform: ${css.transform};\n`

    clipboard.write(cssString)
    console.log(`✨  CSS has been copied to the clipboard.`)
  } catch (e) {
    console.error(e)
  }
})()
