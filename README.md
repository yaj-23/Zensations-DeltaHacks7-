# DeltaHacks7
Link to devspots: https://devpost.com/software/zensations

## Inspiration

Our main inspiration stems from hypertension being a major cause of premature death, reporting to show that fewer then 1 in 5 people suffering from hypertension have their situation under control (World Health Organization). 

The issue is *not that the solution doesn't exist*, but the lack of resources to find one. **_In addition_** to this, the pandemic has forced our modern society into an isolated space, lacking basic physical activity  and mediation techniques in favour for Zoom meetings.

We saw this as an opportunity to take an initiative and develop **Zensations**, the interactive app for seniors and adults seeking emotional relief to utilize and become more aware about the dangers of hypertension.

## What it does

Our mobile app gathers data from the user to determine their current mood and characteristics. We then provide a personalized relaxation exercise sequence selected from over 100+ different Yoga positions stored in a relational database. After the exercise movements, the user is navigated to a learn more section where they can further access resources for hypertension, powered by Heart & Stroke.

## How we built it

The frontend was first wireframed and designed using **Figma**. We then transfered the design to a mobile app using **Ionic**, leveraging the power of **React**. For the backend, we used **Express.js** with **Node.js** and **TypeScript** for a REST API to communicate and do *all the heavy lifting* for the app.

Our database of choice was none other than **Cockroachdb**, storing Yoga exercises, image URL's and a seperate table mapping Yoga positions with emotions (Angry, Sad, Happy, etc.) in order to improve the classification of exercises. 

## Challenges we ran into
Our first major problem with this project was configuring the setup of cockroachdb, and getting it to work alongside our project. Writing SQL queries was also a new experience for the entire team so we had to figuring out the syntax and some quirks.
After we setup cockroach cloud we were unable to connect to it through our express server. Even the cockroachdb docs showed methods that did not work for us. We finally resolved this by referring to a stackoverflow post (of coursse!). 

## What we learned  
> *this hackathon was filled with firsts*    
   
---  
    
> Learned SQL Queries and Relational Databases, Setup a Node+Express server with TypeScript for the first time. Also dabbled with some webscraping to get the Yoga poses.    
  
[@Navinn](https://navn.me)  
  
> First time participating in a hackathon, learning how to make SQL queries, using the Ionic framework, and cockroach DB, setting up backend using TypeScript
  
[@Samyak](https://samyakmehta.me)

> First time utilizing TypeScript and Ionic react to create Frontend Framework for our Cockroach DB backend and node server to create Zensations App.
  
[@Yajurva](https://yajurvatrivedi.me)
  
> First time participating in an hackathon, using Ionic React as our frontend framework, and Cockroach as our backend SQL database.  
  
[@Aryan](https://arypat.me)

## What's next for Zensations

Major future milestones we hope that could be extended upon the foundations of Zensations include creating custom profiles for users to sign up with. Alongside this, we would be able to monitor progress that seniors have made in terms of healthy living and emotional wellbeing. We would also like to be able to extend it into a more in depth way of checking users current health.
