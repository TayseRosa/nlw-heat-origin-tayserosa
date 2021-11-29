const linksSocialMedia = {
  github: 'tayserosa',
  youtube: 'UCOY6zUl7VSci2-MQZzQd68g',
  facebook: 'tayserosa',
  instagram: 'tayserosa',
  twitter: 'tayserosa'
}

function changeSocialMediaLinks() {
  //userName.textContent = 'Tayse Rosa'
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${linksSocialMedia[social]}`

    alert(li.children[0].href)
  }
}

changeSocialMediaLinks()
