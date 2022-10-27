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
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" 
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" 
        crossorigin="anonymous"> 
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
    <title>Team Profile Generator</title>
</head>

<body>
    <header class="bg-danger jumbotron col-12">
        <h1 class="text-white text-center">My Team Profile</h1>
    </header>

    <div class="container">
        <div class="row mg-3">
            <div class="team col-12 d-flex justify-content-center p-3">
             ${generateTeam(team)}
             </div>
        </div>
    </div>    
</body>
</html>
`;
};