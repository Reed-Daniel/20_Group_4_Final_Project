# NBA Player Statistics & Performance Over the Course of the Modern NBA
# Group 4 Final Project
# **Table of Contents** #
1. [Topic](#topic)
1. [Reason for Selecting the Topic](#reason-for-selecting-the-topic)
1. [Source](#source)
1. [Questions to Answer](#questions-to-answer)
1. [Project & Communication Protocols](#project-communication-protocols)
1. [Tools](#tools)
1. [FSD & ERD](#fsd-&-erd)
    1. [High Level](#high-level)
    1. [NBA Stats Database](#nba-stats-database-erd)
    1. [Machine Learning ERD](#machine-learning-erd)
1. [Database Model](#database-model)
    1. [Sample Structure of the Database Model](#sample-structure-of-the-database-model)
1. [Machine Learning Model](#machine-learning-model)
    1. [Sample Structure of the Machine Learning Model](#sample-structure-of-the-machine-learning-model)
1. [Exploratory Analysis](#exploratory-analysis)
1. [Presentation](#presentation)
1. [Dashboard](#dashboard)

## Topic <a name="topic"></a>
- The relationship between NBA player statistics and performance over the course of the modern NBA

## Reason for Selecting Topic <a name="reason-for-selecting-the-topic"></a>
* We would like to explore statistical data to determine if the NBA has a base-line for it's athletes, how that base line weighs against the top performers throughout the decades, and if you can predict the number of games a player would play per season

## Questions to Answer <a name="questions-to-answer"></a>
* Does the NBA look the same decade by decade in terms of performance?
* What does a prototypical player look like in each decade?
	* How has that changed over time?
- Can you predict the number of games a player will play in a season based on their statistics?
	* Does decade have an impact of number of games played?

## Project and Communication Protocols <a name="project-communication-protocols"></a>
* Our group maintains a steady flow of communication through Slack and our Teams page to stay updated on the status of the project deliverables as well as to coordinate additional meetings outside of class time. 

### GitHub
#### The main branch should include: 
* All code necessary to perform exploratory analysis 
* Some code necessary to complete the machine learning portion of the project 
* README.md README.md must include: 
	* Description of the communication protocols 
	* Outline of the project (this may include images, but should be easy to follow and digest).  Note: The descriptions and explanations required in all other project deliverables should also be in your README.md as part of your outline, unless otherwise noted.
* Individual Branches 
	* Description of the communication protocols 
	* At least one branch for each team member 
	* Each team member has at least four commits for the duration of the second segment (eight total commits per person)

Responsibility Legend|Symbol|Team Member|System|Phase  
|:----------------------------------:|:--:|:--------------------:|:-----------------------:|:-----:|
The team member in the square role will be responsible for the respository | □ | K. McClelland | GitHub <br /> Teams <br /> Calendar <br /> | I & II |
The member in the triangle role will create a mockup of a machine learning model.  This can even be a diagram that explains how it will work concurrently with the rest of the project steps | ∆ | S. Crimi | ML | I & II |
The member in the circle role will create a mockup of a database with a set of sample data, or even fabricated data.  This will ensure the database will work seamlessly with the rest of the project | ○ | J. Klein | Database | I & II |
The member in the X role will decide which technologies will be used for each step of the project | X | S. Crimi <br /> J. Klein <br /> R. Daniel <br /> | ML <br /> Database <br /> Dashboard <br />| I & II <br /> I & II <br /> II |

## Tools <a name="tools"></a>
Systems | Tools 
|:--------------------------:|:---------------------------:|
Data Cleaning & Analysis | Pandas <br /> Numpy <br /> MatPlotLib|
ERD | Power BI <br /> Lucid Charts <br /> Quick Database Diagrams |
Database | PgAdmin4 <br /> AWS |
Machine Learning | SciKitLearn <br /> Google CoLab <br /> Supervised Learning Model |
Dashboard | HTML <br /> CSS <br /> JavaScript <br /> Tableau <br /> GitHub Pages |

# FSD & ERD <a name="fsd-&-erd"></a>
## High Level <a name="high-level"></a>
![Pic 1](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/ERD/High_Level%20ERD_r1.jpg)

## Source Data <a name="source"></a>
- Our source data will be taken from Kaggle and includes NBA Players Stats since 1950 in the form of csv files

File Name |Number of Rows|Number of Columns  
|:----------------------------------:|:-----------:|:---------:|
Player.csv | 3,922 | 8 |
Season_Stats.csv | 24,690 | 52 |
Player_Data.csv | 4,550 | 8 |
	
- For the purpose of our analysis we will only focus on years 1980-present as that is when the "modern" NBA began 
  
File Name |Number of Rows|Number of Columns  
|:----------------------------------:|:-----------:|:---------:|
File | XXXXXX | XXXXXX |
File | XXXXXX | XXXXXX |
File | XXXXXX | XXXXXX |


## NBA Stats Database ERD <a name="nba-stats-database-erd"></a>
![Pic 2](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/ERD/NBA_Stats_DB.png)

## NBA Machine Learning FSD <a name="machine-learning-erd"></a>
### Supervised Model
![Pic 3](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/ERD/SupervisedModelDiagram.jpg)

### Unsupervised Model
![Pic 4](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/ERD/UnsupervisedModelDiagram.jpg)

# Database Model <a name="database-model"></a>
## Sample Structure of the Database Model <a name= "sample-structure-of-the-database-model"><a/>
### NBA Database
* Team members present a fully integrated database.
* Database stores static data for use during the project 
* Database interfaces with the project in some format (e.g., scraping updates the database, or database connects to the model) 
* Includes at least two tables (or collections, if using MongoDB) 
* Includes at least one join using the database language (not including any joins in Pandas) 
* Includes at least one connection string (using SQLAlchemy or PyMongo) Note: If you use a SQL database, you must provide your ERD with relationships.

ERD Mock Data 1 | 
|:----------------------------------:|
![Pic 5](https://user-images.githubusercontent.com/93271297/159188954-71be3a97-d7c8-4d2e-b09a-dad4d564d98f.jpeg)| 

ERD Mock Data 2 |	
|:-----------------------------------:|	
![Pic 6](https://user-images.githubusercontent.com/93271297/159188958-d5358084-fa24-4f86-954e-b747a3b06b3a.jpeg)|

ERD Mock Data 3 |	
|:-----------------------------------:|	
![Pic 7](https://user-images.githubusercontent.com/93271297/159188966-7e0f4fac-24f3-40bb-9e2b-3e48523f1c4a.jpeg)|

# Machine Learning Model <a name="machine-learning-model"></a>
## Questions to answer
* Description of preliminary data preprocessing 

* Description of preliminary feature engineering

* Preliminary feature selection
	
* Including their decision-making process 

* Description of how data was split into training and testing sets 

* Explanation of model choice

* Include limitations and benefits

## PCA KMeans Initial

## Sample structure of the Machine Learning Model <a name="sample-structure-of-the-machine-learning-model"></a> 
NBA Season Logistical Pg 1 | | NBA Season Logistical Pg 2
|:----------------------------------:|:-:|:-----------------------------------:|
![Pic 8](https://user-images.githubusercontent.com/93271297/159190111-5cf01063-2bc6-4839-b9fe-bdd9ccf34378.png)| | ![Pic 9](https://user-images.githubusercontent.com/93271297/159190153-32425c4e-221e-468c-9665-dc58fdd492c0.png)|
	
NBA Season Logistical Pg 3 | | NBA Season Logistical Pg 4
|:-----------------------------------:|:-:|:-----------------------------------:|
![Pic 10](https://user-images.githubusercontent.com/93271297/159190176-7d375dcb-13cc-4cc1-9978-e76102dca178.png)| | ![Pic 11](https://user-images.githubusercontent.com/93271297/159190207-e3ce6d97-3647-4617-ba3f-7baef91bcd9f.png)|

NBA Season Logistical Pg 5 | | NBA Season Logistical Pg 6
|:-----------------------------------:|:-:|:-----------------------------------:|
![Pic 12](https://user-images.githubusercontent.com/93271297/159190232-01de99a1-1447-4d68-9152-c59b9ee89493.png)| | ![Pic 13](https://user-images.githubusercontent.com/93271297/159190243-393add01-a1c6-4c2a-9837-fbef5f873a5c.png)|

# Exploratory Analysis <a name="exploratory-analysis"></a>

3PA & Games | | Assists & Games 
|:-----------------------------------:|:-:|:-----------------------------------:|
![Pic 14](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/ExploratoryFeatures_XLabel%3D3PA_YLabel%3DG.jpg)| | ![Pic 15](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/ExploratoryFeatures_XLabel%3DAST_YLabel%3DG.jpg)|

 Age & Games | | PF & Games 
|:-----------------------------------:|:-:|:-----------------------------------:|
![Pic 16](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/ExploratoryFeatures_XLabel%3DAge_YLabel%3DG.jpg)| | ![Pic 17](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/ExploratoryFeatures_XLabel%3DPF_YLabel%3DG.jpg)|

 PTS & Games | | TRB & Games 
|:-----------------------------------:|:-:|:-----------------------------------:|
![Pic 18](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/ExploratoryFeatures_XLabel%3DPTS_YLabel%3DG.jpg)| | ![Pic 19](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/ExploratoryFeatures_XLabel%3DTRB_YLabel%3DG.jpg)|
	
Initial Top 15 Features | | Final Top 10 Features 
|:-----------------------------------:|:-:|:-----------------------------------:|
![Pic 20](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Initial_Top_15_Features.jpg)|| ![Pic 21](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Final_Top_10_Features.jpg)|	

Final Confusion Matrix |  
|:-----------------------------------:|
![Pic 22](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/FinalConfusionMatrix.jpg)

# Presentation <a name="presentation"></a>
* Slides Presentations are drafted in Google Slides. 
* Content - The presentation outlines the project, including the following: 
	* Selected topic 
	* Reason why they selected their topic 
	* Description of their source of data 
	* Questions they hope to answer with the data 
	* Description of the data exploration phase of the project 
	* Description of the analysis phase of the project

(https://docs.google.com/presentation/d/1xHHqpMsB-wqEoGpUKD7ocdtU695N1SpS9atkVOunMoE/edit#slide=id.g11fae844228_2_85)

# Dashboard <a name="dashboard"></a>
* A blueprint for the dashboard is created and includes all of the following:
	* Storyboard on Google Slide(s) 
	* Description of the tool(s) that will be used to create final dashboard ✓ Description of interactive element(s)

Below is a Storyboard layouts and a Mockup layouts
## Storyboard and Page 1 - Player Information
![Pic 23](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/StoryboardPage1.jpg)

## Storyboard Page 2 - NBA Stats	
![Pic 24](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/StoryboardPage2.jpg)	

## Storyboard Page 3 - NBA News	
![Pic 25](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/StoryboardPage3.jpg)	
