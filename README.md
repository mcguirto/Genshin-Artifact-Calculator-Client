# To be used in conjuction with Genshin Artifact Calculator API
https://github.com/mcguirto/Genshin-Artifact-Calculator-Server.git

# Genshin Impact Artifact Calculator
A helper app for the popular video game Genshin Impact. An important part of Genshin's endgame is farming for "artifacts", which can be powered up to semi-randomly increase their stats. Having artifacts that roll the proper stats can be extremely helpful for a player, but since there are several layers of randomness, it can sometimes be difficult to tell exactly how good one artifact is compared to another.

The Artifact Rater aims to make it easier to compare different artifacts by allowing users to <strike>upload screenshots</strike> of their artifacts and assigning each uploaded artifact two ratings: a percentile rating describing how good the artifact is compared to all possible other artifacts of the same type, and a relative power rating describing how good the artifact is compared to the best possible artifact of that type.

## Planning
### User Stories
##### Artifact
As a user, I would like to:
- to dream of upload a screenshot of an artifact to the server for analysis and instead:
  - type out the artifact's stats while looking at my own screenshot to upload
  - receive a percentile rating for my uploaded artifact
  - receive a relative power rating for my uploaded artifact
- be able to create an account and log in to save uploaded artifacts
- have the option, after uploading and analysis, to save the uploaded artifact to my account
- be able to view all of my saved artifacts
- be able to "favorite" saved artifacts
- be able to delete saved artifacts
- sort the artifacts I've saved by several different filters:
  - artifact's set
  - specified main stat
  - specified substat
  - percentile rating
  - power rating
  - favorite
##### Character
As a user, I would like to:
- be able to save character to my account by type out the Character's stats
- be able to view all of my saved characters
- be able to "favorite" saved characters
- be able to delete saved characters
- sort the characters I've saved by several different filters:
  - element
  - star ratings
  - favorite
##### Compo of Artifact and Character
- have a one-click feature that, drawing from all the artifacts I own, finds the best artifact combination for a specified character (stretch goal)

### Wireframes
![](Planner/wireframes/1.jpeg)
![](Planner/wireframes/2.jpeg)
![](Planner/wireframes/3.jpeg)
![](Planner/wireframes/4.jpeg)
![](Planner/wireframes/5.jpeg)
![](Planner/wireframes/6.jpeg)
![](Planner/wireframes/7.png)
![](Planner/wireframes/8.jpeg)

### Roles
- Manager: Tyson
- Front-End SME: Efrain
- Back-End SME: Fei