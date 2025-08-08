# Running the application:

you'll need to install node (npm installs with node) https://nodejs.org

In the root folder install the depenancies:

```
npm i
```

then run the server:

```
npm run dev
```

using a web browser navigate to http://localhost:3000

# Summary

This is my submission for the following job screening:

```
 Using a tech stack of your choice develop a simple data entry web application.

This application should have a single form with inputs for:
·        Name
·        Age
·        Title
·        Hometown

The form should also have a single submit button.
Name and Title should be required fields, while the others are not. The system should display an error message if the required fields are not entered.
When the submit button is pressed, the application should take you to a confirmation page that has all of the information that was entered, as well as a table of previous entries submitted.
Include some basic CSS styling on the page to make it look somewhat presentable.
```

# About

The project uses Express with server-side static-served html.
I have extensive professional experience with frameworks such as Ruby on Rails, Django, and Next.js, but I chose Express because the task was small and didn’t require the overhead of a larger framework.

My focus was to complete the requirements within a short amount of time, while keeping the solution minimal, easy to run for other developers, and straightforward to review.
I tried to organize the logic in a sensible middle ground between enterprise and MVP.

I didn't get around to testing, but if I did it would of been integration testing using cherrio,jest, and supertest.
