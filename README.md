Work Day Scheduler

Description

This project is designed to present the user with an editable schedule listed by hour. When the page loads, the current data is done, then the application cheks local staorage for any events and populates the time slots with that information.

Then if the user enters an event into a timeslot and clicks the save button, the text for that event is saved to local storage so that it can be reloaded the next time the page is loaded.

screenshots below

![work-day-scheduler-header])'

User Story

AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

Acceptance Criteria

GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with time blocks for standard business hours
WHEN I view the time blocks for that day
THEN each time block is color-coded to indicate whether it is in the past, present, or future
WHEN I click into a time block
THEN I can enter an event
WHEN I click the save button for that time block
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
