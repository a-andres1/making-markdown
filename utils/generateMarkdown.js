// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === 'MIT'){
    return "https://img.shields.io/badge/License-MIT-yellow.svg"
  }
  if (license === 'GPLv2'){
    return "https://img.shields.io/badge/License-GPLv2-yellow.svg"
  }
  if (license === 'GPLv3'){
    return "https://img.shields.io/badge/License-GPLv3-yellow.svg"
  }
  if (license === 'Apache'){
    return "https://img.shields.io/badge/License-Apache-yellow.svg"
  }
  if (license === 'BDS 3-clause'){
    return "https://img.shields.io/badge/License-BDS-3-clause-yellow.svg"
  }
  if (license === 'BDS 2-clause'){
    return "https://img.shields.io/badge/License-BDS-2-clause-yellow.svg"
  }
  if (license === 'Unlicense'){
    return "https://img.shields.io/badge/License-Unlicense-yellow.svg"
  }


};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

function renderLicenseLink(license) {
  if (license === 'MIT'){
    return "https://opensource.org/licenses/MIT"
  }
  if (license === 'GPLv2'){
    return "https://opensource.org/licenses/gpl-2.0.php"
  }
  if (license === 'GPLv3'){
    return "https://opensource.org/licenses/GPL-3.0"
  }
  if (license === 'Apache'){
    return "https://opensource.org/licenses/Apache-2.0"
  }
  if (license === 'BDS 3-clause'){
    return "https://opensource.org/licenses/BDS-3-Clause"
  }
  if (license === 'BDS 2-clause'){
    return "https://opensource.org/licenses/BDS-2-Clause"
  }
  if (license === 'Unlicense'){
    return "https://opensource.org/licenses/unlicense"
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
  [find me on github](https://github.com/${data.github})  
  `
}

module.exports = generateMarkdown;
