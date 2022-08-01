const generateTeam = (team) => {
    console.log(team);

    const teamArray = [];

    const generateManger = manager => {
        console.log(manager);

        let managerHtml = `
        <div class = "card m-3 border border-dark" style = "width: 18rem;">
                <div class = "card-header bg-info">
                    <h3>${manager.name}</h3>
                    <i class="fa-solid fa-mug-hot"></i><h4>Manager</h4>
                </div>
                <ul class = "list-group list-group-flush">
                    <li class = "list-group-item">ID: ${manager.id}</li>
                    <li class = "list-group-item">E-mail: ${manager.email}</li>
                    <li class = "list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>`;
            teamArray.push(managerHtml);
    };

    const generateEngineer = engineer => {
        console.log(engineer);

        let engineerHtml = `
        <div class = "card m-3 border border-dark" style = "width: 18rem;">
                <div class = "card-header bg-info">
                    <h3>${engineer.name}</h3>
                    <i class="fa-solid fa-glasses"></i><h4>Engineer</h4>
                </div>
                <ul class = "list-group list-group-flush">
                    <li class = "list-group-item">ID: ${engineer.id}</li>
                    <li class = "list-group-item">E-mail: ${engineer.email}</li>
                    <li class = "list-group-item">Github Username: ${engineer.github}</li>
                </div>
            </div>`;
            teamArray.push(engineerHtml);
    };

    const generateIntern = intern => {
        console.log(intern);

        let internHtml = `
        <div class = "card m-3 border border-dark" style = "width: 18rem;">
                <div class = "card-header bg-info">
                    <h3>${intern.name}</h3>
                    <i class="fa-solid fa-user-graduate"></i><h4>Intern</h4>
                </div>
                <ul class = "list-group list-group-flush">
                    <li class = "list-group-item">ID: ${intern.id}</li>
                    <li class = "list-group-item">E-mail: ${intern.email}</li>
                    <li class = "list-group-item">School: ${intern.school}</li>
                </div>
            </div>`;
            teamArray.push(internHtml);
    };

    for (let i = 0; i < team.length; i++) {
        if (team[i].getRole() === 'Manager') {
            generateManger(team[i]);
        }
        if (team[i].getRole() === 'Engineer') {
            generateEngineer(team[i]);
        }
        if (team[i].getRole() === 'Intern') {
            generateIntern(team[i]);
        }
    }

    return teamArray.join('');
}

module.exports = team => {

    return `

<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!--link bootstrap-->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <!--link fontawesome-->
    <script src="https://kit.fontawesome.com/78b847f462.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css"/>

    <title>Team Profile</title>
</head>

<body>
    <header>
        <h1>My Team</h1>
    </header>

    <main class = "container fluid .d-flex">
        <section class = "row">    

        ${generateTeam(team)}

        </section>

    </main>

</body>

</html>`;
}