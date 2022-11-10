/********************* 
 * Kirjaimet15A Test *
 *********************/

import { PsychoJS } from 'https://pavlovia.org/lib/core-3.2.js';
import * as core from 'https://pavlovia.org/lib/core-3.2.js';
import { TrialHandler } from 'https://pavlovia.org/lib/data-3.2.js';
import { Scheduler } from 'https://pavlovia.org/lib/util-3.2.js';
import * as util from 'https://pavlovia.org/lib/util-3.2.js';
import * as visual from 'https://pavlovia.org/lib/visual-3.2.js';
import { Sound } from 'https://pavlovia.org/lib/sound-3.2.js';

// init psychoJS:
var psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'norm',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'kirjaimet15a';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin);
flowScheduler.add(instructionsRoutineEachFrame);
flowScheduler.add(instructionsRoutineEnd);
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin, trialsLoopScheduler);
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({expName, expInfo});

var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '3.2.4';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0/Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0/60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}

var instructionsClock;
var mouse_3;
var text_2;
var trialClock;
var mouse;
var v03;
var v04;
var v05;
var v07;
var v08;
var v09;
var v10;
var v12;
var v13;
var v14;
var v15;
var v17;
var v18;
var v19_oikea;
var v20;
var clicktocontinueClock;
var text;
var mouse_2;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  mouse_3 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_3.mouseClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: '   paina kirjainyhdistelmää \n                   LKI\n\n(paina näyttöä aloittaaksesi)',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  mouse = new core.Mouse({
    win: psychoJS.window,
  });
  mouse.mouseClock = new util.Clock();
  v03 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v03', units : undefined, 
    image : 'ikj.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  v04 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v04', units : undefined, 
    image : 'ikl.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -2.0 
  });
  v05 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v05', units : undefined, 
    image : 'ilk.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -3.0 
  });
  v07 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v07', units : undefined, 
    image : 'jki.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -4.0 
  });
  v08 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v08', units : undefined, 
    image : 'jkl.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -5.0 
  });
  v09 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v09', units : undefined, 
    image : 'jli.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -6.0 
  });
  v10 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v10', units : undefined, 
    image : 'jlk.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -7.0 
  });
  v12 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v12', units : undefined, 
    image : 'kil.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -8.0 
  });
  v13 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v13', units : undefined, 
    image : 'kjl.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -9.0 
  });
  v14 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v14', units : undefined, 
    image : 'kli.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -10.0 
  });
  v15 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v15', units : undefined, 
    image : 'klj.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -11.0 
  });
  v17 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v17', units : undefined, 
    image : 'lik.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -12.0 
  });
  v18 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v18', units : undefined, 
    image : 'lji.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -13.0 
  });
  v19_oikea = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v19_oikea', units : undefined, 
    image : 'lki.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -14.0 
  });
  v20 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'v20', units : undefined, 
    image : 'lkj.png', mask : undefined,
    ori : 0, pos : [0, 0], size : 1.0,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -15.0 
  });
  // Initialize components for Routine "clicktocontinue"
  clicktocontinueClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: '   paina kirjainyhdistelmää \n                   LKI\n\n(paina näyttöä jatkaaksesi)',
    font: 'Arial',
    units : undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  mouse_2 = new core.Mouse({
    win: psychoJS.window,
  });
  mouse_2.mouseClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}

var t;
var frameN;
var gotValidClick;
var instructionsComponents;
function instructionsRoutineBegin() {
  //------Prepare to start Routine 'instructions'-------
  t = 0;
  instructionsClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // setup some python lists for storing info about the mouse_3
  gotValidClick = false; // until a click is received
  // keep track of which components have finished
  instructionsComponents = [];
  instructionsComponents.push(mouse_3);
  instructionsComponents.push(text_2);
  
  for (const thisComponent of instructionsComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}

var prevButtonState;
var continueRoutine;
function instructionsRoutineEachFrame() {
  //------Loop for each frame of Routine 'instructions'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = instructionsClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  // *mouse_3* updates
  if (t >= 1 && mouse_3.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    mouse_3.tStart = t;  // (not accounting for frame time here)
    mouse_3.frameNStart = frameN;  // exact frame index
    mouse_3.status = PsychoJS.Status.STARTED;
    mouse_3.mouseClock.reset();
    prevButtonState = mouse_3.getPressed();  // if button is down already this ISN'T a new click
    }
  if (mouse_3.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
    let buttons = mouse_3.getPressed();
    if (!buttons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
      prevButtonState = buttons;
      if (buttons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
        // abort routine on response
        continueRoutine = false;
      }
    }
  }
  
  // *text_2* updates
  if (t >= 0.5 && text_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text_2.tStart = t;  // (not accounting for frame time here)
    text_2.frameNStart = frameN;  // exact frame index
    text_2.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of instructionsComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function instructionsRoutineEnd() {
  //------Ending Routine 'instructions'-------
  for (const thisComponent of instructionsComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // store data for thisExp (ExperimentHandler)
  // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var trials;
var currentLoop;
function trialsLoopBegin(thisScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'img_pos.xlsx',
    seed: undefined, name: 'trials'});
  psychoJS.experiment.addLoop(trials); // add the loop to the experiment
  currentLoop = trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial of trials) {
    thisScheduler.add(importConditions(trials));
    thisScheduler.add(trialRoutineBegin);
    thisScheduler.add(trialRoutineEachFrame);
    thisScheduler.add(trialRoutineEnd);
    thisScheduler.add(clicktocontinueRoutineBegin);
    thisScheduler.add(clicktocontinueRoutineEachFrame);
    thisScheduler.add(clicktocontinueRoutineEnd);
    thisScheduler.add(endLoopIteration({thisScheduler, isTrials : true}));
  }

  return Scheduler.Event.NEXT;
}


function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}

var trialComponents;
function trialRoutineBegin() {
  //------Prepare to start Routine 'trial'-------
  t = 0;
  trialClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // setup some python lists for storing info about the mouse
  // current position of the mouse:
  mouse.x = [];
  mouse.y = [];
  mouse.leftButton = [];
  mouse.midButton = [];
  mouse.rightButton = [];
  mouse.time = [];
  mouse.clicked_name = [];
  gotValidClick = false; // until a click is received
  v03.setPos([px03, py03]);
  v03.setSize([pw, ph]);
  v04.setPos([px04, py04]);
  v04.setSize([pw, ph]);
  v05.setPos([px05, py05]);
  v05.setSize([pw, ph]);
  v07.setPos([px07, py07]);
  v07.setSize([pw, ph]);
  v08.setPos([px08, py08]);
  v08.setSize([pw, ph]);
  v09.setPos([px09, py09]);
  v09.setSize([pw, ph]);
  v10.setPos([px10, py10]);
  v10.setSize([pw, ph]);
  v12.setPos([px12, py12]);
  v12.setSize([pw, ph]);
  v13.setPos([px13, py13]);
  v13.setSize([pw, ph]);
  v14.setPos([px14, py14]);
  v14.setSize([pw, ph]);
  v15.setPos([px15, py15]);
  v15.setSize([pw, ph]);
  v17.setPos([px17, py17]);
  v17.setSize([pw, ph]);
  v18.setPos([px18, py18]);
  v18.setSize([pw, ph]);
  v19_oikea.setPos([px19, py19]);
  v19_oikea.setSize([pw, ph]);
  v20.setPos([px20, py20]);
  v20.setSize([pw, ph]);
  // keep track of which components have finished
  trialComponents = [];
  trialComponents.push(mouse);
  trialComponents.push(v03);
  trialComponents.push(v04);
  trialComponents.push(v05);
  trialComponents.push(v07);
  trialComponents.push(v08);
  trialComponents.push(v09);
  trialComponents.push(v10);
  trialComponents.push(v12);
  trialComponents.push(v13);
  trialComponents.push(v14);
  trialComponents.push(v15);
  trialComponents.push(v17);
  trialComponents.push(v18);
  trialComponents.push(v19_oikea);
  trialComponents.push(v20);
  
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function trialRoutineEachFrame() {
  //------Loop for each frame of Routine 'trial'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = trialClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  // *mouse* updates
  if (t >= 0.5 && mouse.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    mouse.tStart = t;  // (not accounting for frame time here)
    mouse.frameNStart = frameN;  // exact frame index
    mouse.status = PsychoJS.Status.STARTED;
    mouse.mouseClock.reset();
    prevButtonState = mouse.getPressed();  // if button is down already this ISN'T a new click
    }
  if (mouse.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
    let buttons = mouse.getPressed();
    if (!buttons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
      prevButtonState = buttons;
      if (buttons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
        const xys = mouse.getPos();
        mouse.x.push(xys[0]);
        mouse.y.push(xys[1]);
        mouse.leftButton.push(buttons[0]);
        mouse.midButton.push(buttons[1]);
        mouse.rightButton.push(buttons[2]);
        mouse.time.push(mouse.mouseClock.getTime());
        // check if the mouse was inside our 'clickable' objects
        gotValidClick = false;
        for (const obj of [v03,v04,v05,v07,v08,v09,v10,v12,v13,v14,v15,v17,v18,v19_oikea,v20]) {
          if (obj.contains(mouse)) {
            gotValidClick = true;
            mouse.clicked_name.push(obj.name)
          }
        }
        if (gotValidClick === true) { // abort routine on response
          continueRoutine = false;
        }
      }
    }
  }
  
  // *v03* updates
  if (t >= 0.5 && v03.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    v03.tStart = t;  // (not accounting for frame time here)
    v03.frameNStart = frameN;  // exact frame index
    v03.setAutoDraw(true);
  }

  
  // *v04* updates
  if (t >= 0.5 && v04.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    v04.tStart = t;  // (not accounting for frame time here)
    v04.frameNStart = frameN;  // exact frame index
    v04.setAutoDraw(true);
  }

  
  // *v05* updates
  if (t >= 0.5 && v05.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    v05.tStart = t;  // (not accounting for frame time here)
    v05.frameNStart = frameN;  // exact frame index
    v05.setAutoDraw(true);
  }

  
  // *v07* updates
  if (t >= 0.5 && v07.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    v07.tStart = t;  // (not accounting for frame time here)
    v07.frameNStart = frameN;  // exact frame index
    v07.setAutoDraw(true);
  }

  
  // *v08* updates
  if (t >= 0.5 && v08.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    v08.tStart = t;  // (not accounting for frame time here)
    v08.frameNStart = frameN;  // exact frame index
    v08.setAutoDraw(true);
  }

  
  // *v09* updates
  if (t >= 0.5 && v09.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    v09.tStart = t;  // (not accounting for frame time here)
    v09.frameNStart = frameN;  // exact frame index
    v09.setAutoDraw(true);
  }

  
  // *v10* updates
  if (t >= 0.5 && v10.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    v10.tStart = t;  // (not accounting for frame time here)
    v10.frameNStart = frameN;  // exact frame index
    v10.setAutoDraw(true);
  }

  
  // *v12* updates
  if (t >= 0.5 && v12.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    v12.tStart = t;  // (not accounting for frame time here)
    v12.frameNStart = frameN;  // exact frame index
    v12.setAutoDraw(true);
  }

  
  // *v13* updates
  if (t >= 0.5 && v13.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    v13.tStart = t;  // (not accounting for frame time here)
    v13.frameNStart = frameN;  // exact frame index
    v13.setAutoDraw(true);
  }

  
  // *v14* updates
  if (t >= 0.5 && v14.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    v14.tStart = t;  // (not accounting for frame time here)
    v14.frameNStart = frameN;  // exact frame index
    v14.setAutoDraw(true);
  }

  
  // *v15* updates
  if (t >= 0.5 && v15.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    v15.tStart = t;  // (not accounting for frame time here)
    v15.frameNStart = frameN;  // exact frame index
    v15.setAutoDraw(true);
  }

  
  // *v17* updates
  if (t >= 0.5 && v17.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    v17.tStart = t;  // (not accounting for frame time here)
    v17.frameNStart = frameN;  // exact frame index
    v17.setAutoDraw(true);
  }

  
  // *v18* updates
  if (t >= 0.5 && v18.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    v18.tStart = t;  // (not accounting for frame time here)
    v18.frameNStart = frameN;  // exact frame index
    v18.setAutoDraw(true);
  }

  
  // *v19_oikea* updates
  if (t >= 0.5 && v19_oikea.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    v19_oikea.tStart = t;  // (not accounting for frame time here)
    v19_oikea.frameNStart = frameN;  // exact frame index
    v19_oikea.setAutoDraw(true);
  }

  
  // *v20* updates
  if (t >= 0.5 && v20.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    v20.tStart = t;  // (not accounting for frame time here)
    v20.frameNStart = frameN;  // exact frame index
    v20.setAutoDraw(true);
  }

  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of trialComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function trialRoutineEnd() {
  //------Ending Routine 'trial'-------
  for (const thisComponent of trialComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // store data for thisExp (ExperimentHandler)
  if (mouse.x) {  psychoJS.experiment.addData('mouse.x', mouse.x[0])};
  if (mouse.y) {  psychoJS.experiment.addData('mouse.y', mouse.y[0])};
  if (mouse.leftButton) {  psychoJS.experiment.addData('mouse.leftButton', mouse.leftButton[0])};
  if (mouse.midButton) {  psychoJS.experiment.addData('mouse.midButton', mouse.midButton[0])};
  if (mouse.rightButton) {  psychoJS.experiment.addData('mouse.rightButton', mouse.rightButton[0])};
  if (mouse.time) {  psychoJS.experiment.addData('mouse.time', mouse.time[0])};
  if (mouse.clicked_name) {  psychoJS.experiment.addData('mouse.clicked_name', mouse.clicked_name[0])};
  
  // the Routine "trial" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}

var clicktocontinueComponents;
function clicktocontinueRoutineBegin() {
  //------Prepare to start Routine 'clicktocontinue'-------
  t = 0;
  clicktocontinueClock.reset(); // clock
  frameN = -1;
  // update component parameters for each repeat
  // setup some python lists for storing info about the mouse_2
  gotValidClick = false; // until a click is received
  // keep track of which components have finished
  clicktocontinueComponents = [];
  clicktocontinueComponents.push(text);
  clicktocontinueComponents.push(mouse_2);
  
  for (const thisComponent of clicktocontinueComponents)
    if ('status' in thisComponent)
      thisComponent.status = PsychoJS.Status.NOT_STARTED;
  
  return Scheduler.Event.NEXT;
}


function clicktocontinueRoutineEachFrame() {
  //------Loop for each frame of Routine 'clicktocontinue'-------
  let continueRoutine = true; // until we're told otherwise
  // get current time
  t = clicktocontinueClock.getTime();
  frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
  // update/draw components on each frame
  
  // *text* updates
  if (t >= 0.5 && text.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    text.tStart = t;  // (not accounting for frame time here)
    text.frameNStart = frameN;  // exact frame index
    text.setAutoDraw(true);
  }

  // *mouse_2* updates
  if (t >= 0.5 && mouse_2.status === PsychoJS.Status.NOT_STARTED) {
    // keep track of start time/frame for later
    mouse_2.tStart = t;  // (not accounting for frame time here)
    mouse_2.frameNStart = frameN;  // exact frame index
    mouse_2.status = PsychoJS.Status.STARTED;
    mouse_2.mouseClock.reset();
    prevButtonState = mouse_2.getPressed();  // if button is down already this ISN'T a new click
    }
  if (mouse_2.status === PsychoJS.Status.STARTED) {  // only update if started and not finished!
    let buttons = mouse_2.getPressed();
    if (!buttons.every( (e,i,) => (e == prevButtonState[i]) )) { // button state changed?
      prevButtonState = buttons;
      if (buttons.reduce( (e, acc) => (e+acc) ) > 0) { // state changed to a new click
        // abort routine on response
        continueRoutine = false;
      }
    }
  }
  // check for quit (typically the Esc key)
  if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
    return psychoJS.quit('The [Escape] key was pressed. Goodbye!', false);
  }
  
  // check if the Routine should terminate
  if (!continueRoutine) {  // a component has requested a forced-end of Routine
    return Scheduler.Event.NEXT;
  }
  
  continueRoutine = false;  // reverts to True if at least one component still running
  for (const thisComponent of clicktocontinueComponents)
    if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
      continueRoutine = true;
      break;
    }
  
  // refresh the screen if continuing
  if (continueRoutine) {
    return Scheduler.Event.FLIP_REPEAT;
  }
  else {
    return Scheduler.Event.NEXT;
  }
}


function clicktocontinueRoutineEnd() {
  //------Ending Routine 'clicktocontinue'-------
  for (const thisComponent of clicktocontinueComponents) {
    if (typeof thisComponent.setAutoDraw === 'function') {
      thisComponent.setAutoDraw(false);
    }
  }
  // store data for thisExp (ExperimentHandler)
  // the Routine "clicktocontinue" was not non-slip safe, so reset the non-slip timer
  routineTimer.reset();
  
  return Scheduler.Event.NEXT;
}


function endLoopIteration({thisScheduler, isTrials=true}) {
  // ------Prepare for next entry------
  return function () {
    // ------Check if user ended loop early------
    if (currentLoop.finished) {
      // Check for and save orphaned data
      if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
        psychoJS.experiment.nextEntry();
      }
      thisScheduler.stop();
    } else if (isTrials) {
      psychoJS.experiment.nextEntry();
    }
  return Scheduler.Event.NEXT;
  };
}


function importConditions(loop) {
  const trialIndex = loop.getTrialIndex();
  return function () {
    loop.setTrialIndex(trialIndex);
    psychoJS.importAttributes(loop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (Object.keys(psychoJS.experiment._thisEntry).length > 0) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});

  return Scheduler.Event.QUIT;
}
