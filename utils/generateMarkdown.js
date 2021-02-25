// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return "https://img.shields.io/badge/License-MIT-yellow.svg"
  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT'){
    return "https://opensource.org/licenses/MIT"
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  var lbadge = renderLicenseBadge(license);
  var llink = renderLicenseLink(license);
  return `![${license}](${lbadge})  

  [${license}](${llink})  
  
  `

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {

var lsection = renderLicenseSection(data.license);

  return `
  # ${data.title} 

  ## Description
  ${data.desctiption}
  
  ## Technologies Used
  ${data.tech}
  
  ## Install
  ${data.install}
  
  ## Usage
  ${data.usage}
  
  ## Credits
  ${data.contributions}  
  ${data.resources}
  
  ## License Info
  ${lsection}


  
  ## Links
  [Repo](${data.repo})  
  [Site](${data.deployed})  
  
  ## Contact Info
  [email me](mailto:${data.email})    
  [find me on github](${data.github})  
  `

;
}

module.exports = generateMarkdown;
