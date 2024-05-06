class PeoplePage{

OnboardPerson(){
    return cy.get(`a[title="Onboard Person"]`)
}

personActionPanel(){
    return cy.xpath(`//span[text()='Actions']`).eq(0);
}

firstName(){
    return cy.get(`input[name='FirstName']`)
}

LastName(){
    return cy.get(`input[name='LastName']`)
}

emailLocator(){
return cy.get(`input[name='Email']`)
}

selectRoleAndLocation(){
    return cy.xpath(`//a[text()='Select a Role and Location']`)
}

searchButtonLocator(){
return cy.xpath (`(//div[contains(@class, 'eid-OrgRoleOrgZoneTree-accordion')]//button[starts-with(@id, 'eid-tree-searchbutton-')])[1]`);
}

getItemByTextLocator(text){
    return cy.xpath(`//span//span[contains(., "${text}")]`)
}

temporaryRoleLocator(){
    return cy.get(`a[title='Temporary Role']`);
}

locationLocator(){
    return cy.xpath(`//h4//a[contains(., 'Location')]`);
}

selectButtonLocator(){
    return cy.get(` div.eid-OrgRoleOrgZoneTree-button`);
}

managerSearchFieldLocator(){
    return cy.get(`input[placeholder='Enter search']`).eq(5)
}

successMessageLocator(text){
    return cy.xpath(`//li[contains(., "${text}")]`);
}

locationRolelocation(){
    return cy.xpath(`//div//a[@class='eid-tree-node-link jstree-anchor']//span//span[contains(., 'Default Organization')]`).eq(1);
}

}

module.exports = new PeoplePage;
