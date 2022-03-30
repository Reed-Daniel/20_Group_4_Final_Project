# NBA Player Statistics & Performance Over the Course of the Modern NBA
# Group 4 Final Project
# **Table of Contents** #
1. [Topic](#topic)
1. [Reason for Selecting the Topic](#reason-for-selecting-the-topic)
1. [Source](#source)
1. [Questions to Answer](#questions-to-answer)
1. [Project & Communication Protocols](#project-communication-protocols)
1. [Tools](#tools)
1. [ERD](#erd)
    1. [High Level](#high-level)
    1. [NBA Stats Database](#nba-stats-database-erd)
    1. [Machine Learning ERD](#machine-learning-erd)
1. [Database Model](#database-model)
    1. [Sample Structure of the Database Model](#sample-structure-of-the-database-model)
1. [Machine Learning Model](#machine-learning-model)
    1. [Sample Structure of the Machine Learning Model](#sample-structure-of-the-machine-learning-model)
1. [Presentation](#presentation)
1. [Dashboard](#dashboard)

## Topic <a name="topic"></a>
- The relationship between NBA player statistics and performance over the course of the modern NBA

## Reason for Selecting Topic <a name="reason-for-selecting-the-topic"></a>
- We would like to explore statistical data to determine if the NBA has a base-line for it's athletes, how that base line weighs against the top performers throughout the decades, and if you can predict the number of games a player would play per season

## Questions to Answer <a name="questions-to-answer"></a>
- Does the NBA look the same decade by decade in terms of performance?
- What does a prototypical player look like in each decade?
	- How has that changed over time?
- Can you predict the number of games a player will play in a season based on their statistics?
	- Does decade have an impact of number of games played?

## Project and Communication Protocols <a name="project-communication-protocols"></a>
- Our group maintains a steady flow of communication through Slack and our Teams page to stay updated on the status of the project deliverables as well as to coordinate additional meetings outside of class time. 

Responsibility Legend|Symbol|Team Member|System|Phase  
|:----------------------------------:|:--:|:--------------------:|:-----------------------:|:-----:|
The team member in the square role will be responsible for the respository | □ | K. McClelland | GitHub <br /> Teams <br /> Calendar <br /> | I & II |
The member in the triangle role will create a mockup of a machine learning model.  This can even be a diagram that explains how it will work concurrently with the rest of the project steps | ∆ | S. Crimi | ML | I & II |
The member in the circle role will create a mockup of a database with a set of sample data, or even fabricated data.  This will ensure the database will work seamlessly with the rest of the project | ○ | J. Klein | Database | I & II |
The member in the X role will decide which technologies will be used for each step of the project | X | S. Crimi <br /> J. Klein <br /> R. Daniel <br /> | ML <br /> Database <br /> Dashboard <br />| I & II <br /> I & II <br /> II |

## Source Data <a name="source"></a>
- Our source data will be taken from Kaggle and includes NBA Players Stats since 1950 in the form of csv files

File Name |Number of Rows|Number of Columns  
|:----------------------------------:|:-----------:|:---------:|
Player.csv | XXXXXX | XXXXXX |
Season_Stats.csv | XXXXXX | XXXXXX |
Player_Data.csv | XXXXXX | XXXXXX |
	
- For the purpose of our analysis we will only focus on years 1980-present as that is when the "modern" NBA began 
  
File Name |Number of Rows|Number of Columns  
|:----------------------------------:|:-----------:|:---------:|
Player.csv | XXXXXX | XXXXXX |
Season_Stats.csv | XXXXXX | XXXXXX |
Player_Data.csv | XXXXXX | XXXXXX |

## Tools <a name="tools"></a>
Systems | Tools 
|:--------------------------:|:---------------------------:|
Data Cleaning & Analysis | Pandas <br /> Numpy <br /> MatPlotLib|
ERD | Power BI <br /> Lucid Charts <br /> Quick Database Diagrams |
Database | PgAdmin4 <br /> AWS |
Machine Learning | SciKitLearn <br /> Google CoLab <br /> Supervised Learning Model |
Dashboard | HTML <br /> CSS <br /> JavaScript <br /> Tableau <br /> GitHub Pages |

# FSD & ERD <a name="erd"></a>
## High Level <a name="high-level"></a>
![Pic 1](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/ERD/High_Level%20ERD_r1.jpg)

## NBA Stats Database ERD <a name="nba-stats-database-erd"></a>
![Pic 2](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/ERD/NBA_Stats_DB.png)

## NBA Machine Learning FSD <a name="machine-learning-erd"></a>
### Supervised Model
![Pic 3](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/ERD/SupervisedModelDiagram.jpg)

### Unservised Model
![Pic 4](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/ERD/UnsupervisedModelDiagram.jpg)

# Database Model <a name="database-model"></a>
## Sample Structure of the Database Model <a name= "sample-structure-of-the-database-model"><a/>
### NBA Database
<p align="center">
<img width="600" alt="ERD_Mock_Data_1" src="https://user-images.githubusercontent.com/93271297/159188954-71be3a97-d7c8-4d2e-b09a-dad4d564d98f.jpeg">
	
<img width="600" alt="ERD_Mock_Data_2" src="https://user-images.githubusercontent.com/93271297/159188958-d5358084-fa24-4f86-954e-b747a3b06b3a.jpeg">
	
<img width="600" alt="ERD_Mock_Data_3" src="https://user-images.githubusercontent.com/93271297/159188966-7e0f4fac-24f3-40bb-9e2b-3e48523f1c4a.jpeg">
<p>

# Machine Learning Model <a name="machine-learning-model"></a>
## Sample structure of the Machine Learning Model <a name="sample-structure-of-the-machine-learning-model"></a> 
<p align="center">
<img width="500" alt="nba_season_logistical_pg1" src="https://user-images.githubusercontent.com/93271297/159190111-5cf01063-2bc6-4839-b9fe-bdd9ccf34378.png">
<img width="500" alt="nba_season_logistical_pg2" src="https://user-images.githubusercontent.com/93271297/159190153-32425c4e-221e-468c-9665-dc58fdd492c0.png">
<img width="500" alt="nba_season_logistical_pg3" src="https://user-images.githubusercontent.com/93271297/159190176-7d375dcb-13cc-4cc1-9978-e76102dca178.png">
<img width="500" alt="nba_season_logistical_pg4" src="https://user-images.githubusercontent.com/93271297/159190207-e3ce6d97-3647-4617-ba3f-7baef91bcd9f.png">
<img width="500" alt="nba_season_logistical_pg5" src="https://user-images.githubusercontent.com/93271297/159190232-01de99a1-1447-4d68-9152-c59b9ee89493.png">
<img width="500" alt="nba_season_logistical_pg6" src="https://user-images.githubusercontent.com/93271297/159190243-393add01-a1c6-4c2a-9837-fbef5f873a5c.png">
<p>

# Presentation <a name='presentation"></a>
![Pic 5](https://docs.google.com/presentation/d/1xHHqpMsB-wqEoGpUKD7ocdtU695N1SpS9atkVOunMoE/edit#slide=id.g11fae844228_2_85)

# Dashboard <a name="dashboard"></a>
