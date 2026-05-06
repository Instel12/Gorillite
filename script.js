const banners = ["Forest", "Shop"]
const banner = document.getElementsByClassName("banner")[0]

banner.style.backgroundImage = `url('Images/Banners/${banners[Math.floor(Math.random() * banners.length)]}.png')`;