class Project {
  constructor(difficulty) {
    this.difficulty = difficulty;
    this.status = 'unready'; // так же бывают статусы "ready", когда проект готов к релизу и "ready for test", когда проект готов к тестированию
  }

  readyForImplement() {
    this.status = 'ready';
  }
}
class WebProject extends Project {
}
class MobileProject extends Project {
}
function randomProjects(arr) {
  const n = Math.floor(Math.random() * 3) + 0;
  for (let i = 0; i < n; i += 1) {
    const arrOfDifficulty = [1, 2, 3];
    const arrOfSpecialty = ['web', 'mobile'];
    const k = Math.floor(Math.random() * 3) + 0;
    const j = Math.floor(Math.random() * 2) + 0;
    if (arrOfSpecialty[j] === 'web') {
      arr.push(new WebProject(arrOfDifficulty[k]));
    } else if (arrOfSpecialty[j] === 'mobile') {
      arr.push(new MobileProject(arrOfDifficulty[k]));
    }
  }
}
class Programmer {
  constructor() {
    this.experience = 0;
    this.currentProject = null;
    this.workDays = 0;
    this.doNothingDays = 1;
  }

  takeProject(project) {
    this.currentProject = project;
    this.experience += 1;
  }

  workDaysOnProject() {
    this.workDays += 1;
    this.doNothingDays = 1;
  }

  endWorkOnProject() {
    this.workDays = 0;
    this.currentProject.status = 'ready for test';
  }

  removeProject() {
    this.currentProject = null;
  }

  doNothing() {
    this.doNothingDays += 1;
  }
}
class WebProgrammer extends Programmer {
}
class MobileProgrammer extends Programmer {
}
class Director {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.projects = [];
    this.programmers = [];
    this.newStaff = 0;
    this.numberOfProgrammers = 0;
    this.numberOfProjects = 0;
  }

  addProject() {
    const arr = this.projects;
    randomProjects(arr);
    this.numberOfProjects = this.projects.length;
  }

  addProgrammer() {
    this.projects.forEach((item) => {
      if (item instanceof WebProject) {
        this.programmers.push(new WebProgrammer());
        this.newStaff += 1;
        this.numberOfProgrammers += 1;
      } else if (item instanceof MobileProject) {
        for (let i = 0; i < item.difficulty; i += 1) {
          this.programmers.push(new MobileProgrammer());
          this.newStaff += 1;
          this.numberOfProgrammers += 1;
        }
      }
    });
  }

  transferProject() {
    this.transferProjectNumber += 1;
  }

  deleteProjects() {
    for (let i = 0; i < this.transferProjectNumber; i += 1) {
      this.projects.shift();
    }
  }
}
class PartOfCompany {
  constructor() {
    this.programmers = [];
    this.projects = [];
    this.dismissedWorkers = 0;
  }

  takeProject(project) {
    this.programmers.some((programmer) => {
      if (programmer.currentProject === null) {
        programmer.takeProject(project);
        return programmer;
      }
    });
  }

  addProgrammer(programmer) {
    this.programmers.push(programmer);
  }

  dismissWorker() {
    const n = this.programmers.length;
    for (let i = 0; i < n; i += 1) {
      const programmer = this.programmers[i];
      if (programmer.experience > 0 && programmer.doNothingDays > 3) {
        this.dismissedWorkers += 1;
        this.programmers.slice(i, 1);
        i -= 1;
      }
    }
  }
}
class Web extends PartOfCompany {
  workDay() {
    this.programmers.forEach((programmer) => {
      if (programmer.currentProject !== null && programmer.currentProject.difficulty !== programmer.workDays) {
        programmer.workDaysOnProject();
      } else if (programmer.currentProject && programmer.currentProject.difficulty === programmer.workDays) {
        programmer.endWorkOnProject();
      } else if (programmer.currentProject === null) {
        programmer.doNothing();
      }
    });
  }
}
class Mobile extends PartOfCompany {
  workDay() {
    this.programmers.forEach((programmer) => {
      if (programmer.currentProject !== null && programmer.workDays === 0) {
        programmer.workDaysOnProject();
      } else if (programmer.currentProject && programmer.workDays === 1) {
        programmer.endWorkOnProject();
      } else if (programmer.currentProject === null) {
        programmer.doNothing();
      }
    });
  }
}
class Testers extends PartOfCompany {
  constructor() {
    super();
    this.workDays = 0;
    this.implementProject = 0;
  }

  takeProjectOnTest(project) {
    this.projects.push(project);
  }

  testProject() {
    const n = this.projects.length;
    const projects = this.projects;
    for (let i = 0; i < n; i += 1) {
      const project = projects.shift();
      if (project.status !== 'ready') {
        project.readyForImplement();
      } else if (project.status === 'ready') {
        this.implementProject += 1;
      }
    }
  }
}
class Firm {
  constructor(name) {
    this.name = name;
    this.director = null;
    this.webDepartament = null;
    this.mobileDepartament = null;
    this.testDepartament = null;
  }

  hireDirector(name, age) {
    this.director = new Director(name, age);
  }

  openDepartament(type) {
    if (type === 'web') {
      this.webDepartament = new Web();
    } else if (type === 'mobile') {
      this.mobileDepartament = new Mobile();
    } else if (type === 'test') {
      this.testDepartament = new Testers();
    }
  }
}
function workCompany(days) { // ноль проектов, ноль программистов
  const lds = new Firm('Lodoss');
  lds.hireDirector('Denis', 35);
  lds.openDepartament('web');
  lds.openDepartament('mobile');
  lds.openDepartament('test');
  for (let j = 1; j < (days + 1); j += 1) {
    lds.director.addProgrammer();
    for (let i = 0; i < (lds.director.numberOfProgrammers + 1); i += 1) {
      const programmer = lds.director.programmers.shift();
      if (programmer instanceof WebProgrammer) {
        lds.webDepartament.addProgrammer(programmer);
      } else if (programmer instanceof MobileProgrammer) {
        lds.mobileDepartament.addProgrammer(programmer);
      }
    }
    lds.director.addProject();
    for (let i = 0; i < lds.director.numberOfProjects; i += 1) {
      const project = lds.director.projects[i];
      if (project instanceof WebProject && lds.webDepartament.programmers) {
        lds.webDepartament.takeProject(project);
        lds.director.transferProject();
      } else if (project instanceof MobileProject && lds.mobileDepartament.programmers && (lds.mobileDepartament.programmers.filter(programmer => programmer.currentProject === null)).length >= project.difficulty) {
        for (let d = 0; d < project.difficulty; d += 1) {
          lds.mobileDepartament.takeProject(project);
          lds.director.transferProject();
        }
      }
    }
    lds.director.deleteProjects();
    lds.webDepartament.workDay();
    lds.webDepartament.programmers.forEach((programmer) => {
      if (programmer.currentProject !== null) {
        if (programmer.currentProject.status === 'ready for test') {
          lds.testDepartament.takeProjectOnTest(programmer.currentProject);
          programmer.removeProject();
        }
      }
    });
    lds.mobileDepartament.workDay();
    lds.mobileDepartament.programmers.forEach((programmer) => {
      if (programmer.currentProject !== null) {
        if (programmer.currentProject.status === 'ready for test') {
          lds.testDepartament.takeProjectOnTest(programmer.currentProject);
          programmer.removeProject();
        }
      }
    });
    lds.testDepartament.testProject();
    lds.webDepartament.dismissWorker();
    lds.mobileDepartament.dismissWorker();
  }
  console.log(`Количество нанятых работников: ${lds.director.newStaff}`);
  console.log(`Количество выполненных проектов: ${lds.testDepartament.implementProject}`);
  console.log(`Количество уволенных сотрудсников: ${lds.webDepartament.dismissedWorkers + lds.mobileDepartament.dismissedWorkers}`);
}
workCompany(5);
