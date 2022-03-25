### Overview

The team aims to meet on Wednesday's at 5PM each week in order to review the progress that is made. For sprint review, we plan to meet Wednesdays at Noon or Wednesdays at 5PM depending on instructor availability.

This way there is communication between teammembers at least once a week and a review of the team's work near the end of the sprint. 

The team uses Trello for project management and organization of tasks. During sprint 2 we successfully used this application to assign tasks for each group member and moved items to the completed list when they were done.

### Plans for CI/CD

To separate testing from production, this repository has two branches. The main branch will hold production code. Only code that is set to be used by consumers should be pushed to this branch. All other code will be pushed to the "Testing" branch. This will ensure that once a site is live and usable, the team can work on adding features or functionality to the project without breaking what currently works. Team members can update the testing branch during a sprint and when the team is satisfied with the changes, these changes can finally be merged with the main branch. This setup will require developers to make sure they pull from the Testing branch prior to altering the code so that the development code is not changed by mistake.

### System Process and Configuration with Azure

The CI/CD is set up and properly connected to the repository for QuizMaster. The application is set up as static web application. There is a generic index.html for main. When there are any versions of code available it will be set up through the additional branches created for testing. The testing branch is tested using a live server extension through Visual Studio Code. This will test the testing branch to a local server. The Production branch (main) is connected to firebase. Main contains the code for deployment connected to the production URL. 

### New User Configuration

Each member was invited to become a user through Azure to access the production environment for the project. Each user will have full capabilities. 

### New Guest Configuration

Guest will be added as users with a guest perspective. This way they will not be able to access the same abilities as the team. 

### What constitutes "done"

We define done in two ways. The first is in relation to user stories. A user story is done when:

• The hypothetical user in the story can successfully complete the desired action.

• For example, if the user story is “As a user, I want to use a link to visit the HTML home page for the Quiz Master site,” this story is “done” when we have a static page link that takes the user to a HTML page with CSS.

• The user story or the desired feature can be executed via the production branch by a user. 

The second definition applies to general site/sprint requirements. Done in this case means the task has no more work to be done and has been submitted. For example, part of a sprint requirement was creating a flyer to attract users. This task was considered done when it was submitted to the professor and put onto GitHub. In general, tasks under this umbrella should meet these criteria:

• The code is error free when run in the testing branch.

• The code is well commented/documented.

• The code has been reviewed by another team member.

• The code is implemented in the production branch and the production branch runs as intended.

• The production branch is deployed to the product firebase hosting site.

