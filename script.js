function toggleMode() {
  const html = document.documentElement
  //trocar o tema
  /*if(html.classList.contains('light')){
  html.classList.remove('light')
  }else{
    html.classList.add('light')
  }*/
  html.classList.toggle("light")
  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "assets/avatar-light.png") //adionar ou modificar um atributo
  } else {
    //se não, manter imagem normal
    img.setAttribute("src", "assets/avatar.png")
  }
}
