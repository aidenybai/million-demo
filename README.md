# Million vs React Demo

The following is a random times table generator benchmark. It follows a comparison between React and Million, along with its fiber equivalents.

In order to invoke a re-render, click the "Increment" button.
The "Lag" radar indicates blocking time, but does not account for the
time it takes to update the UI. Notice the time it takes to update the
UI after you click to get an idea for update time.

Caveat to note: Every row contains 100 empty divs. This is to simulate
nodes to stimulate diffing in order to measure performance.

You can adjust the number of rows by using the the number input. Make
sure to adjust if you can't see any performance difference or your
screen freezes.

[https://demo.millionjs.org/](https://demo.millionjs.org/)
