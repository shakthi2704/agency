const loadBackgroundImages = () => {
  const backgroundImages = document.querySelectorAll("[data-background]")

  backgroundImages.forEach((element) => {
    const image = element.dataset.background
    element.style.backgroundImage = `url('${image}')`
  })
}

export default loadBackgroundImages
