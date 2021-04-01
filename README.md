# Work Day Scheduler
Given that an employee wants to keep track of thier events for the day

When a task is entered into the input field

Then, that task can be saved and reviewed throughout the day.

This application servers as a full work day scheduler for employees who work typical office hours from 9am to 5pm. 

At the top of the application the current date and time will be displayed. The format shows the day of the week, the month, the day and the time. The time is displayed in standard time, utilizing A.M. and P.M. labels. 

Beneath the time there are a total of 9 rows. One row for each work day office hour. Each row has the same structure: a time block (from 9am-5pm), a textarea (input fields for users to type their events/to-do tasks), and a save icon (used for saving users input to local storage).

Each row is specially color coded based upon the current time. If the current time is ahead of a time block then that row appears gray. If the current time and the time block are the same (present time), then the row appears red. Finally if a time block is ahead of the current time (in the future), then the row appears green. 