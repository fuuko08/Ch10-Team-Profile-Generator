//create team profile html
const generateTeam = team => {

    //manager card html
    const generateManager = manager => {
        return `
        <div class="card col-3 m-3" id="manager">
            <div class="card-header bg-primary text-white">
                <h4 class="card-title">${manager.getName()}</h4>
                <h4 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${manager.getRole()}</i></h5>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getID()}</li>
                    <li class="list-group-item">Email: <a href="${manager.getEmail()}"></a>${manager.getEmail()}</li>
                    <li class="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
                </ul>
            </div>
        </div>
        `;
    };

    //engineer card html
    const generateEngineer = engineer => {
        return `
        <div class="card col-3 m-3" id="engineer">
            <div class="card-header bg-primary text-white">
                <h4 class="card-title">${engineer.getName()}</h4>
                <h5 class="card-title"><i class="fas fa-glasses mr-2"></i>${engineer.getRole()}</i></h5>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getID()}</li>
                    <li class="list-group-item">Email: <a href="${engineer.getEmail()}"></a>${engineer.getEmail()}</li>
                    <li class="list-group-item">Github: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    //intern card html
    const generateIntern = intern => {
        return `
        <div class="card col-3 m-3" id="intern">
            <div class="card-header bg-primary text-white">
                <h4 class="card-title">${intern.getName()}</h4>
                <h5 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${intern.getRole()}</i></h5>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getID()}</li>
                    <li class="list-group-item">Email: <a href="${intern.getEmail()}"></a>${intern.getEmail()}</li>
                    <li class="list-group-item">School: ${intern.getSchool()}</li>
                </ul>
            </div>
        </div>
        `;

    };

    const pageArray = [];

    pageArray.push(team
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );

    pageArray.push(team
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
    );   

    pageArray.push(team
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
    );

    return pageArray.join("");
}

//export html
module.exports = team => {
    return `
    
    `
}