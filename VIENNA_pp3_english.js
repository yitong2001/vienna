/*************************** 
 * Vienna_Pp3_English Test *
 ***************************/

import { core, data, sound, util, visual } from './lib/psychojs-2021.2.3.js';
const { PsychoJS } = core;
const { TrialHandler } = data;
const { Scheduler } = util;
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;
const { round } = util;


// store info about the experiment session:
let expName = 'VIENNA_pp3_english';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '1'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'norm',
  waitBlanking: true
});
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
flowScheduler.add(welcomeRoutineBegin());
flowScheduler.add(welcomeRoutineEachFrame());
flowScheduler.add(welcomeRoutineEnd());
flowScheduler.add(Instructions_test0RoutineBegin());
flowScheduler.add(Instructions_test0RoutineEachFrame());
flowScheduler.add(Instructions_test0RoutineEnd());
flowScheduler.add(Instructions_test1RoutineBegin());
flowScheduler.add(Instructions_test1RoutineEachFrame());
flowScheduler.add(Instructions_test1RoutineEnd());
flowScheduler.add(Instructions_test2RoutineBegin());
flowScheduler.add(Instructions_test2RoutineEachFrame());
flowScheduler.add(Instructions_test2RoutineEnd());
flowScheduler.add(Instructions_test3RoutineBegin());
flowScheduler.add(Instructions_test3RoutineEachFrame());
flowScheduler.add(Instructions_test3RoutineEnd());
flowScheduler.add(InstructionVideoRoutineBegin());
flowScheduler.add(InstructionVideoRoutineEachFrame());
flowScheduler.add(InstructionVideoRoutineEnd());
flowScheduler.add(Uebung1RoutineBegin());
flowScheduler.add(Uebung1RoutineEachFrame());
flowScheduler.add(Uebung1RoutineEnd());
flowScheduler.add(Uebung2RoutineBegin());
flowScheduler.add(Uebung2RoutineEachFrame());
flowScheduler.add(Uebung2RoutineEnd());
flowScheduler.add(Text_startetRoutineBegin());
flowScheduler.add(Text_startetRoutineEachFrame());
flowScheduler.add(Text_startetRoutineEnd());
flowScheduler.add(Test1RoutineBegin());
flowScheduler.add(Test1RoutineEachFrame());
flowScheduler.add(Test1RoutineEnd());
flowScheduler.add(Test2RoutineBegin());
flowScheduler.add(Test2RoutineEachFrame());
flowScheduler.add(Test2RoutineEnd());
flowScheduler.add(Test3RoutineBegin());
flowScheduler.add(Test3RoutineEachFrame());
flowScheduler.add(Test3RoutineEnd());
flowScheduler.add(Test4RoutineBegin());
flowScheduler.add(Test4RoutineEachFrame());
flowScheduler.add(Test4RoutineEnd());
flowScheduler.add(Test5RoutineBegin());
flowScheduler.add(Test5RoutineEachFrame());
flowScheduler.add(Test5RoutineEnd());
flowScheduler.add(Test5aRoutineBegin());
flowScheduler.add(Test5aRoutineEachFrame());
flowScheduler.add(Test5aRoutineEnd());
flowScheduler.add(Test6RoutineBegin());
flowScheduler.add(Test6RoutineEachFrame());
flowScheduler.add(Test6RoutineEnd());
flowScheduler.add(Test7RoutineBegin());
flowScheduler.add(Test7RoutineEachFrame());
flowScheduler.add(Test7RoutineEnd());
flowScheduler.add(Test7aRoutineBegin());
flowScheduler.add(Test7aRoutineEachFrame());
flowScheduler.add(Test7aRoutineEnd());
flowScheduler.add(Test8RoutineBegin());
flowScheduler.add(Test8RoutineEachFrame());
flowScheduler.add(Test8RoutineEnd());
flowScheduler.add(Test9RoutineBegin());
flowScheduler.add(Test9RoutineEachFrame());
flowScheduler.add(Test9RoutineEnd());
flowScheduler.add(Test10RoutineBegin());
flowScheduler.add(Test10RoutineEachFrame());
flowScheduler.add(Test10RoutineEnd());
flowScheduler.add(thanksRoutineBegin());
flowScheduler.add(thanksRoutineEachFrame());
flowScheduler.add(thanksRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'images/MapExample.jpg', 'path': 'resources/images/MapExample.jpg'},
    {'name': 'images/MapInstructions.jpg', 'path': 'resources/images/MapInstructions.jpg'},
    {'name': 'images/MapTest1.jpg', 'path': 'resources/images/MapTest1.jpg'},
    {'name': 'images/MapTest10.jpg', 'path': 'resources/images/MapTest10.jpg'},
    {'name': 'images/MapTest2.jpg', 'path': 'resources/images/MapTest2.jpg'},
    {'name': 'images/MapTest3.jpg', 'path': 'resources/images/MapTest3.jpg'},
    {'name': 'images/MapTest4.jpg', 'path': 'resources/images/MapTest4.jpg'},
    {'name': 'images/MapTest5.jpg', 'path': 'resources/images/MapTest5.jpg'},
    {'name': 'images/MapTest5a.jpg', 'path': 'resources/images/MapTest5a.jpg'},
    {'name': 'images/MapTest6.jpg', 'path': 'resources/images/MapTest6.jpg'},
    {'name': 'images/MapTest7.jpg', 'path': 'resources/images/MapTest7.jpg'},
    {'name': 'images/MapTest7a.jpg', 'path': 'resources/images/MapTest7a.jpg'},
    {'name': 'images/MapTest8.jpg', 'path': 'resources/images/MapTest8.jpg'},
    {'name': 'images/MapTest9.jpg', 'path': 'resources/images/MapTest9.jpg'},
    {'name': 'images/MapUebung1.jpg', 'path': 'resources/images/MapUebung1.jpg'},
    {'name': 'images/MapUebung2.jpg', 'path': 'resources/images/MapUebung2.jpg'},
    {'name': 'videos/Instructions.mp4', 'path': 'resources/videos/Instructions.mp4'},
    {'name': 'videos/Test_1.mp4', 'path': 'resources/videos/Test_1.mp4'},
    {'name': 'videos/Test_10.mp4', 'path': 'resources/videos/Test_10.mp4'},
    {'name': 'videos/Test_2.mp4', 'path': 'resources/videos/Test_2.mp4'},
    {'name': 'videos/Test_3.mp4', 'path': 'resources/videos/Test_3.mp4'},
    {'name': 'videos/Test_4.mp4', 'path': 'resources/videos/Test_4.mp4'},
    {'name': 'videos/Test_5.mp4', 'path': 'resources/videos/Test_5.mp4'},
    {'name': 'videos/Test_5a.mp4', 'path': 'resources/videos/Test_5a.mp4'},
    {'name': 'videos/Test_6.mp4', 'path': 'resources/videos/Test_6.mp4'},
    {'name': 'videos/Test_7.mp4', 'path': 'resources/videos/Test_7.mp4'},
    {'name': 'videos/Test_7a.mp4', 'path': 'resources/videos/Test_7a.mp4'},
    {'name': 'videos/Test_8.mp4', 'path': 'resources/videos/Test_8.mp4'},
    {'name': 'videos/Test_9.mp4', 'path': 'resources/videos/Test_9.mp4'},
    {'name': 'videos/Uebungsdurchgang_1.mp4', 'path': 'resources/videos/Uebungsdurchgang_1.mp4'},
    {'name': 'videos/Uebungsdurchgang_2.mp4', 'path': 'resources/videos/Uebungsdurchgang_2.mp4'}
  ]
});
psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2021.2.3';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var welcomeClock;
var Titel;
var keyboardWelcome;
var SubtextWelcome;
var SubtextBeta;
var Instructions_test0Clock;
var SFeedbackInstructionsTest;
var feedbackKey;
var weiter_text;
var Instructions_test1Clock;
var text_3;
var feedback2_key;
var weiter_text_2;
var Instructions_test2Clock;
var ExampleMap;
var TextSymbols;
var InstructionKey1;
var weitertext;
var Instructions_test3Clock;
var TextInstruktionsvideo;
var startInstructionVideo;
var InstructionVideoClock;
var InstructionsVideoClock;
var InstructionsVideo;
var InstructionMap;
var key_resp_Instructions;
var AufforderungInstruktion;
var Instruktion;
var Uebung1Clock;
var Uebungsdurchgang1VideoClock;
var Uebungsdurchgang1Video;
var Uebungsdurchgang1Map;
var key_resp_Uebung1;
var AufforderungUebung1;
var Uebung1Text;
var Uebung2Clock;
var Uebungsdurchgang2VideoClock;
var Uebungsdurchgang2Video;
var Uebungsdurchgang2Map;
var key_resp_Uebung2;
var AufforderungUebung2;
var Uebung2Text;
var Text_startetClock;
var key_Text_startet;
var text_4;
var Test1Clock;
var Test1VideoClock;
var Test1Video;
var MapTest1;
var KeyboardTest1;
var AufforderungTest1;
var Test1Text;
var Test2Clock;
var Test2VideoClock;
var Test2Video;
var Test2Map;
var KeyboardTest2;
var AufforderungTest2;
var Test2Text;
var Test3Clock;
var Test3VideoClock;
var Test3Video;
var Test3Map;
var KeyboardTest3;
var AufforderungTest3;
var Test3Text;
var Test4Clock;
var Test4VideoClock;
var Test4Video;
var Test4Map;
var KeyboardTest4;
var AufforderungTest4;
var Test4Text;
var Test5Clock;
var Test5VideoClock;
var Test5Video;
var Test5Map;
var KeyboardTest5;
var AufforderungTest5;
var Test5Text;
var Test5aClock;
var Test1Video_2Clock;
var Test1Video_2;
var MapTest1_2;
var KeyboardTest1_2;
var AufforderungTest1_2;
var Test1Text_2;
var Test6Clock;
var Test6VideoClock;
var Test6Video;
var MapTest6;
var KeyboardTest6;
var AufforderungTest6;
var Test6Text;
var Test7Clock;
var Test7VideoClock;
var Test7Video;
var Test7Map;
var KeyboardTest7;
var AufforderungTest7;
var Test7Text;
var Test7aClock;
var Test1Video_3Clock;
var Test1Video_3;
var MapTest1_3;
var KeyboardTest1_3;
var AufforderungTest1_3;
var Test1Text_3;
var Test8Clock;
var Test8VideoClock;
var Test8Video;
var Test8Map;
var KeyboardTest8;
var AufforderungTest8;
var Test8Text;
var Test9Clock;
var Test9VideoClock;
var Test9Video;
var Test9Map;
var KeyboardTest9;
var AufforderungTest8_2;
var Test8Text_2;
var Test10Clock;
var Test10VideoClock;
var Test10Video;
var Test10Map;
var KeyboardTest10;
var AufforderungTest10;
var Test10Text;
var thanksClock;
var DankeText;
var key_resp_thanks;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "welcome"
  welcomeClock = new util.Clock();
  Titel = new visual.TextStim({
    win: psychoJS.window,
    name: 'Titel',
    text: 'VIENNA',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.3], height: 0.2,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  keyboardWelcome = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  SubtextWelcome = new visual.TextStim({
    win: psychoJS.window,
    name: 'SubtextWelcome',
    text: 'Press the space bar to start',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.7)], height: 0.08,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  SubtextBeta = new visual.TextStim({
    win: psychoJS.window,
    name: 'SubtextBeta',
    text: 'Virtual Environments Navigation Assessment\n\n\nRekers, 2018',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.1)], height: 0.09,  wrapWidth: 1.6, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Instructions_test0"
  Instructions_test0Clock = new util.Clock();
  SFeedbackInstructionsTest = new visual.TextStim({
    win: psychoJS.window,
    name: 'SFeedbackInstructionsTest',
    text: 'You are about to see videos from the perspective of a person walking down hallways.\nAs she does this, she stops at doors and at turns to look around.\nThe person may take a turn at a crossing or turn around in the corridor and walk back.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: 1.8, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  feedbackKey = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  weiter_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'weiter_text',
    text: '\nContinue with space bar',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.7)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Instructions_test1"
  Instructions_test1Clock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'You should try to trace where she is on the map next to the video and decide at the end which door she has chosen. This can be recognized by the fact that the person stretches out her arm towards the door handle.\n\nThe map does not change its orientation. Not even if the person turns around.\n\nWhen the person has chosen a door, please tap on the corresponding door on the map.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: 1.6, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  feedback2_key = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  weiter_text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'weiter_text_2',
    text: '\nContinue with space bar',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.7)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  // Initialize components for Routine "Instructions_test2"
  Instructions_test2Clock = new util.Clock();
  ExampleMap = new visual.ImageStim({
    win : psychoJS.window,
    name : 'ExampleMap', units : undefined, 
    image : 'images/MapExample.jpg', mask : undefined,
    ori : 0, pos : [0, (- 0.19)], size : undefined,
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : 0.0 
  });
  TextSymbols = new visual.TextStim({
    win: psychoJS.window,
    name: 'TextSymbols',
    text: 'Here you can see an example of a map.\nThe quarter circles represent doors in a hallway section.\nThe person´s starting position is marked on the map with the word "Start".',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.6], height: 0.075,  wrapWidth: 1.6, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  InstructionKey1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  weitertext = new visual.TextStim({
    win: psychoJS.window,
    name: 'weitertext',
    text: '- You will first see an example and can practice for 2 trials before the actual test starts.\n- If you have any questions, please consult the examiner.\n- The videos CANNOT be paused and CANNOT be repeated. Therefore, please pay close attention while the videos are running.\n- You can take as long a break as you need after each trial.\n\nAs soon as the space bar is pressed, you will first see the map on the right-hand side.\nUse the time to see where the person starts.\n\nAfter 2 seconds, the video starts automatically.',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  // Initialize components for Routine "Instructions_test3"
  Instructions_test3Clock = new util.Clock();
  TextInstruktionsvideo = new visual.TextStim({
    win: psychoJS.window,
    name: 'TextInstruktionsvideo',
    text: '- You will first see an example and can practice for 2 trials before the actual test starts.\n- If you have any questions, please consult the examiner.\n- The videos CANNOT be paused and CANNOT be repeated. Therefore, please pay close attention while the videos are running.\n- You can take as long a break as you need after each trial.\n\nAs soon as the space bar is pressed, you will first see the map on the right-hand side. Use the time to see where the person starts.\n\nAfter 2 seconds, the video starts automatically.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: 1.6, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  startInstructionVideo = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "InstructionVideo"
  InstructionVideoClock = new util.Clock();
  InstructionsVideoClock = new util.Clock();
  InstructionsVideo = new visual.MovieStim({
    win: psychoJS.window,
    name: 'InstructionsVideo',
    units: 'pix',
    movie: 'videos/Instructions.mp4',
    pos: [(- 480), 0],
    size: [850, 480],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: true,
    });
  InstructionMap = new visual.ImageStim({
    win : psychoJS.window,
    name : 'InstructionMap', units : undefined, 
    image : 'images/MapInstructions.jpg', mask : undefined,
    ori : 0, pos : [0.5, 0], size : [0.9, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  key_resp_Instructions = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AufforderungInstruktion = new visual.TextStim({
    win: psychoJS.window,
    name: 'AufforderungInstruktion',
    text: 'Which door did the person choose?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Instruktion = new visual.TextStim({
    win: psychoJS.window,
    name: 'Instruktion',
    text: 'Example:\nTry to trace where the person is.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.8], height: 0.075,  wrapWidth: 1.6, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Uebung1"
  Uebung1Clock = new util.Clock();
  Uebungsdurchgang1VideoClock = new util.Clock();
  Uebungsdurchgang1Video = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Uebungsdurchgang1Video',
    units: 'pix',
    movie: 'videos/Uebungsdurchgang_1.mp4',
    pos: [(- 480), 0],
    size: [850, 480],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: true,
    });
  Uebungsdurchgang1Map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Uebungsdurchgang1Map', units : 'norm', 
    image : 'images/MapUebung1.jpg', mask : undefined,
    ori : 0, pos : [0.5, 0], size : [0.9, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  key_resp_Uebung1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AufforderungUebung1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AufforderungUebung1',
    text: 'Which door did the person choose?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Uebung1Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Uebung1Text',
    text: 'Practice 1',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Uebung2"
  Uebung2Clock = new util.Clock();
  Uebungsdurchgang2VideoClock = new util.Clock();
  Uebungsdurchgang2Video = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Uebungsdurchgang2Video',
    units: 'pix',
    movie: 'videos/Uebungsdurchgang_2.mp4',
    pos: [(- 480), 0],
    size: [850, 480],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: true,
    });
  Uebungsdurchgang2Map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Uebungsdurchgang2Map', units : undefined, 
    image : 'images/MapUebung2.jpg', mask : undefined,
    ori : 0, pos : [0.5, 0], size : [0.9, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  key_resp_Uebung2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AufforderungUebung2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AufforderungUebung2',
    text: 'Which door did the person choose?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Uebung2Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Uebung2Text',
    text: 'Practice 2',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Text_startet"
  Text_startetClock = new util.Clock();
  key_Text_startet = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'This was the practice.\n\nAs soon as the space bar is pressed, the actual test starts.\n\nYou will see a total of 12 different hallway sections.\nIf you are unsure which door has been chosen, choose the door you think is most likely.\nThere is no point deduction for wrong answers.\n\nAgain, as a reminder:\nYou can take breaks AFTER each video. The videos cannot be paused or repeated.\n\nThe test is started with the space bar.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.075,  wrapWidth: 1.6, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  // Initialize components for Routine "Test1"
  Test1Clock = new util.Clock();
  Test1VideoClock = new util.Clock();
  Test1Video = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Test1Video',
    units: 'pix',
    movie: 'videos/Test_1.mp4',
    pos: [(- 480), 0],
    size: [850, 480],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: true,
    });
  MapTest1 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'MapTest1', units : undefined, 
    image : 'images/MapTest1.jpg', mask : undefined,
    ori : 0, pos : [0.5, 0], size : [0.9, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  KeyboardTest1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AufforderungTest1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AufforderungTest1',
    text: 'Which door did the person choose?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Test1Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Test1Text',
    text: 'trial 1 / 12',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Test2"
  Test2Clock = new util.Clock();
  Test2VideoClock = new util.Clock();
  Test2Video = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Test2Video',
    units: 'pix',
    movie: 'videos/Test_2.mp4',
    pos: [(- 480), 0],
    size: [850, 480],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: true,
    });
  Test2Map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Test2Map', units : undefined, 
    image : 'images/MapTest2.jpg', mask : undefined,
    ori : 0, pos : [0.5, 0], size : [0.9, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  KeyboardTest2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AufforderungTest2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AufforderungTest2',
    text: 'Which door did the person choose?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Test2Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Test2Text',
    text: 'trial 2 / 12',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Test3"
  Test3Clock = new util.Clock();
  Test3VideoClock = new util.Clock();
  Test3Video = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Test3Video',
    units: 'pix',
    movie: 'videos/Test_3.mp4',
    pos: [(- 480), 0],
    size: [850, 480],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: true,
    });
  Test3Map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Test3Map', units : undefined, 
    image : 'images/MapTest3.jpg', mask : undefined,
    ori : 0, pos : [0.5, 0], size : [0.9, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  KeyboardTest3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AufforderungTest3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AufforderungTest3',
    text: 'Which door did the person choose?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Test3Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Test3Text',
    text: 'trial 3 / 12',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Test4"
  Test4Clock = new util.Clock();
  Test4VideoClock = new util.Clock();
  Test4Video = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Test4Video',
    units: 'pix',
    movie: 'videos/Test_4.mp4',
    pos: [(- 480), 0],
    size: [850, 480],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: true,
    });
  Test4Map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Test4Map', units : undefined, 
    image : 'images/MapTest4.jpg', mask : undefined,
    ori : 0, pos : [0.5, 0], size : [0.9, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  KeyboardTest4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AufforderungTest4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AufforderungTest4',
    text: 'Which door did the person choose?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Test4Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Test4Text',
    text: 'trial 4 / 12',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Test5"
  Test5Clock = new util.Clock();
  Test5VideoClock = new util.Clock();
  Test5Video = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Test5Video',
    units: 'pix',
    movie: 'videos/Test_5.mp4',
    pos: [(- 480), 0],
    size: [850, 480],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: true,
    });
  Test5Map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Test5Map', units : undefined, 
    image : 'images/MapTest5.jpg', mask : undefined,
    ori : 0, pos : [0.5, 0], size : [0.9, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  KeyboardTest5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AufforderungTest5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AufforderungTest5',
    text: 'Which door did the person choose?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Test5Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Test5Text',
    text: 'trial 5 / 12',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Test5a"
  Test5aClock = new util.Clock();
  Test1Video_2Clock = new util.Clock();
  Test1Video_2 = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Test1Video_2',
    units: 'pix',
    movie: 'videos/Test_5a.mp4',
    pos: [(- 480), 0],
    size: [850, 480],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: true,
    });
  MapTest1_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'MapTest1_2', units : undefined, 
    image : 'images/MapTest5a.jpg', mask : undefined,
    ori : 0, pos : [0.5, 0], size : [0.9, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  KeyboardTest1_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AufforderungTest1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AufforderungTest1_2',
    text: 'Which door did the person choose?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Test1Text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Test1Text_2',
    text: 'trial 6 / 12',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Test6"
  Test6Clock = new util.Clock();
  Test6VideoClock = new util.Clock();
  Test6Video = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Test6Video',
    units: 'pix',
    movie: 'videos/Test_6.mp4',
    pos: [(- 480), 0],
    size: [850, 480],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: true,
    });
  MapTest6 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'MapTest6', units : undefined, 
    image : 'images/MapTest6.jpg', mask : undefined,
    ori : 0, pos : [0.5, 0], size : [0.9, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  KeyboardTest6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AufforderungTest6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AufforderungTest6',
    text: 'Which door did the person choose?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Test6Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Test6Text',
    text: 'trial 7 / 12',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Test7"
  Test7Clock = new util.Clock();
  Test7VideoClock = new util.Clock();
  Test7Video = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Test7Video',
    units: 'pix',
    movie: 'videos/Test_7.mp4',
    pos: [(- 480), 0],
    size: [850, 480],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: true,
    });
  Test7Map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Test7Map', units : undefined, 
    image : 'images/MapTest7.jpg', mask : undefined,
    ori : 0, pos : [0.5, 0], size : [0.9, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  KeyboardTest7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AufforderungTest7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AufforderungTest7',
    text: 'Which door did the person choose?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Test7Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Test7Text',
    text: 'trial 8 / 12',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Test7a"
  Test7aClock = new util.Clock();
  Test1Video_3Clock = new util.Clock();
  Test1Video_3 = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Test1Video_3',
    units: 'pix',
    movie: 'videos/Test_7a.mp4',
    pos: [(- 480), 0],
    size: [850, 480],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: true,
    });
  MapTest1_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'MapTest1_3', units : undefined, 
    image : 'images/MapTest7a.jpg', mask : undefined,
    ori : 0, pos : [0.5, 0], size : [0.9, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  KeyboardTest1_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AufforderungTest1_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AufforderungTest1_3',
    text: 'Which door did the person choose?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Test1Text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Test1Text_3',
    text: 'trial 9 / 12',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Test8"
  Test8Clock = new util.Clock();
  Test8VideoClock = new util.Clock();
  Test8Video = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Test8Video',
    units: 'pix',
    movie: 'videos/Test_8.mp4',
    pos: [(- 480), 0],
    size: [850, 480],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: true,
    });
  Test8Map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Test8Map', units : undefined, 
    image : 'images/MapTest8.jpg', mask : undefined,
    ori : 0, pos : [0.5, 0], size : [0.9, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  KeyboardTest8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AufforderungTest8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AufforderungTest8',
    text: 'Which door did the person choose?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Test8Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Test8Text',
    text: 'trial 10 / 12',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Test9"
  Test9Clock = new util.Clock();
  Test9VideoClock = new util.Clock();
  Test9Video = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Test9Video',
    units: 'pix',
    movie: 'videos/Test_9.mp4',
    pos: [(- 480), 0],
    size: [850, 480],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: true,
    });
  Test9Map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Test9Map', units : undefined, 
    image : 'images/MapTest9.jpg', mask : undefined,
    ori : 0, pos : [0.5, 0], size : [0.9, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  KeyboardTest9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AufforderungTest8_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AufforderungTest8_2',
    text: 'Which door did the person choose?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Test8Text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Test8Text_2',
    text: 'trial 11 / 12',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "Test10"
  Test10Clock = new util.Clock();
  Test10VideoClock = new util.Clock();
  Test10Video = new visual.MovieStim({
    win: psychoJS.window,
    name: 'Test10Video',
    units: 'pix',
    movie: 'videos/Test_10.mp4',
    pos: [(- 480), 0],
    size: [850, 480],
    ori: 0,
    opacity: 1,
    loop: false,
    noAudio: true,
    });
  Test10Map = new visual.ImageStim({
    win : psychoJS.window,
    name : 'Test10Map', units : undefined, 
    image : 'images/MapTest10.jpg', mask : undefined,
    ori : 0, pos : [0.5, 0], size : [0.9, 0.9],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 128, interpolate : true, depth : -1.0 
  });
  KeyboardTest10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  AufforderungTest10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'AufforderungTest10',
    text: 'Which door did the person choose?',
    font: 'Arial',
    units: undefined, 
    pos: [0, (- 0.75)], height: 0.075,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -3.0 
  });
  
  Test10Text = new visual.TextStim({
    win: psychoJS.window,
    name: 'Test10Text',
    text: 'trial 12 / 12',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.8], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -4.0 
  });
  
  // Initialize components for Routine "thanks"
  thanksClock = new util.Clock();
  DankeText = new visual.TextStim({
    win: psychoJS.window,
    name: 'DankeText',
    text: "That's it.\n\n\nPlease wait for further instructions from the examiner.\n\nThank you for your participation!",
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.1,  wrapWidth: 1.6, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_thanks = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _keyboardWelcome_allKeys;
var welcomeComponents;
function welcomeRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'welcome'-------
    t = 0;
    welcomeClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    keyboardWelcome.keys = undefined;
    keyboardWelcome.rt = undefined;
    _keyboardWelcome_allKeys = [];
    // keep track of which components have finished
    welcomeComponents = [];
    welcomeComponents.push(Titel);
    welcomeComponents.push(keyboardWelcome);
    welcomeComponents.push(SubtextWelcome);
    welcomeComponents.push(SubtextBeta);
    
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function welcomeRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'welcome'-------
    // get current time
    t = welcomeClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Titel* updates
    if (t >= 0.0 && Titel.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Titel.tStart = t;  // (not accounting for frame time here)
      Titel.frameNStart = frameN;  // exact frame index
      
      Titel.setAutoDraw(true);
    }

    
    // *keyboardWelcome* updates
    if (t >= 0.0 && keyboardWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      keyboardWelcome.tStart = t;  // (not accounting for frame time here)
      keyboardWelcome.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { keyboardWelcome.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { keyboardWelcome.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { keyboardWelcome.clearEvents(); });
    }

    if (keyboardWelcome.status === PsychoJS.Status.STARTED) {
      let theseKeys = keyboardWelcome.getKeys({keyList: ['space'], waitRelease: false});
      _keyboardWelcome_allKeys = _keyboardWelcome_allKeys.concat(theseKeys);
      if (_keyboardWelcome_allKeys.length > 0) {
        keyboardWelcome.keys = _keyboardWelcome_allKeys[_keyboardWelcome_allKeys.length - 1].name;  // just the last key pressed
        keyboardWelcome.rt = _keyboardWelcome_allKeys[_keyboardWelcome_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *SubtextWelcome* updates
    if (t >= 0.0 && SubtextWelcome.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SubtextWelcome.tStart = t;  // (not accounting for frame time here)
      SubtextWelcome.frameNStart = frameN;  // exact frame index
      
      SubtextWelcome.setAutoDraw(true);
    }

    
    // *SubtextBeta* updates
    if (t >= 0.0 && SubtextBeta.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SubtextBeta.tStart = t;  // (not accounting for frame time here)
      SubtextBeta.frameNStart = frameN;  // exact frame index
      
      SubtextBeta.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of welcomeComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function welcomeRoutineEnd() {
  return async function () {
    //------Ending Routine 'welcome'-------
    for (const thisComponent of welcomeComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    keyboardWelcome.stop();
    // the Routine "welcome" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _feedbackKey_allKeys;
var Instructions_test0Components;
function Instructions_test0RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instructions_test0'-------
    t = 0;
    Instructions_test0Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    feedbackKey.keys = undefined;
    feedbackKey.rt = undefined;
    _feedbackKey_allKeys = [];
    // keep track of which components have finished
    Instructions_test0Components = [];
    Instructions_test0Components.push(SFeedbackInstructionsTest);
    Instructions_test0Components.push(feedbackKey);
    Instructions_test0Components.push(weiter_text);
    
    for (const thisComponent of Instructions_test0Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions_test0RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions_test0'-------
    // get current time
    t = Instructions_test0Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *SFeedbackInstructionsTest* updates
    if (t >= 0.0 && SFeedbackInstructionsTest.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      SFeedbackInstructionsTest.tStart = t;  // (not accounting for frame time here)
      SFeedbackInstructionsTest.frameNStart = frameN;  // exact frame index
      
      SFeedbackInstructionsTest.setAutoDraw(true);
    }

    
    // *feedbackKey* updates
    if (t >= 0.0 && feedbackKey.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedbackKey.tStart = t;  // (not accounting for frame time here)
      feedbackKey.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { feedbackKey.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { feedbackKey.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { feedbackKey.clearEvents(); });
    }

    if (feedbackKey.status === PsychoJS.Status.STARTED) {
      let theseKeys = feedbackKey.getKeys({keyList: ['space'], waitRelease: false});
      _feedbackKey_allKeys = _feedbackKey_allKeys.concat(theseKeys);
      if (_feedbackKey_allKeys.length > 0) {
        feedbackKey.keys = _feedbackKey_allKeys[_feedbackKey_allKeys.length - 1].name;  // just the last key pressed
        feedbackKey.rt = _feedbackKey_allKeys[_feedbackKey_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *weiter_text* updates
    if (t >= 0.0 && weiter_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      weiter_text.tStart = t;  // (not accounting for frame time here)
      weiter_text.frameNStart = frameN;  // exact frame index
      
      weiter_text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions_test0Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_test0RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions_test0'-------
    for (const thisComponent of Instructions_test0Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    feedbackKey.stop();
    // the Routine "Instructions_test0" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _feedback2_key_allKeys;
var Instructions_test1Components;
function Instructions_test1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instructions_test1'-------
    t = 0;
    Instructions_test1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    feedback2_key.keys = undefined;
    feedback2_key.rt = undefined;
    _feedback2_key_allKeys = [];
    // keep track of which components have finished
    Instructions_test1Components = [];
    Instructions_test1Components.push(text_3);
    Instructions_test1Components.push(feedback2_key);
    Instructions_test1Components.push(weiter_text_2);
    
    for (const thisComponent of Instructions_test1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions_test1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions_test1'-------
    // get current time
    t = Instructions_test1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *feedback2_key* updates
    if (t >= 0.0 && feedback2_key.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      feedback2_key.tStart = t;  // (not accounting for frame time here)
      feedback2_key.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { feedback2_key.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { feedback2_key.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { feedback2_key.clearEvents(); });
    }

    if (feedback2_key.status === PsychoJS.Status.STARTED) {
      let theseKeys = feedback2_key.getKeys({keyList: ['space'], waitRelease: false});
      _feedback2_key_allKeys = _feedback2_key_allKeys.concat(theseKeys);
      if (_feedback2_key_allKeys.length > 0) {
        feedback2_key.keys = _feedback2_key_allKeys[_feedback2_key_allKeys.length - 1].name;  // just the last key pressed
        feedback2_key.rt = _feedback2_key_allKeys[_feedback2_key_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *weiter_text_2* updates
    if (t >= 0.0 && weiter_text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      weiter_text_2.tStart = t;  // (not accounting for frame time here)
      weiter_text_2.frameNStart = frameN;  // exact frame index
      
      weiter_text_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions_test1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_test1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions_test1'-------
    for (const thisComponent of Instructions_test1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('feedback2_key.keys', feedback2_key.keys);
    if (typeof feedback2_key.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('feedback2_key.rt', feedback2_key.rt);
        routineTimer.reset();
        }
    
    feedback2_key.stop();
    // the Routine "Instructions_test1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _InstructionKey1_allKeys;
var Instructions_test2Components;
function Instructions_test2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instructions_test2'-------
    t = 0;
    Instructions_test2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    InstructionKey1.keys = undefined;
    InstructionKey1.rt = undefined;
    _InstructionKey1_allKeys = [];
    // keep track of which components have finished
    Instructions_test2Components = [];
    Instructions_test2Components.push(ExampleMap);
    Instructions_test2Components.push(TextSymbols);
    Instructions_test2Components.push(InstructionKey1);
    Instructions_test2Components.push(weitertext);
    
    for (const thisComponent of Instructions_test2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions_test2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions_test2'-------
    // get current time
    t = Instructions_test2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *ExampleMap* updates
    if (t >= 0.0 && ExampleMap.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      ExampleMap.tStart = t;  // (not accounting for frame time here)
      ExampleMap.frameNStart = frameN;  // exact frame index
      
      ExampleMap.setAutoDraw(true);
    }

    
    // *TextSymbols* updates
    if (t >= 0.0 && TextSymbols.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TextSymbols.tStart = t;  // (not accounting for frame time here)
      TextSymbols.frameNStart = frameN;  // exact frame index
      
      TextSymbols.setAutoDraw(true);
    }

    
    // *InstructionKey1* updates
    if (t >= 0 && InstructionKey1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionKey1.tStart = t;  // (not accounting for frame time here)
      InstructionKey1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { InstructionKey1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { InstructionKey1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { InstructionKey1.clearEvents(); });
    }

    if (InstructionKey1.status === PsychoJS.Status.STARTED) {
      let theseKeys = InstructionKey1.getKeys({keyList: ['space'], waitRelease: false});
      _InstructionKey1_allKeys = _InstructionKey1_allKeys.concat(theseKeys);
      if (_InstructionKey1_allKeys.length > 0) {
        InstructionKey1.keys = _InstructionKey1_allKeys[_InstructionKey1_allKeys.length - 1].name;  // just the last key pressed
        InstructionKey1.rt = _InstructionKey1_allKeys[_InstructionKey1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *weitertext* updates
    if (t >= 0.0 && weitertext.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      weitertext.tStart = t;  // (not accounting for frame time here)
      weitertext.frameNStart = frameN;  // exact frame index
      
      weitertext.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions_test2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_test2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions_test2'-------
    for (const thisComponent of Instructions_test2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    InstructionKey1.stop();
    // the Routine "Instructions_test2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _startInstructionVideo_allKeys;
var Instructions_test3Components;
function Instructions_test3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Instructions_test3'-------
    t = 0;
    Instructions_test3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    startInstructionVideo.keys = undefined;
    startInstructionVideo.rt = undefined;
    _startInstructionVideo_allKeys = [];
    // keep track of which components have finished
    Instructions_test3Components = [];
    Instructions_test3Components.push(TextInstruktionsvideo);
    Instructions_test3Components.push(startInstructionVideo);
    
    for (const thisComponent of Instructions_test3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Instructions_test3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Instructions_test3'-------
    // get current time
    t = Instructions_test3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *TextInstruktionsvideo* updates
    if (t >= 0.0 && TextInstruktionsvideo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TextInstruktionsvideo.tStart = t;  // (not accounting for frame time here)
      TextInstruktionsvideo.frameNStart = frameN;  // exact frame index
      
      TextInstruktionsvideo.setAutoDraw(true);
    }

    
    // *startInstructionVideo* updates
    if (t >= 0.0 && startInstructionVideo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      startInstructionVideo.tStart = t;  // (not accounting for frame time here)
      startInstructionVideo.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { startInstructionVideo.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { startInstructionVideo.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { startInstructionVideo.clearEvents(); });
    }

    if (startInstructionVideo.status === PsychoJS.Status.STARTED) {
      let theseKeys = startInstructionVideo.getKeys({keyList: ['space'], waitRelease: false});
      _startInstructionVideo_allKeys = _startInstructionVideo_allKeys.concat(theseKeys);
      if (_startInstructionVideo_allKeys.length > 0) {
        startInstructionVideo.keys = _startInstructionVideo_allKeys[_startInstructionVideo_allKeys.length - 1].name;  // just the last key pressed
        startInstructionVideo.rt = _startInstructionVideo_allKeys[_startInstructionVideo_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Instructions_test3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Instructions_test3RoutineEnd() {
  return async function () {
    //------Ending Routine 'Instructions_test3'-------
    for (const thisComponent of Instructions_test3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('startInstructionVideo.keys', startInstructionVideo.keys);
    if (typeof startInstructionVideo.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('startInstructionVideo.rt', startInstructionVideo.rt);
        routineTimer.reset();
        }
    
    startInstructionVideo.stop();
    // the Routine "Instructions_test3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_Instructions_allKeys;
var InstructionVideoComponents;
function InstructionVideoRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'InstructionVideo'-------
    t = 0;
    InstructionVideoClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_Instructions.keys = undefined;
    key_resp_Instructions.rt = undefined;
    _key_resp_Instructions_allKeys = [];
    // keep track of which components have finished
    InstructionVideoComponents = [];
    InstructionVideoComponents.push(InstructionsVideo);
    InstructionVideoComponents.push(InstructionMap);
    InstructionVideoComponents.push(key_resp_Instructions);
    InstructionVideoComponents.push(AufforderungInstruktion);
    InstructionVideoComponents.push(Instruktion);
    
    for (const thisComponent of InstructionVideoComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function InstructionVideoRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'InstructionVideo'-------
    // get current time
    t = InstructionVideoClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *InstructionsVideo* updates
    if (t >= 2 && InstructionsVideo.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionsVideo.tStart = t;  // (not accounting for frame time here)
      InstructionsVideo.frameNStart = frameN;  // exact frame index
      
      InstructionsVideo.setAutoDraw(true);
      InstructionsVideo.play();
    }

    
    // *InstructionMap* updates
    if (t >= 0.0 && InstructionMap.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      InstructionMap.tStart = t;  // (not accounting for frame time here)
      InstructionMap.frameNStart = frameN;  // exact frame index
      
      InstructionMap.setAutoDraw(true);
    }

    
    // *key_resp_Instructions* updates
    if (t >= 2 && key_resp_Instructions.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_Instructions.tStart = t;  // (not accounting for frame time here)
      key_resp_Instructions.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_Instructions.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Instructions.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Instructions.clearEvents(); });
    }

    if (key_resp_Instructions.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_Instructions.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_Instructions_allKeys = _key_resp_Instructions_allKeys.concat(theseKeys);
      if (_key_resp_Instructions_allKeys.length > 0) {
        key_resp_Instructions.keys = _key_resp_Instructions_allKeys[_key_resp_Instructions_allKeys.length - 1].name;  // just the last key pressed
        key_resp_Instructions.rt = _key_resp_Instructions_allKeys[_key_resp_Instructions_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AufforderungInstruktion* updates
    if (((InstructionsVideo.status == FINISHED)) && AufforderungInstruktion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AufforderungInstruktion.tStart = t;  // (not accounting for frame time here)
      AufforderungInstruktion.frameNStart = frameN;  // exact frame index
      
      AufforderungInstruktion.setAutoDraw(true);
    }

    
    // *Instruktion* updates
    if (t >= 0.0 && Instruktion.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Instruktion.tStart = t;  // (not accounting for frame time here)
      Instruktion.frameNStart = frameN;  // exact frame index
      
      Instruktion.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of InstructionVideoComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function InstructionVideoRoutineEnd() {
  return async function () {
    //------Ending Routine 'InstructionVideo'-------
    for (const thisComponent of InstructionVideoComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    InstructionsVideo.stop();
    key_resp_Instructions.stop();
    // the Routine "InstructionVideo" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_Uebung1_allKeys;
var Uebung1Components;
function Uebung1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Uebung1'-------
    t = 0;
    Uebung1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_Uebung1.keys = undefined;
    key_resp_Uebung1.rt = undefined;
    _key_resp_Uebung1_allKeys = [];
    // keep track of which components have finished
    Uebung1Components = [];
    Uebung1Components.push(Uebungsdurchgang1Video);
    Uebung1Components.push(Uebungsdurchgang1Map);
    Uebung1Components.push(key_resp_Uebung1);
    Uebung1Components.push(AufforderungUebung1);
    Uebung1Components.push(Uebung1Text);
    
    for (const thisComponent of Uebung1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Uebung1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Uebung1'-------
    // get current time
    t = Uebung1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Uebungsdurchgang1Video* updates
    if (t >= 2 && Uebungsdurchgang1Video.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Uebungsdurchgang1Video.tStart = t;  // (not accounting for frame time here)
      Uebungsdurchgang1Video.frameNStart = frameN;  // exact frame index
      
      Uebungsdurchgang1Video.setAutoDraw(true);
      Uebungsdurchgang1Video.play();
    }

    
    // *Uebungsdurchgang1Map* updates
    if (t >= 0.0 && Uebungsdurchgang1Map.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Uebungsdurchgang1Map.tStart = t;  // (not accounting for frame time here)
      Uebungsdurchgang1Map.frameNStart = frameN;  // exact frame index
      
      Uebungsdurchgang1Map.setAutoDraw(true);
    }

    
    // *key_resp_Uebung1* updates
    if (t >= 2 && key_resp_Uebung1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_Uebung1.tStart = t;  // (not accounting for frame time here)
      key_resp_Uebung1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_Uebung1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Uebung1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Uebung1.clearEvents(); });
    }

    if (key_resp_Uebung1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_Uebung1.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_Uebung1_allKeys = _key_resp_Uebung1_allKeys.concat(theseKeys);
      if (_key_resp_Uebung1_allKeys.length > 0) {
        key_resp_Uebung1.keys = _key_resp_Uebung1_allKeys[_key_resp_Uebung1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_Uebung1.rt = _key_resp_Uebung1_allKeys[_key_resp_Uebung1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AufforderungUebung1* updates
    if (((Uebungsdurchgang1Video.status == FINISHED)) && AufforderungUebung1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AufforderungUebung1.tStart = t;  // (not accounting for frame time here)
      AufforderungUebung1.frameNStart = frameN;  // exact frame index
      
      AufforderungUebung1.setAutoDraw(true);
    }

    
    // *Uebung1Text* updates
    if (t >= 0.0 && Uebung1Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Uebung1Text.tStart = t;  // (not accounting for frame time here)
      Uebung1Text.frameNStart = frameN;  // exact frame index
      
      Uebung1Text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Uebung1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Uebung1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Uebung1'-------
    for (const thisComponent of Uebung1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Uebungsdurchgang1Video.stop();
    key_resp_Uebung1.stop();
    // the Routine "Uebung1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_Uebung2_allKeys;
var Uebung2Components;
function Uebung2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Uebung2'-------
    t = 0;
    Uebung2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_Uebung2.keys = undefined;
    key_resp_Uebung2.rt = undefined;
    _key_resp_Uebung2_allKeys = [];
    // keep track of which components have finished
    Uebung2Components = [];
    Uebung2Components.push(Uebungsdurchgang2Video);
    Uebung2Components.push(Uebungsdurchgang2Map);
    Uebung2Components.push(key_resp_Uebung2);
    Uebung2Components.push(AufforderungUebung2);
    Uebung2Components.push(Uebung2Text);
    
    for (const thisComponent of Uebung2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Uebung2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Uebung2'-------
    // get current time
    t = Uebung2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Uebungsdurchgang2Video* updates
    if (t >= 2 && Uebungsdurchgang2Video.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Uebungsdurchgang2Video.tStart = t;  // (not accounting for frame time here)
      Uebungsdurchgang2Video.frameNStart = frameN;  // exact frame index
      
      Uebungsdurchgang2Video.setAutoDraw(true);
      Uebungsdurchgang2Video.play();
    }

    
    // *Uebungsdurchgang2Map* updates
    if (t >= 0.0 && Uebungsdurchgang2Map.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Uebungsdurchgang2Map.tStart = t;  // (not accounting for frame time here)
      Uebungsdurchgang2Map.frameNStart = frameN;  // exact frame index
      
      Uebungsdurchgang2Map.setAutoDraw(true);
    }

    
    // *key_resp_Uebung2* updates
    if (t >= 2 && key_resp_Uebung2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_Uebung2.tStart = t;  // (not accounting for frame time here)
      key_resp_Uebung2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_Uebung2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Uebung2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_Uebung2.clearEvents(); });
    }

    if (key_resp_Uebung2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_Uebung2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_Uebung2_allKeys = _key_resp_Uebung2_allKeys.concat(theseKeys);
      if (_key_resp_Uebung2_allKeys.length > 0) {
        key_resp_Uebung2.keys = _key_resp_Uebung2_allKeys[_key_resp_Uebung2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_Uebung2.rt = _key_resp_Uebung2_allKeys[_key_resp_Uebung2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AufforderungUebung2* updates
    if (((Uebungsdurchgang2Video.status == FINISHED)) && AufforderungUebung2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AufforderungUebung2.tStart = t;  // (not accounting for frame time here)
      AufforderungUebung2.frameNStart = frameN;  // exact frame index
      
      AufforderungUebung2.setAutoDraw(true);
    }

    
    // *Uebung2Text* updates
    if (t >= 0.0 && Uebung2Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Uebung2Text.tStart = t;  // (not accounting for frame time here)
      Uebung2Text.frameNStart = frameN;  // exact frame index
      
      Uebung2Text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Uebung2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Uebung2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Uebung2'-------
    for (const thisComponent of Uebung2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Uebungsdurchgang2Video.stop();
    key_resp_Uebung2.stop();
    // the Routine "Uebung2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_Text_startet_allKeys;
var Text_startetComponents;
function Text_startetRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Text_startet'-------
    t = 0;
    Text_startetClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_Text_startet.keys = undefined;
    key_Text_startet.rt = undefined;
    _key_Text_startet_allKeys = [];
    // keep track of which components have finished
    Text_startetComponents = [];
    Text_startetComponents.push(key_Text_startet);
    Text_startetComponents.push(text_4);
    
    for (const thisComponent of Text_startetComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Text_startetRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Text_startet'-------
    // get current time
    t = Text_startetClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *key_Text_startet* updates
    if (t >= 0.0 && key_Text_startet.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_Text_startet.tStart = t;  // (not accounting for frame time here)
      key_Text_startet.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_Text_startet.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_Text_startet.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_Text_startet.clearEvents(); });
    }

    if (key_Text_startet.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_Text_startet.getKeys({keyList: ['enter', 'space'], waitRelease: false});
      _key_Text_startet_allKeys = _key_Text_startet_allKeys.concat(theseKeys);
      if (_key_Text_startet_allKeys.length > 0) {
        key_Text_startet.keys = _key_Text_startet_allKeys[_key_Text_startet_allKeys.length - 1].name;  // just the last key pressed
        key_Text_startet.rt = _key_Text_startet_allKeys[_key_Text_startet_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Text_startetComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Text_startetRoutineEnd() {
  return async function () {
    //------Ending Routine 'Text_startet'-------
    for (const thisComponent of Text_startetComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_Text_startet.stop();
    // the Routine "Text_startet" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _KeyboardTest1_allKeys;
var Test1Components;
function Test1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test1'-------
    t = 0;
    Test1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    KeyboardTest1.keys = undefined;
    KeyboardTest1.rt = undefined;
    _KeyboardTest1_allKeys = [];
    // keep track of which components have finished
    Test1Components = [];
    Test1Components.push(Test1Video);
    Test1Components.push(MapTest1);
    Test1Components.push(KeyboardTest1);
    Test1Components.push(AufforderungTest1);
    Test1Components.push(Test1Text);
    
    for (const thisComponent of Test1Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Test1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test1'-------
    // get current time
    t = Test1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Test1Video* updates
    if (t >= 2 && Test1Video.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test1Video.tStart = t;  // (not accounting for frame time here)
      Test1Video.frameNStart = frameN;  // exact frame index
      
      Test1Video.setAutoDraw(true);
      Test1Video.play();
    }

    
    // *MapTest1* updates
    if (t >= 0.0 && MapTest1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MapTest1.tStart = t;  // (not accounting for frame time here)
      MapTest1.frameNStart = frameN;  // exact frame index
      
      MapTest1.setAutoDraw(true);
    }

    
    // *KeyboardTest1* updates
    if (t >= 2 && KeyboardTest1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      KeyboardTest1.tStart = t;  // (not accounting for frame time here)
      KeyboardTest1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { KeyboardTest1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest1.clearEvents(); });
    }

    if (KeyboardTest1.status === PsychoJS.Status.STARTED) {
      let theseKeys = KeyboardTest1.getKeys({keyList: ['space'], waitRelease: false});
      _KeyboardTest1_allKeys = _KeyboardTest1_allKeys.concat(theseKeys);
      if (_KeyboardTest1_allKeys.length > 0) {
        KeyboardTest1.keys = _KeyboardTest1_allKeys[_KeyboardTest1_allKeys.length - 1].name;  // just the last key pressed
        KeyboardTest1.rt = _KeyboardTest1_allKeys[_KeyboardTest1_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AufforderungTest1* updates
    if (((Test1Video.status == FINISHED)) && AufforderungTest1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AufforderungTest1.tStart = t;  // (not accounting for frame time here)
      AufforderungTest1.frameNStart = frameN;  // exact frame index
      
      AufforderungTest1.setAutoDraw(true);
    }

    
    // *Test1Text* updates
    if (t >= 0.0 && Test1Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test1Text.tStart = t;  // (not accounting for frame time here)
      Test1Text.frameNStart = frameN;  // exact frame index
      
      Test1Text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Test1Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Test1'-------
    for (const thisComponent of Test1Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Test1Video.stop();
    KeyboardTest1.stop();
    // the Routine "Test1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _KeyboardTest2_allKeys;
var Test2Components;
function Test2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test2'-------
    t = 0;
    Test2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    KeyboardTest2.keys = undefined;
    KeyboardTest2.rt = undefined;
    _KeyboardTest2_allKeys = [];
    // keep track of which components have finished
    Test2Components = [];
    Test2Components.push(Test2Video);
    Test2Components.push(Test2Map);
    Test2Components.push(KeyboardTest2);
    Test2Components.push(AufforderungTest2);
    Test2Components.push(Test2Text);
    
    for (const thisComponent of Test2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Test2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test2'-------
    // get current time
    t = Test2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Test2Video* updates
    if (t >= 2 && Test2Video.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test2Video.tStart = t;  // (not accounting for frame time here)
      Test2Video.frameNStart = frameN;  // exact frame index
      
      Test2Video.setAutoDraw(true);
      Test2Video.play();
    }

    
    // *Test2Map* updates
    if (t >= 0.0 && Test2Map.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test2Map.tStart = t;  // (not accounting for frame time here)
      Test2Map.frameNStart = frameN;  // exact frame index
      
      Test2Map.setAutoDraw(true);
    }

    
    // *KeyboardTest2* updates
    if (t >= 2 && KeyboardTest2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      KeyboardTest2.tStart = t;  // (not accounting for frame time here)
      KeyboardTest2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { KeyboardTest2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest2.clearEvents(); });
    }

    if (KeyboardTest2.status === PsychoJS.Status.STARTED) {
      let theseKeys = KeyboardTest2.getKeys({keyList: ['space'], waitRelease: false});
      _KeyboardTest2_allKeys = _KeyboardTest2_allKeys.concat(theseKeys);
      if (_KeyboardTest2_allKeys.length > 0) {
        KeyboardTest2.keys = _KeyboardTest2_allKeys[_KeyboardTest2_allKeys.length - 1].name;  // just the last key pressed
        KeyboardTest2.rt = _KeyboardTest2_allKeys[_KeyboardTest2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AufforderungTest2* updates
    if (t >= (Test2Video.status == FINISHED) && AufforderungTest2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AufforderungTest2.tStart = t;  // (not accounting for frame time here)
      AufforderungTest2.frameNStart = frameN;  // exact frame index
      
      AufforderungTest2.setAutoDraw(true);
    }

    
    // *Test2Text* updates
    if (t >= 0.0 && Test2Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test2Text.tStart = t;  // (not accounting for frame time here)
      Test2Text.frameNStart = frameN;  // exact frame index
      
      Test2Text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Test2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Test2'-------
    for (const thisComponent of Test2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Test2Video.stop();
    KeyboardTest2.stop();
    // the Routine "Test2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _KeyboardTest3_allKeys;
var Test3Components;
function Test3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test3'-------
    t = 0;
    Test3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    KeyboardTest3.keys = undefined;
    KeyboardTest3.rt = undefined;
    _KeyboardTest3_allKeys = [];
    // keep track of which components have finished
    Test3Components = [];
    Test3Components.push(Test3Video);
    Test3Components.push(Test3Map);
    Test3Components.push(KeyboardTest3);
    Test3Components.push(AufforderungTest3);
    Test3Components.push(Test3Text);
    
    for (const thisComponent of Test3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Test3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test3'-------
    // get current time
    t = Test3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Test3Video* updates
    if (t >= 2 && Test3Video.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test3Video.tStart = t;  // (not accounting for frame time here)
      Test3Video.frameNStart = frameN;  // exact frame index
      
      Test3Video.setAutoDraw(true);
      Test3Video.play();
    }

    
    // *Test3Map* updates
    if (t >= 0.0 && Test3Map.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test3Map.tStart = t;  // (not accounting for frame time here)
      Test3Map.frameNStart = frameN;  // exact frame index
      
      Test3Map.setAutoDraw(true);
    }

    
    // *KeyboardTest3* updates
    if (t >= 2 && KeyboardTest3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      KeyboardTest3.tStart = t;  // (not accounting for frame time here)
      KeyboardTest3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { KeyboardTest3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest3.clearEvents(); });
    }

    if (KeyboardTest3.status === PsychoJS.Status.STARTED) {
      let theseKeys = KeyboardTest3.getKeys({keyList: ['space'], waitRelease: false});
      _KeyboardTest3_allKeys = _KeyboardTest3_allKeys.concat(theseKeys);
      if (_KeyboardTest3_allKeys.length > 0) {
        KeyboardTest3.keys = _KeyboardTest3_allKeys[_KeyboardTest3_allKeys.length - 1].name;  // just the last key pressed
        KeyboardTest3.rt = _KeyboardTest3_allKeys[_KeyboardTest3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AufforderungTest3* updates
    if (((Test3Video.status == FINISHED)) && AufforderungTest3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AufforderungTest3.tStart = t;  // (not accounting for frame time here)
      AufforderungTest3.frameNStart = frameN;  // exact frame index
      
      AufforderungTest3.setAutoDraw(true);
    }

    
    // *Test3Text* updates
    if (t >= 0.0 && Test3Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test3Text.tStart = t;  // (not accounting for frame time here)
      Test3Text.frameNStart = frameN;  // exact frame index
      
      Test3Text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Test3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test3RoutineEnd() {
  return async function () {
    //------Ending Routine 'Test3'-------
    for (const thisComponent of Test3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Test3Video.stop();
    KeyboardTest3.stop();
    // the Routine "Test3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _KeyboardTest4_allKeys;
var Test4Components;
function Test4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test4'-------
    t = 0;
    Test4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    KeyboardTest4.keys = undefined;
    KeyboardTest4.rt = undefined;
    _KeyboardTest4_allKeys = [];
    // keep track of which components have finished
    Test4Components = [];
    Test4Components.push(Test4Video);
    Test4Components.push(Test4Map);
    Test4Components.push(KeyboardTest4);
    Test4Components.push(AufforderungTest4);
    Test4Components.push(Test4Text);
    
    for (const thisComponent of Test4Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Test4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test4'-------
    // get current time
    t = Test4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Test4Video* updates
    if (t >= 2 && Test4Video.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test4Video.tStart = t;  // (not accounting for frame time here)
      Test4Video.frameNStart = frameN;  // exact frame index
      
      Test4Video.setAutoDraw(true);
      Test4Video.play();
    }

    
    // *Test4Map* updates
    if (t >= 0.0 && Test4Map.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test4Map.tStart = t;  // (not accounting for frame time here)
      Test4Map.frameNStart = frameN;  // exact frame index
      
      Test4Map.setAutoDraw(true);
    }

    
    // *KeyboardTest4* updates
    if (t >= 2 && KeyboardTest4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      KeyboardTest4.tStart = t;  // (not accounting for frame time here)
      KeyboardTest4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { KeyboardTest4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest4.clearEvents(); });
    }

    if (KeyboardTest4.status === PsychoJS.Status.STARTED) {
      let theseKeys = KeyboardTest4.getKeys({keyList: ['space'], waitRelease: false});
      _KeyboardTest4_allKeys = _KeyboardTest4_allKeys.concat(theseKeys);
      if (_KeyboardTest4_allKeys.length > 0) {
        KeyboardTest4.keys = _KeyboardTest4_allKeys[_KeyboardTest4_allKeys.length - 1].name;  // just the last key pressed
        KeyboardTest4.rt = _KeyboardTest4_allKeys[_KeyboardTest4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AufforderungTest4* updates
    if (frameN >= (Test4Video.status == FINISHED) && AufforderungTest4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AufforderungTest4.tStart = t;  // (not accounting for frame time here)
      AufforderungTest4.frameNStart = frameN;  // exact frame index
      
      AufforderungTest4.setAutoDraw(true);
    }

    
    // *Test4Text* updates
    if (t >= 0.0 && Test4Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test4Text.tStart = t;  // (not accounting for frame time here)
      Test4Text.frameNStart = frameN;  // exact frame index
      
      Test4Text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Test4Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test4RoutineEnd() {
  return async function () {
    //------Ending Routine 'Test4'-------
    for (const thisComponent of Test4Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Test4Video.stop();
    KeyboardTest4.stop();
    // the Routine "Test4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _KeyboardTest5_allKeys;
var Test5Components;
function Test5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test5'-------
    t = 0;
    Test5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    KeyboardTest5.keys = undefined;
    KeyboardTest5.rt = undefined;
    _KeyboardTest5_allKeys = [];
    // keep track of which components have finished
    Test5Components = [];
    Test5Components.push(Test5Video);
    Test5Components.push(Test5Map);
    Test5Components.push(KeyboardTest5);
    Test5Components.push(AufforderungTest5);
    Test5Components.push(Test5Text);
    
    for (const thisComponent of Test5Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Test5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test5'-------
    // get current time
    t = Test5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Test5Video* updates
    if (t >= 2 && Test5Video.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test5Video.tStart = t;  // (not accounting for frame time here)
      Test5Video.frameNStart = frameN;  // exact frame index
      
      Test5Video.setAutoDraw(true);
      Test5Video.play();
    }

    
    // *Test5Map* updates
    if (t >= 0.0 && Test5Map.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test5Map.tStart = t;  // (not accounting for frame time here)
      Test5Map.frameNStart = frameN;  // exact frame index
      
      Test5Map.setAutoDraw(true);
    }

    
    // *KeyboardTest5* updates
    if (t >= 2 && KeyboardTest5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      KeyboardTest5.tStart = t;  // (not accounting for frame time here)
      KeyboardTest5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { KeyboardTest5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest5.clearEvents(); });
    }

    if (KeyboardTest5.status === PsychoJS.Status.STARTED) {
      let theseKeys = KeyboardTest5.getKeys({keyList: ['space'], waitRelease: false});
      _KeyboardTest5_allKeys = _KeyboardTest5_allKeys.concat(theseKeys);
      if (_KeyboardTest5_allKeys.length > 0) {
        KeyboardTest5.keys = _KeyboardTest5_allKeys[_KeyboardTest5_allKeys.length - 1].name;  // just the last key pressed
        KeyboardTest5.rt = _KeyboardTest5_allKeys[_KeyboardTest5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AufforderungTest5* updates
    if (((Test5Video.status == FINISHED)) && AufforderungTest5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AufforderungTest5.tStart = t;  // (not accounting for frame time here)
      AufforderungTest5.frameNStart = frameN;  // exact frame index
      
      AufforderungTest5.setAutoDraw(true);
    }

    
    // *Test5Text* updates
    if (t >= 0.0 && Test5Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test5Text.tStart = t;  // (not accounting for frame time here)
      Test5Text.frameNStart = frameN;  // exact frame index
      
      Test5Text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Test5Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test5RoutineEnd() {
  return async function () {
    //------Ending Routine 'Test5'-------
    for (const thisComponent of Test5Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Test5Video.stop();
    KeyboardTest5.stop();
    // the Routine "Test5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _KeyboardTest1_2_allKeys;
var Test5aComponents;
function Test5aRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test5a'-------
    t = 0;
    Test5aClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    KeyboardTest1_2.keys = undefined;
    KeyboardTest1_2.rt = undefined;
    _KeyboardTest1_2_allKeys = [];
    // keep track of which components have finished
    Test5aComponents = [];
    Test5aComponents.push(Test1Video_2);
    Test5aComponents.push(MapTest1_2);
    Test5aComponents.push(KeyboardTest1_2);
    Test5aComponents.push(AufforderungTest1_2);
    Test5aComponents.push(Test1Text_2);
    
    for (const thisComponent of Test5aComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Test5aRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test5a'-------
    // get current time
    t = Test5aClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Test1Video_2* updates
    if (t >= 2 && Test1Video_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test1Video_2.tStart = t;  // (not accounting for frame time here)
      Test1Video_2.frameNStart = frameN;  // exact frame index
      
      Test1Video_2.setAutoDraw(true);
      Test1Video_2.play();
    }

    
    // *MapTest1_2* updates
    if (t >= 0.0 && MapTest1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MapTest1_2.tStart = t;  // (not accounting for frame time here)
      MapTest1_2.frameNStart = frameN;  // exact frame index
      
      MapTest1_2.setAutoDraw(true);
    }

    
    // *KeyboardTest1_2* updates
    if (t >= 2 && KeyboardTest1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      KeyboardTest1_2.tStart = t;  // (not accounting for frame time here)
      KeyboardTest1_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { KeyboardTest1_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest1_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest1_2.clearEvents(); });
    }

    if (KeyboardTest1_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = KeyboardTest1_2.getKeys({keyList: ['space'], waitRelease: false});
      _KeyboardTest1_2_allKeys = _KeyboardTest1_2_allKeys.concat(theseKeys);
      if (_KeyboardTest1_2_allKeys.length > 0) {
        KeyboardTest1_2.keys = _KeyboardTest1_2_allKeys[_KeyboardTest1_2_allKeys.length - 1].name;  // just the last key pressed
        KeyboardTest1_2.rt = _KeyboardTest1_2_allKeys[_KeyboardTest1_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AufforderungTest1_2* updates
    if (((Test1Video_2.status == FINISHED)) && AufforderungTest1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AufforderungTest1_2.tStart = t;  // (not accounting for frame time here)
      AufforderungTest1_2.frameNStart = frameN;  // exact frame index
      
      AufforderungTest1_2.setAutoDraw(true);
    }

    
    // *Test1Text_2* updates
    if (t >= 0.0 && Test1Text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test1Text_2.tStart = t;  // (not accounting for frame time here)
      Test1Text_2.frameNStart = frameN;  // exact frame index
      
      Test1Text_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Test5aComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test5aRoutineEnd() {
  return async function () {
    //------Ending Routine 'Test5a'-------
    for (const thisComponent of Test5aComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Test1Video_2.stop();
    KeyboardTest1_2.stop();
    // the Routine "Test5a" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _KeyboardTest6_allKeys;
var Test6Components;
function Test6RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test6'-------
    t = 0;
    Test6Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    KeyboardTest6.keys = undefined;
    KeyboardTest6.rt = undefined;
    _KeyboardTest6_allKeys = [];
    // keep track of which components have finished
    Test6Components = [];
    Test6Components.push(Test6Video);
    Test6Components.push(MapTest6);
    Test6Components.push(KeyboardTest6);
    Test6Components.push(AufforderungTest6);
    Test6Components.push(Test6Text);
    
    for (const thisComponent of Test6Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Test6RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test6'-------
    // get current time
    t = Test6Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Test6Video* updates
    if (t >= 2 && Test6Video.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test6Video.tStart = t;  // (not accounting for frame time here)
      Test6Video.frameNStart = frameN;  // exact frame index
      
      Test6Video.setAutoDraw(true);
      Test6Video.play();
    }

    
    // *MapTest6* updates
    if (t >= 0.0 && MapTest6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MapTest6.tStart = t;  // (not accounting for frame time here)
      MapTest6.frameNStart = frameN;  // exact frame index
      
      MapTest6.setAutoDraw(true);
    }

    
    // *KeyboardTest6* updates
    if (t >= 2 && KeyboardTest6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      KeyboardTest6.tStart = t;  // (not accounting for frame time here)
      KeyboardTest6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { KeyboardTest6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest6.clearEvents(); });
    }

    if (KeyboardTest6.status === PsychoJS.Status.STARTED) {
      let theseKeys = KeyboardTest6.getKeys({keyList: ['space'], waitRelease: false});
      _KeyboardTest6_allKeys = _KeyboardTest6_allKeys.concat(theseKeys);
      if (_KeyboardTest6_allKeys.length > 0) {
        KeyboardTest6.keys = _KeyboardTest6_allKeys[_KeyboardTest6_allKeys.length - 1].name;  // just the last key pressed
        KeyboardTest6.rt = _KeyboardTest6_allKeys[_KeyboardTest6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AufforderungTest6* updates
    if (((Test6Video.status == FINISHED)) && AufforderungTest6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AufforderungTest6.tStart = t;  // (not accounting for frame time here)
      AufforderungTest6.frameNStart = frameN;  // exact frame index
      
      AufforderungTest6.setAutoDraw(true);
    }

    
    // *Test6Text* updates
    if (t >= 0.0 && Test6Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test6Text.tStart = t;  // (not accounting for frame time here)
      Test6Text.frameNStart = frameN;  // exact frame index
      
      Test6Text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Test6Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test6RoutineEnd() {
  return async function () {
    //------Ending Routine 'Test6'-------
    for (const thisComponent of Test6Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Test6Video.stop();
    KeyboardTest6.stop();
    // the Routine "Test6" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _KeyboardTest7_allKeys;
var Test7Components;
function Test7RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test7'-------
    t = 0;
    Test7Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    KeyboardTest7.keys = undefined;
    KeyboardTest7.rt = undefined;
    _KeyboardTest7_allKeys = [];
    // keep track of which components have finished
    Test7Components = [];
    Test7Components.push(Test7Video);
    Test7Components.push(Test7Map);
    Test7Components.push(KeyboardTest7);
    Test7Components.push(AufforderungTest7);
    Test7Components.push(Test7Text);
    
    for (const thisComponent of Test7Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Test7RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test7'-------
    // get current time
    t = Test7Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Test7Video* updates
    if (t >= 2 && Test7Video.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test7Video.tStart = t;  // (not accounting for frame time here)
      Test7Video.frameNStart = frameN;  // exact frame index
      
      Test7Video.setAutoDraw(true);
      Test7Video.play();
    }

    
    // *Test7Map* updates
    if (t >= 0.0 && Test7Map.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test7Map.tStart = t;  // (not accounting for frame time here)
      Test7Map.frameNStart = frameN;  // exact frame index
      
      Test7Map.setAutoDraw(true);
    }

    
    // *KeyboardTest7* updates
    if (t >= 2 && KeyboardTest7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      KeyboardTest7.tStart = t;  // (not accounting for frame time here)
      KeyboardTest7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { KeyboardTest7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest7.clearEvents(); });
    }

    if (KeyboardTest7.status === PsychoJS.Status.STARTED) {
      let theseKeys = KeyboardTest7.getKeys({keyList: ['space'], waitRelease: false});
      _KeyboardTest7_allKeys = _KeyboardTest7_allKeys.concat(theseKeys);
      if (_KeyboardTest7_allKeys.length > 0) {
        KeyboardTest7.keys = _KeyboardTest7_allKeys[_KeyboardTest7_allKeys.length - 1].name;  // just the last key pressed
        KeyboardTest7.rt = _KeyboardTest7_allKeys[_KeyboardTest7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AufforderungTest7* updates
    if (((Test7Video.status == FINISHED)) && AufforderungTest7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AufforderungTest7.tStart = t;  // (not accounting for frame time here)
      AufforderungTest7.frameNStart = frameN;  // exact frame index
      
      AufforderungTest7.setAutoDraw(true);
    }

    
    // *Test7Text* updates
    if (t >= 0.0 && Test7Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test7Text.tStart = t;  // (not accounting for frame time here)
      Test7Text.frameNStart = frameN;  // exact frame index
      
      Test7Text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Test7Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test7RoutineEnd() {
  return async function () {
    //------Ending Routine 'Test7'-------
    for (const thisComponent of Test7Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Test7Video.stop();
    KeyboardTest7.stop();
    // the Routine "Test7" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _KeyboardTest1_3_allKeys;
var Test7aComponents;
function Test7aRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test7a'-------
    t = 0;
    Test7aClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    KeyboardTest1_3.keys = undefined;
    KeyboardTest1_3.rt = undefined;
    _KeyboardTest1_3_allKeys = [];
    // keep track of which components have finished
    Test7aComponents = [];
    Test7aComponents.push(Test1Video_3);
    Test7aComponents.push(MapTest1_3);
    Test7aComponents.push(KeyboardTest1_3);
    Test7aComponents.push(AufforderungTest1_3);
    Test7aComponents.push(Test1Text_3);
    
    for (const thisComponent of Test7aComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Test7aRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test7a'-------
    // get current time
    t = Test7aClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Test1Video_3* updates
    if (t >= 2 && Test1Video_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test1Video_3.tStart = t;  // (not accounting for frame time here)
      Test1Video_3.frameNStart = frameN;  // exact frame index
      
      Test1Video_3.setAutoDraw(true);
      Test1Video_3.play();
    }

    
    // *MapTest1_3* updates
    if (t >= 0.0 && MapTest1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      MapTest1_3.tStart = t;  // (not accounting for frame time here)
      MapTest1_3.frameNStart = frameN;  // exact frame index
      
      MapTest1_3.setAutoDraw(true);
    }

    
    // *KeyboardTest1_3* updates
    if (t >= 2 && KeyboardTest1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      KeyboardTest1_3.tStart = t;  // (not accounting for frame time here)
      KeyboardTest1_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { KeyboardTest1_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest1_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest1_3.clearEvents(); });
    }

    if (KeyboardTest1_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = KeyboardTest1_3.getKeys({keyList: ['space'], waitRelease: false});
      _KeyboardTest1_3_allKeys = _KeyboardTest1_3_allKeys.concat(theseKeys);
      if (_KeyboardTest1_3_allKeys.length > 0) {
        KeyboardTest1_3.keys = _KeyboardTest1_3_allKeys[_KeyboardTest1_3_allKeys.length - 1].name;  // just the last key pressed
        KeyboardTest1_3.rt = _KeyboardTest1_3_allKeys[_KeyboardTest1_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AufforderungTest1_3* updates
    if (((Test1Video_3.status == FINISHED)) && AufforderungTest1_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AufforderungTest1_3.tStart = t;  // (not accounting for frame time here)
      AufforderungTest1_3.frameNStart = frameN;  // exact frame index
      
      AufforderungTest1_3.setAutoDraw(true);
    }

    
    // *Test1Text_3* updates
    if (t >= 0.0 && Test1Text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test1Text_3.tStart = t;  // (not accounting for frame time here)
      Test1Text_3.frameNStart = frameN;  // exact frame index
      
      Test1Text_3.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Test7aComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test7aRoutineEnd() {
  return async function () {
    //------Ending Routine 'Test7a'-------
    for (const thisComponent of Test7aComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Test1Video_3.stop();
    KeyboardTest1_3.stop();
    // the Routine "Test7a" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _KeyboardTest8_allKeys;
var Test8Components;
function Test8RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test8'-------
    t = 0;
    Test8Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    KeyboardTest8.keys = undefined;
    KeyboardTest8.rt = undefined;
    _KeyboardTest8_allKeys = [];
    // keep track of which components have finished
    Test8Components = [];
    Test8Components.push(Test8Video);
    Test8Components.push(Test8Map);
    Test8Components.push(KeyboardTest8);
    Test8Components.push(AufforderungTest8);
    Test8Components.push(Test8Text);
    
    for (const thisComponent of Test8Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Test8RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test8'-------
    // get current time
    t = Test8Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Test8Video* updates
    if (t >= 2 && Test8Video.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test8Video.tStart = t;  // (not accounting for frame time here)
      Test8Video.frameNStart = frameN;  // exact frame index
      
      Test8Video.setAutoDraw(true);
      Test8Video.play();
    }

    
    // *Test8Map* updates
    if (t >= 0.0 && Test8Map.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test8Map.tStart = t;  // (not accounting for frame time here)
      Test8Map.frameNStart = frameN;  // exact frame index
      
      Test8Map.setAutoDraw(true);
    }

    
    // *KeyboardTest8* updates
    if (t >= 2 && KeyboardTest8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      KeyboardTest8.tStart = t;  // (not accounting for frame time here)
      KeyboardTest8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { KeyboardTest8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest8.clearEvents(); });
    }

    if (KeyboardTest8.status === PsychoJS.Status.STARTED) {
      let theseKeys = KeyboardTest8.getKeys({keyList: ['space'], waitRelease: false});
      _KeyboardTest8_allKeys = _KeyboardTest8_allKeys.concat(theseKeys);
      if (_KeyboardTest8_allKeys.length > 0) {
        KeyboardTest8.keys = _KeyboardTest8_allKeys[_KeyboardTest8_allKeys.length - 1].name;  // just the last key pressed
        KeyboardTest8.rt = _KeyboardTest8_allKeys[_KeyboardTest8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AufforderungTest8* updates
    if (((Test8Video.status == FINISHED)) && AufforderungTest8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AufforderungTest8.tStart = t;  // (not accounting for frame time here)
      AufforderungTest8.frameNStart = frameN;  // exact frame index
      
      AufforderungTest8.setAutoDraw(true);
    }

    
    // *Test8Text* updates
    if (t >= 0.0 && Test8Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test8Text.tStart = t;  // (not accounting for frame time here)
      Test8Text.frameNStart = frameN;  // exact frame index
      
      Test8Text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Test8Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test8RoutineEnd() {
  return async function () {
    //------Ending Routine 'Test8'-------
    for (const thisComponent of Test8Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Test8Video.stop();
    KeyboardTest8.stop();
    // the Routine "Test8" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _KeyboardTest9_allKeys;
var Test9Components;
function Test9RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test9'-------
    t = 0;
    Test9Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    KeyboardTest9.keys = undefined;
    KeyboardTest9.rt = undefined;
    _KeyboardTest9_allKeys = [];
    // keep track of which components have finished
    Test9Components = [];
    Test9Components.push(Test9Video);
    Test9Components.push(Test9Map);
    Test9Components.push(KeyboardTest9);
    Test9Components.push(AufforderungTest8_2);
    Test9Components.push(Test8Text_2);
    
    for (const thisComponent of Test9Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Test9RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test9'-------
    // get current time
    t = Test9Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Test9Video* updates
    if (t >= 2 && Test9Video.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test9Video.tStart = t;  // (not accounting for frame time here)
      Test9Video.frameNStart = frameN;  // exact frame index
      
      Test9Video.setAutoDraw(true);
      Test9Video.play();
    }

    
    // *Test9Map* updates
    if (t >= 0.0 && Test9Map.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test9Map.tStart = t;  // (not accounting for frame time here)
      Test9Map.frameNStart = frameN;  // exact frame index
      
      Test9Map.setAutoDraw(true);
    }

    
    // *KeyboardTest9* updates
    if (t >= 2 && KeyboardTest9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      KeyboardTest9.tStart = t;  // (not accounting for frame time here)
      KeyboardTest9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { KeyboardTest9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest9.clearEvents(); });
    }

    if (KeyboardTest9.status === PsychoJS.Status.STARTED) {
      let theseKeys = KeyboardTest9.getKeys({keyList: ['space'], waitRelease: false});
      _KeyboardTest9_allKeys = _KeyboardTest9_allKeys.concat(theseKeys);
      if (_KeyboardTest9_allKeys.length > 0) {
        KeyboardTest9.keys = _KeyboardTest9_allKeys[_KeyboardTest9_allKeys.length - 1].name;  // just the last key pressed
        KeyboardTest9.rt = _KeyboardTest9_allKeys[_KeyboardTest9_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AufforderungTest8_2* updates
    if (((Test9Video.status == FINISHED)) && AufforderungTest8_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AufforderungTest8_2.tStart = t;  // (not accounting for frame time here)
      AufforderungTest8_2.frameNStart = frameN;  // exact frame index
      
      AufforderungTest8_2.setAutoDraw(true);
    }

    
    // *Test8Text_2* updates
    if (t >= 0.0 && Test8Text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test8Text_2.tStart = t;  // (not accounting for frame time here)
      Test8Text_2.frameNStart = frameN;  // exact frame index
      
      Test8Text_2.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Test9Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test9RoutineEnd() {
  return async function () {
    //------Ending Routine 'Test9'-------
    for (const thisComponent of Test9Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Test9Video.stop();
    KeyboardTest9.stop();
    // the Routine "Test9" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _KeyboardTest10_allKeys;
var Test10Components;
function Test10RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test10'-------
    t = 0;
    Test10Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    KeyboardTest10.keys = undefined;
    KeyboardTest10.rt = undefined;
    _KeyboardTest10_allKeys = [];
    // keep track of which components have finished
    Test10Components = [];
    Test10Components.push(Test10Video);
    Test10Components.push(Test10Map);
    Test10Components.push(KeyboardTest10);
    Test10Components.push(AufforderungTest10);
    Test10Components.push(Test10Text);
    
    for (const thisComponent of Test10Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function Test10RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test10'-------
    // get current time
    t = Test10Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Test10Video* updates
    if (t >= 2 && Test10Video.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test10Video.tStart = t;  // (not accounting for frame time here)
      Test10Video.frameNStart = frameN;  // exact frame index
      
      Test10Video.setAutoDraw(true);
      Test10Video.play();
    }

    
    // *Test10Map* updates
    if (t >= 0.0 && Test10Map.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test10Map.tStart = t;  // (not accounting for frame time here)
      Test10Map.frameNStart = frameN;  // exact frame index
      
      Test10Map.setAutoDraw(true);
    }

    
    // *KeyboardTest10* updates
    if (t >= 2 && KeyboardTest10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      KeyboardTest10.tStart = t;  // (not accounting for frame time here)
      KeyboardTest10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { KeyboardTest10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { KeyboardTest10.clearEvents(); });
    }

    if (KeyboardTest10.status === PsychoJS.Status.STARTED) {
      let theseKeys = KeyboardTest10.getKeys({keyList: ['space'], waitRelease: false});
      _KeyboardTest10_allKeys = _KeyboardTest10_allKeys.concat(theseKeys);
      if (_KeyboardTest10_allKeys.length > 0) {
        KeyboardTest10.keys = _KeyboardTest10_allKeys[_KeyboardTest10_allKeys.length - 1].name;  // just the last key pressed
        KeyboardTest10.rt = _KeyboardTest10_allKeys[_KeyboardTest10_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *AufforderungTest10* updates
    if (((Test10Video.status == FINISHED)) && AufforderungTest10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      AufforderungTest10.tStart = t;  // (not accounting for frame time here)
      AufforderungTest10.frameNStart = frameN;  // exact frame index
      
      AufforderungTest10.setAutoDraw(true);
    }

    
    // *Test10Text* updates
    if (t >= 0.0 && Test10Text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test10Text.tStart = t;  // (not accounting for frame time here)
      Test10Text.frameNStart = frameN;  // exact frame index
      
      Test10Text.setAutoDraw(true);
    }

    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Test10Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test10RoutineEnd() {
  return async function () {
    //------Ending Routine 'Test10'-------
    for (const thisComponent of Test10Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    Test10Video.stop();
    KeyboardTest10.stop();
    // the Routine "Test10" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_thanks_allKeys;
var thanksComponents;
function thanksRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'thanks'-------
    t = 0;
    thanksClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_thanks.keys = undefined;
    key_resp_thanks.rt = undefined;
    _key_resp_thanks_allKeys = [];
    // keep track of which components have finished
    thanksComponents = [];
    thanksComponents.push(DankeText);
    thanksComponents.push(key_resp_thanks);
    
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    return Scheduler.Event.NEXT;
  }
}


function thanksRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'thanks'-------
    // get current time
    t = thanksClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *DankeText* updates
    if (t >= 0.0 && DankeText.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      DankeText.tStart = t;  // (not accounting for frame time here)
      DankeText.frameNStart = frameN;  // exact frame index
      
      DankeText.setAutoDraw(true);
    }

    
    // *key_resp_thanks* updates
    if (t >= 0.0 && key_resp_thanks.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_thanks.tStart = t;  // (not accounting for frame time here)
      key_resp_thanks.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_thanks.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_thanks.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_thanks.clearEvents(); });
    }

    if (key_resp_thanks.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_thanks.getKeys({keyList: ['space', 'esc'], waitRelease: false});
      _key_resp_thanks_allKeys = _key_resp_thanks_allKeys.concat(theseKeys);
      if (_key_resp_thanks_allKeys.length > 0) {
        key_resp_thanks.keys = _key_resp_thanks_allKeys[_key_resp_thanks_allKeys.length - 1].name;  // just the last key pressed
        key_resp_thanks.rt = _key_resp_thanks_allKeys[_key_resp_thanks_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of thanksComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function thanksRoutineEnd() {
  return async function () {
    //------Ending Routine 'thanks'-------
    for (const thisComponent of thanksComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    key_resp_thanks.stop();
    // the Routine "thanks" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
