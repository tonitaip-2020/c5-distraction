﻿#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v3.2.4),
    on tammikuu 14, 2020, at 14:01
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

import psychopy
psychopy.useVersion('3.2.4')


from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard

# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '3.2.4'
expName = 'kirjaimet20a'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='C:\\MyTemp\\psychopy\\kirjaimet10ha\\kirjaimet10ha_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='norm')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
mouse_3 = event.Mouse(win=win)
x, y = [None, None]
mouse_3.mouseClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='   paina kirjainyhdistelmää \n                   IKJ\n   tai painiketta "seuraava",\njos kirjainyhdistelmää ei löydy\n\n (paina näyttöä aloittaaksesi)',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "trial"
trialClock = core.Clock()
mouse = event.Mouse(win=win)
x, y = [None, None]
mouse.mouseClock = core.Clock()
v03_oikea = visual.ImageStim(
    win=win,
    name='v03_oikea', 
    image='ikj.png', mask=None,
    ori=0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-1.0)
v04 = visual.ImageStim(
    win=win,
    name='v04', 
    image='ikl.png', mask=None,
    ori=0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-2.0)
v05 = visual.ImageStim(
    win=win,
    name='v05', 
    image='ilk.png', mask=None,
    ori=0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-3.0)
v08 = visual.ImageStim(
    win=win,
    name='v08', 
    image='jkl.png', mask=None,
    ori=0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-4.0)
v09 = visual.ImageStim(
    win=win,
    name='v09', 
    image='jli.png', mask=None,
    ori=0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-5.0)
v10 = visual.ImageStim(
    win=win,
    name='v10', 
    image='jlk.png', mask=None,
    ori=0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-6.0)
v13 = visual.ImageStim(
    win=win,
    name='v13', 
    image='kjl.png', mask=None,
    ori=0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-7.0)
v14 = visual.ImageStim(
    win=win,
    name='v14', 
    image='kli.png', mask=None,
    ori=0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-8.0)
v15 = visual.ImageStim(
    win=win,
    name='v15', 
    image='klj.png', mask=None,
    ori=0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-9.0)
v19 = visual.ImageStim(
    win=win,
    name='v19', 
    image='lki.png', mask=None,
    ori=0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-10.0)
v21 = visual.ImageStim(
    win=win,
    name='v21', 
    image='ljk.png', mask=None,
    ori=0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-11.0)
jatka = visual.ImageStim(
    win=win,
    name='jatka', 
    image='jatka.png', mask=None,
    ori=0, pos=[0,0], size=1.0,
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=128, interpolate=True, depth=-12.0)

# Initialize components for Routine "clicktocontinue"
clicktocontinueClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='   paina kirjainyhdistelmää \n                   IKJ\n   tai painiketta "seuraava",\njos kirjainyhdistelmää ei löydy\n\n (paina näyttöä jatkaaksesi)',
    font='Arial',
    pos=(0, 0), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
mouse_2 = event.Mouse(win=win)
x, y = [None, None]
mouse_2.mouseClock = core.Clock()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "instructions"-------
# update component parameters for each repeat
# setup some python lists for storing info about the mouse_3
gotValidClick = False  # until a click is received
# keep track of which components have finished
instructionsComponents = [mouse_3, text_2]
for thisComponent in instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1
continueRoutine = True

# -------Run Routine "instructions"-------
while continueRoutine:
    # get current time
    t = instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    # *mouse_3* updates
    if mouse_3.status == NOT_STARTED and t >= 1-frameTolerance:
        # keep track of start time/frame for later
        mouse_3.frameNStart = frameN  # exact frame index
        mouse_3.tStart = t  # local t and not account for scr refresh
        mouse_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(mouse_3, 'tStartRefresh')  # time at next scr refresh
        mouse_3.status = STARTED
        mouse_3.mouseClock.reset()
        prevButtonState = mouse_3.getPressed()  # if button is down already this ISN'T a new click
    if mouse_3.status == STARTED:  # only update if started and not finished!
        buttons = mouse_3.getPressed()
        if buttons != prevButtonState:  # button state changed?
            prevButtonState = buttons
            if sum(buttons) > 0:  # state changed to a new click
                continueRoutine = False    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions"-------
for thisComponent in instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
# store data for thisExp (ExperimentHandler)
thisExp.addData('mouse_3.started', mouse_3.tStart)
thisExp.addData('mouse_3.stopped', mouse_3.tStop)
thisExp.nextEntry()
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)
# the Routine "instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('img_pos.xlsx'),
    seed=None, name='trials')
thisExp.addLoop(trials)  # add the loop to the experiment
thisTrial = trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
if thisTrial != None:
    for paramName in thisTrial:
        exec('{} = thisTrial[paramName]'.format(paramName))

for thisTrial in trials:
    currentLoop = trials
    # abbreviate parameter names if possible (e.g. rgb = thisTrial.rgb)
    if thisTrial != None:
        for paramName in thisTrial:
            exec('{} = thisTrial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "trial"-------
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse
    mouse.x = []
    mouse.y = []
    mouse.leftButton = []
    mouse.midButton = []
    mouse.rightButton = []
    mouse.time = []
    mouse.clicked_name = []
    gotValidClick = False  # until a click is received
    v03_oikea.setPos((px06,py06))
    v03_oikea.setSize((pw,ph))
    v04.setPos((px07,py07))
    v04.setSize((pw,ph))
    v05.setPos((px08,py08))
    v05.setSize((pw,ph))
    v08.setPos((px11,py11))
    v08.setSize((pw,ph))
    v09.setPos((px12,py12))
    v09.setSize((pw,ph))
    v10.setPos((px13,py13))
    v10.setSize((pw,ph))
    v13.setPos((px16,py16))
    v13.setSize((pw,ph))
    v14.setPos((px17,py17))
    v14.setSize((pw,ph))
    v15.setPos((px18,py18))
    v15.setSize((pw,ph))
    v19.setPos((px19,py19))
    v19.setSize((pw,ph))
    v21.setPos((px21,py21))
    v21.setSize((pw,ph))
    jatka.setPos((jatkax,jatkay))
    jatka.setSize((jw,jh))
    # keep track of which components have finished
    trialComponents = [mouse, v03_oikea, v04, v05, v08, v09, v10, v13, v14, v15, v19, v21, jatka]
    for thisComponent in trialComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "trial"-------
    while continueRoutine:
        # get current time
        t = trialClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=trialClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        # *mouse* updates
        if mouse.status == NOT_STARTED and t >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            mouse.frameNStart = frameN  # exact frame index
            mouse.tStart = t  # local t and not account for scr refresh
            mouse.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse, 'tStartRefresh')  # time at next scr refresh
            mouse.status = STARTED
            mouse.mouseClock.reset()
            prevButtonState = mouse.getPressed()  # if button is down already this ISN'T a new click
        if mouse.status == STARTED:  # only update if started and not finished!
            buttons = mouse.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    # check if the mouse was inside our 'clickable' objects
                    gotValidClick = False
                    for obj in [v03_oikea,v04,v05,v08,v09,v10,v13,v14,v15,v21,jatka]:
                        if obj.contains(mouse):
                            gotValidClick = True
                            mouse.clicked_name.append(obj.name)
                    x, y = mouse.getPos()
                    mouse.x.append(x)
                    mouse.y.append(y)
                    buttons = mouse.getPressed()
                    mouse.leftButton.append(buttons[0])
                    mouse.midButton.append(buttons[1])
                    mouse.rightButton.append(buttons[2])
                    mouse.time.append(mouse.mouseClock.getTime())
                    if gotValidClick:  # abort routine on response
                        continueRoutine = False
        
        # *v03_oikea* updates
        if v03_oikea.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            v03_oikea.frameNStart = frameN  # exact frame index
            v03_oikea.tStart = t  # local t and not account for scr refresh
            v03_oikea.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(v03_oikea, 'tStartRefresh')  # time at next scr refresh
            v03_oikea.setAutoDraw(True)
        
        # *v04* updates
        if v04.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            v04.frameNStart = frameN  # exact frame index
            v04.tStart = t  # local t and not account for scr refresh
            v04.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(v04, 'tStartRefresh')  # time at next scr refresh
            v04.setAutoDraw(True)
        
        # *v05* updates
        if v05.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            v05.frameNStart = frameN  # exact frame index
            v05.tStart = t  # local t and not account for scr refresh
            v05.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(v05, 'tStartRefresh')  # time at next scr refresh
            v05.setAutoDraw(True)
        
        # *v08* updates
        if v08.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            v08.frameNStart = frameN  # exact frame index
            v08.tStart = t  # local t and not account for scr refresh
            v08.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(v08, 'tStartRefresh')  # time at next scr refresh
            v08.setAutoDraw(True)
        
        # *v09* updates
        if v09.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            v09.frameNStart = frameN  # exact frame index
            v09.tStart = t  # local t and not account for scr refresh
            v09.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(v09, 'tStartRefresh')  # time at next scr refresh
            v09.setAutoDraw(True)
        
        # *v10* updates
        if v10.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            v10.frameNStart = frameN  # exact frame index
            v10.tStart = t  # local t and not account for scr refresh
            v10.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(v10, 'tStartRefresh')  # time at next scr refresh
            v10.setAutoDraw(True)
        
        # *v13* updates
        if v13.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            v13.frameNStart = frameN  # exact frame index
            v13.tStart = t  # local t and not account for scr refresh
            v13.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(v13, 'tStartRefresh')  # time at next scr refresh
            v13.setAutoDraw(True)
        
        # *v14* updates
        if v14.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            v14.frameNStart = frameN  # exact frame index
            v14.tStart = t  # local t and not account for scr refresh
            v14.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(v14, 'tStartRefresh')  # time at next scr refresh
            v14.setAutoDraw(True)
        
        # *v15* updates
        if v15.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            v15.frameNStart = frameN  # exact frame index
            v15.tStart = t  # local t and not account for scr refresh
            v15.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(v15, 'tStartRefresh')  # time at next scr refresh
            v15.setAutoDraw(True)
        
        # *v19* updates
        if v19.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            v19.frameNStart = frameN  # exact frame index
            v19.tStart = t  # local t and not account for scr refresh
            v19.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(v19, 'tStartRefresh')  # time at next scr refresh
            v19.setAutoDraw(True)
        
        # *v21* updates
        if v21.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            v21.frameNStart = frameN  # exact frame index
            v21.tStart = t  # local t and not account for scr refresh
            v21.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(v21, 'tStartRefresh')  # time at next scr refresh
            v21.setAutoDraw(True)
        
        # *jatka* updates
        if jatka.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            jatka.frameNStart = frameN  # exact frame index
            jatka.tStart = t  # local t and not account for scr refresh
            jatka.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(jatka, 'tStartRefresh')  # time at next scr refresh
            jatka.setAutoDraw(True)
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in trialComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "trial"-------
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # store data for trials (TrialHandler)
    if len(mouse.x): trials.addData('mouse.x', mouse.x[0])
    if len(mouse.y): trials.addData('mouse.y', mouse.y[0])
    if len(mouse.leftButton): trials.addData('mouse.leftButton', mouse.leftButton[0])
    if len(mouse.midButton): trials.addData('mouse.midButton', mouse.midButton[0])
    if len(mouse.rightButton): trials.addData('mouse.rightButton', mouse.rightButton[0])
    if len(mouse.time): trials.addData('mouse.time', mouse.time[0])
    if len(mouse.clicked_name): trials.addData('mouse.clicked_name', mouse.clicked_name[0])
    trials.addData('mouse.started', mouse.tStart)
    trials.addData('mouse.stopped', mouse.tStop)
    trials.addData('v03_oikea.started', v03_oikea.tStartRefresh)
    trials.addData('v03_oikea.stopped', v03_oikea.tStopRefresh)
    trials.addData('v04.started', v04.tStartRefresh)
    trials.addData('v04.stopped', v04.tStopRefresh)
    trials.addData('v05.started', v05.tStartRefresh)
    trials.addData('v05.stopped', v05.tStopRefresh)
    trials.addData('v08.started', v08.tStartRefresh)
    trials.addData('v08.stopped', v08.tStopRefresh)
    trials.addData('v09.started', v09.tStartRefresh)
    trials.addData('v09.stopped', v09.tStopRefresh)
    trials.addData('v10.started', v10.tStartRefresh)
    trials.addData('v10.stopped', v10.tStopRefresh)
    trials.addData('v13.started', v13.tStartRefresh)
    trials.addData('v13.stopped', v13.tStopRefresh)
    trials.addData('v14.started', v14.tStartRefresh)
    trials.addData('v14.stopped', v14.tStopRefresh)
    trials.addData('v15.started', v15.tStartRefresh)
    trials.addData('v15.stopped', v15.tStopRefresh)
    trials.addData('v19.started', v19.tStartRefresh)
    trials.addData('v19.stopped', v19.tStopRefresh)
    trials.addData('v21.started', v21.tStartRefresh)
    trials.addData('v21.stopped', v21.tStopRefresh)
    trials.addData('jatka.started', jatka.tStartRefresh)
    trials.addData('jatka.stopped', jatka.tStopRefresh)
    # the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    
    # ------Prepare to start Routine "clicktocontinue"-------
    # update component parameters for each repeat
    # setup some python lists for storing info about the mouse_2
    gotValidClick = False  # until a click is received
    # keep track of which components have finished
    clicktocontinueComponents = [text, mouse_2]
    for thisComponent in clicktocontinueComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    clicktocontinueClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    continueRoutine = True
    
    # -------Run Routine "clicktocontinue"-------
    while continueRoutine:
        # get current time
        t = clicktocontinueClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=clicktocontinueClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *text* updates
        if text.status == NOT_STARTED and tThisFlip >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            text.frameNStart = frameN  # exact frame index
            text.tStart = t  # local t and not account for scr refresh
            text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
            text.setAutoDraw(True)
        # *mouse_2* updates
        if mouse_2.status == NOT_STARTED and t >= 0.5-frameTolerance:
            # keep track of start time/frame for later
            mouse_2.frameNStart = frameN  # exact frame index
            mouse_2.tStart = t  # local t and not account for scr refresh
            mouse_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(mouse_2, 'tStartRefresh')  # time at next scr refresh
            mouse_2.status = STARTED
            mouse_2.mouseClock.reset()
            prevButtonState = mouse_2.getPressed()  # if button is down already this ISN'T a new click
        if mouse_2.status == STARTED:  # only update if started and not finished!
            buttons = mouse_2.getPressed()
            if buttons != prevButtonState:  # button state changed?
                prevButtonState = buttons
                if sum(buttons) > 0:  # state changed to a new click
                    continueRoutine = False        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in clicktocontinueComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "clicktocontinue"-------
    for thisComponent in clicktocontinueComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials.addData('text.started', text.tStartRefresh)
    trials.addData('text.stopped', text.tStopRefresh)
    # store data for trials (TrialHandler)
    trials.addData('mouse_2.started', mouse_2.tStart)
    trials.addData('mouse_2.stopped', mouse_2.tStop)
    # the Routine "clicktocontinue" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
