// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(licenseName) {
  console.log(licenseName);
  $.ajax({
    url: "application/vnd.github.v3+json",
    method: "GET",
    dataType: "json",
    license: licenseName
}).then(function (response){
console.log(response)
})
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(licenseName) {
  console.log(licenseName);
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(licenseName) {
  console.log(licenseName);
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
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
  ${data.license} 
  
  ## Links
  [Repo](${data.repo})
  [Site](${data.deployed})
  
  ## Contact Info
  [email me](mailto:${data.email})  
  [find me on github](${data.github})`;
}

module.exports = generateMarkdown;
module.exports = renderLicenseBadge;
module.exports = renderLicenseLink;
module.exports = renderLicenseSection;
