class Director {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.projects = [];
    this.progers = [];
    this.newStaff = 0;
    this.realPr = 0;
    this.rmWorkers = 0;
  }

  getProjects(project) {
    this.projects.push(project);
  }

  getProgers(Proger, id, spec) {
    this.progers.push(new Proger(id, spec));
    this.newStaff += 1;
  }

  realisePr() {
    this.realPr += 1;
  }

  deleteWorker() {
    this.rmWorkers += 1;
  }
}
class PartOfCompany {
  constructor() {
    this.progers = [];
    this.projects = [];
  }

  takeProject(i, pr) {
    this.progers[i].curPr = pr;
    this.progers[i].status = 'busy';
    this.progers[i].exp += 1;
  }
}
class WebDev extends PartOfCompany {
  constructor() {
    super();
    this.spec = 'web';
  }

  getProgers(Proger, id, spec) {
    this.progers.push(new Proger(id, spec));
    this.newStaff += 1;
  }
}
class MobDev extends PartOfCompany {
  constructor() {
    super();
    this.spec = 'mob';
  }

  getProgers(Proger, id, spec) {
    this.progers.push(new Proger(id, spec));
    this.newStaff += 1;
  }
}
class Testers extends PartOfCompany {
  constructor() {
    super();
    this.spec = 'test';
    this.workD = 0;
  }

  takePrOnTest(project) {
    this.projects.push(project);
  }

  realisePr(i) {
    this.workD = 0;
    this.projects.splice(i, 1);
  }

  preReal(i) {
    this.projects[i].status = 'ready';
  }
}
class Proger {
  constructor(id, spec) {
    this.id = id;
    this.spec = spec;
    this.exp = 0;
    this.curPr = {};
    this.status = 'free';
    this.workD = 0;
    this.doNC = 1;
  }

  workDaysOnPr() {
    this.workD += 1;
    this.doNC = 1;
  }

  endWorkPr() {
    this.workD = 0;
    this.status = 'free';
    this.curPr = null;
  }

  doNoth() {
    this.doNC += 1;
  }
}
class Project {
  constructor(spec, diffic, name) {
    this.spec = spec;
    this.diffic = diffic;
    this.name = name;
    this.status = 'unready';
  }
}

const pr1 = new Project('web', 1, 'sait1');
const pr2 = new Project('mob', 2, 'inst');
const pr3 = new Project('mob', 2, 'tinder');
const pr4 = new Project('mob', 2, 'tinder');
const pr5 = new Project('mob', 2, 'inst');
const pr6 = new Project('mob', 2, 'inst');
const pr7 = new Project('mob', 2, 'inst');
const pr8 = new Project('mob', 2, 'tinder');
const pr9 = new Project('mob', 2, 'tinder');
const pr10 = new Project('mob', 2, 'tinder');
const pr11 = new Project('mob', 2, 'inst');
const pr13 = new Project('mob', 2, 'tinder');
const pr14 = new Project('mob', 2, 'tinder');
const pr15 = new Project('mob', 2, 'tinder');
const pr16 = new Project('mob', 2, 'inst');
const pr17 = new Project('mob', 2, 'tinder');
const pr18 = new Project('mob', 2, 'tinder');
const pr19 = new Project('mob', 2, 'tinder');
const massOfP = [pr1, pr2, pr3, pr4, pr5, pr6, pr7, pr8, pr9, pr10, pr11, pr13, pr14, pr15, pr16, pr17, pr18, pr19];
function workCompany(days, numofPr, massOfPr) { // ноль проектов, ноль программистов
  const denis = new Director('Denis', 35);
  const web = new WebDev();
  const mob = new MobDev();
  const test = new Testers();
  for (let j = 1; j < (days + 1); j += 1) {
    let diff = 0; // очень нужно для работы моб. отдела
    let naim;// счетчик нанятых работников
    if (denis.projects.length > 0) {
      denis.projects.forEach((item) => {
        naim = denis.newStaff + 1;
        if (item.spec === 'web') {
          web.getProgers(Proger, naim, item.spec);
          denis.newStaff += 1;
          naim += 1;
        } else if (item.spec === 'mob') {
          for (let naimR = 0; naimR < item.diffic; naimR += 1) {
            mob.getProgers(Proger, (naim + naimR), item.spec);
            denis.newStaff += 1;
          }
        }
      });
    }
    if (numofPr > 4) {
      console.log('Слишком много проектов');
    } else {
      for (let i = 0; i < numofPr; i += 1) {
        denis.getProjects(massOfPr[i]);
      }
      massOfPr.splice(0, numofPr);
    }
    if (denis.projects.length > 0) {
      denis.projects.forEach((item, i) => {
        if (item.spec === 'web' && (web.progers.length > 0)) {
          web.progers.some((key, k) => {
            if (key.status === 'free') {
              web.takeProject(k, denis.projects[i]);
              denis.projects.splice(i, 1);
            }
            return key;
          });
        } else if (item.spec === 'mob' && (mob.progers.length > 0) && (mob.progers.filter(rabotnik => rabotnik.status === 'free')).length >= item.diffic) {
          mob.progers.some((key, k) => {
            if (key.status === 'free') {
              mob.takeProject(k, denis.projects[i]);
              diff += 1;
            }
            if (diff === item.diffic) {
              denis.projects.splice(i, 1);
              return k;
            }
            return k;
          });
        }
      });
    }
    web.progers.forEach((item) => {
      if (item.status === 'busy' && item.curPr.diffic !== item.workD) {
        item.workDaysOnPr();
      } else if (item.curPr && item.curPr.diffic === item.workD) {
        test.takePrOnTest(item.curPr);
        item.endWorkPr();
      } else if (item.curPr === null) {
        item.doNoth();
        console.log(item.id, 't3', item.doNC, j);
      }
    });
    mob.progers.forEach((item) => {
      if (item.status === 'busy' && item.workD === 0) {
        item.workDaysOnPr();
      } else if (item.curPr && item.workD === 1) {
        test.takePrOnTest(item.curPr);
        item.endWorkPr();
      } else if (item.curPr === null) {
        item.doNoth();
      }
    });
    test.projects.some((item, i) => {
      if (item.status !== 'ready') {
        test.preReal(i);
      } else if (item.status === 'ready') {
        test.realisePr(i);
        denis.realisePr();
      }
      return item;
    });
    web.progers.forEach((item, i) => {
      if (item.exp > 0 && item.doNC > 3) {
        web.progers.splice(i, 1);
        denis.deleteWorker();
      }
    });
    mob.progers.forEach((item, i) => {
      if (item.exp > 0 && item.doNC > 3) {
        web.progers.splice(i, 1);
        denis.deleteWorker();
      }
    });
  }
  console.log(denis.newStaff);
  console.log(denis.realPr);
  console.log(denis.rmWorkers);
}
workCompany(7, 2, massOfP);