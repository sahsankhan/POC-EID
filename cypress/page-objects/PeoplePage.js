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

browse(){
    return cy.xpath(`(//span[@data-bind="text: Title" and text()="Browse"][2])`)
}

selectRoleAndLocation(){
    return cy.xpath(`//a[text()='Select a Role and Location']`)
}

searchButtonLocator(){
return cy.xpath (`(//div[contains(@class, 'eid-OrgRoleOrgZoneTree-accordion')]//button[starts-with(@id, 'eid-tree-searchbutton-')])`);
}

searchFieldLocator(){
    return cy.get(`.eid-input-group-left-buttons input[placeholder='Enter search']`);
    }

getItemByTextLocator(text){
    return cy.xpath(`//span//span[contains(., "${text}") and contains(@class,'jstree-searchresult')]`)
}

temporaryRoleLocator(){
    return cy.get(`a[title='Temporary Role']`);
}

locationLocator(){
    return cy.xpath(`//h4//a[contains(., 'Location')]`);
}

selectButtonLocator(){
    return cy.get(`div.eid-OrgRoleOrgZoneTree-button`);
}

managerSearchFieldLocator(){
    return cy.get(`input[placeholder='Enter search']`).eq(5)
}

successMessageLocator(text){
    return cy.xpath(`//li[contains(., "${text}")]`);
}

locationRolelocation(){
    // return cy.xpath(`//div//a[@class='eid-tree-node-link jstree-anchor']//span//span[contains(., 'Default Organization')]`).eq(1);
    return cy.xpath(`(//span[@data-bind="text: FirstTitlePart()"][text()="HB FlatFile_Locations"])[2]`);
}

}

module.exports = new PeoplePage;
