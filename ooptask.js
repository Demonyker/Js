class Director {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.projects = 0;
    this.progers = [];
  }

  getProjects(projects) {
    if (projects.length > 4) {
      console.log('Слишком много проектов, не могу принять');
    } else {
      this.projects = projects;
    }
  }

  getProgers(Proger, id, spec) {
    this.progers.push(new Proger(id, spec));
  }
}
class PartOfCompany {
  constructor(progers, projects) {
    this.progers = progers;
    this.projects = projects;
  }
}
class WebDev extends PartOfCompany {
  constructor(progers, projects) {
    super(progers, projects);
    this.spec = 'web';
  }

  takeProject(i) {
    this.progers[i].projects += 1;
    this.progers[i].status = 'busy';
    this.progers[i].exp += 1;
    this.project[i] = `На этом проекте работает программист ${this.progers[i].id}`;
  }
}
class MobDev extends PartOfCompany {
  constructor(progers, projects) {
    super(progers, projects);
    this.spec = 'mobile';
  }

  takeProjectOnPr(i) {
    this.progers[i].projects += 1;
    this.progers[i].status = 'busy';
    this.progers[i].exp += 1;
  }

  takeProjectOnPart(i) {
    this.project[i] = `На этом проекте работает программист ${this.progers[i].id}`;
  }
}
class Testers extends PartOfCompany {
  constructor() {
    super();
    this.spec = 'testers';
  }
}
class Proger {
  constructor(id, spec) {
    this.id = id;
    this.spec = spec;
    this.exp = 0;
    this.curPr = 0;
    this.status = 'free';
  }
}


/* let arrT = [];
arrT.push(new Proger(1, 'mob'));
arrT.push(new Proger(2, 'web'));
arrT.push(new Proger(3, 'mob'));
arrT.push(new Proger(4, 'web'));
arrT.push(new Proger(5, 'web'));
let diff = 3;
let test = 0;
  arrT.some((key, k) => {
    if (key.spec === 'web') {
    console.log(key.id);
    test += 1;
    }
    if (test === diff) {
      return test;
    }
});
*/
function workCompany(days, numofPr, massOfPr) { // ноль проектов, ноль программистов
  let realizePr = 0;
  let newStaff = 0;
  let rmStaff = 0;
  let rabotniki = [];
  let mobRab;
  const denis = new Director('Denis', 35);
  const web = new WebDev();
  const mob = new MobDev();
  const testers = new Testers();
  let projects = [];
  for (let j = 0; j < days; j += 1) {
    let diff = 0; // очень нужно для работы моб. отдела
    let naim = 0; // количество нанятых работников
    if (denis.projects.length > 0) {
      denis.projects.forEach((item) => {
        const Pr = item.split(', ');
        const theme = Pr[0];
        const difficulty = Pr[1];
        if (theme === 'web') {
          denis.getProgers(Proger, naim, theme);
          naim += 1;
        } else if (theme === 'mob') {
          for (let naimR = 0; naimR < difficulty; naimR += 1) {
            denis.getProgers(Proger, naim, theme);
            naim += 1;
          }
        }
      });
    }
    if (numofPr > 4) {
      console.log('Слишком много проектов');
    } else {
      for (let i = 0; i < numofPr; i += 1) {
        projects.push(massOfPr[i]);
        denis.getProjects(projects);
      }
    }
    if (denis.projects.length > 0) {
      denis.projects.forEach((item, i) => {
        const Pr = item.split(', ');
        const theme = Pr[0];
        const difficulty = Pr[1];
        if (theme === 'web' && (web.progers.length > 0)) {
          web.progers.some((key, k) => {
            if (key.status === 'free') {
              web.takeProject(k);
              denis.projects.splice(i, 1);
            }
            return k;
          });
        } else if (theme === 'mob' && (mob.progers.length > 0) && (mob.progers.filter(rabotnik => rabotnik.status === 'free')).length >= +difficulty) {
          mob.progers.some((key, k) => {
            if (key.status === 'free') {
              mob.takeProjectOnPr(k);
              mobRab.push(mob.progers[k].id);
              diff += 1;
            }
            if (diff === +difficulty) {
              mobRab.forEach((idRab, l) => {
              
              })
              mob.takeProjectOnPart();
              denis.projects.splice(i, 1);
              return diff;
            }
          });
        }
      });
    }
  }
}
workCompany(2);