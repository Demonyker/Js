class Director {
    constructor(name, age) {
    this.name = name,
    this.age = age,
    this.projects = 0,
    this.staff = 0
    }
    getProjects(projects){
        if (projects.length > 4){
            console.log('Слишком много проектов, не могу принять')
        }else{
        this.projects = projects  
        }
    console.log(this.projects)
    }
    getStaff (staffPep) {
        this.staff = staffPep
        console.log(`Количество нанятых сотрудников - ${this.staff}`)
    }
    getRabotnik (Rabotnik, name, otdel) {
        return new Rabotnik(name, otdel)
    }
}
class Rabotnik {
    constructor(name, otdel){
    this.name = name,
    this.otdel = otdel,
    this.realizePr = 0,
    this.status
    }
    getProject () {
        this.realizePr++
        this.status = busy
    }
}
function workCompany(days) { //ноль проектов, ноль программистов
    var realizePr = 0
    var newStaff = 0
    var rmStaff = 0
    var rabotniki = []
    var denis = new Director('Denis', 35)
    var projects = []
for (var j = 1; j<(days+1); j++){
    if (denis.projects > 0){
        denis.projects.forEach( function(item){
        let t = item.split(', ');
        var theme = t[0]
        if( theme == web){
            var name = prompt('Введите имя сотрудника')
            var otdel = web
            name = denis.getRabotnik(Rabotnik, name, otdel)
            rabotniki[i] = name
            } else {
            var name = prompt('Введите имя сотрудника')
            var otdel = mobile
            name = denis.getRabotnik(Rabotnik, name, otdel)
            rabotniki[i] = name    
            }    
        })   
    }
    let numofPr = prompt('Сколько новых проектов?')
    if (numofPr > 4) { 
    console.log('Слишком много проектов')
    } else {
    for (let i = 0; i<numofPr; i++) {
    projects.push(prompt('Введите проекты для'+'  ' + j +'  '+'дня сложность укажите через запятую'))
    denis.getProjects(projects)
    }
    }
    if (denis.projects > 0 && rabotniki.length > 0) {  
    for( let i = 0 ; i<denis.projects.length; i++){
        denis.projects.forEach( function(item){
        let t = item.split(', ');
        var theme = t[0]
        var slojnost = t[1]
        
        })      
    }
    }
}





    /*for (let i = 0; i< 2; i++) {
    var name = prompt('Введите имя сотрудника')
    var otdel = prompt('Введите отдел сотрудника')
    name = denis.getRabotnik(Rabotnik, name, otdel)
    name.getTest()
    rabotniki[i] = name
    }*/
}
workCompany(2)

