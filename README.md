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
- Can you determine whether a NBA Player can be an AllStar based on their season statistics? In other words, is there a quantitative way to predict whether a player will be an AllStar?

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
NBA_All_Star_Players_All.csv | 943| 7
	
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
* Description of preliminary data preprocessing: 
We imported data from our AWS SQL database account, which had undergone an intensive ETL process. We then used the describe method in Python to analyze the central tendencies of key data features, specifically features that would be important to us later on for the supervised models (i.e., 10 of them). All features seem to have followed a normal distribution. Our analysis can be found in the "Explorartory_Analysis_Clean_Datasets.ipynb" file. We performed additional preprocessing of the data in the other jupyter notebook files that we produced for this project. All of them run the same code so if the reader will turn to the Features_Ranking_RandFrrst" file, you can see that we created data frame for all three tables used (seasons, players, and per_game) and merged them all together. From there, we separated the dataframe into two separate frames: feature set and target varaible. Our target variable was whether a player made it as an AllStar during a season while the features were the other 67 columns. For the feature set, we took out certain columns (like "id" and "team") that we thought would not be helfpul for the analysis. Afterwards, we then used the dummies variables to encode the position variable. Again this is seen in the "Features_Ranking_RandFrrst" file as well as the other 11 jupyter notebooks that we have posted. 
* Description of preliminary feature engineering
For the preliminary feature engineering, wesplit the remaining data set into X_train, X_test, y_train, and y_test. We did a 75%/25% split for testing and training sets for ALL FILES. Again if the reader scrolls down "Features_Ranking_RandFrrst", then you can see the code that we used to perform this task.  We then standardized the feature sets for both the training and testing sets. This was important because many of the values were different (heights, points, ages, etc.) and so we needed a way to normalize them so that the analysis would not be affected degrees of magnitude for certain variables (for instance, season points is in the 1000s for most players and so changes in that variable would have a more dominate effect on the target than changes in age which are in increments of 1 per change of season had). Finally, because this first random forrest model's confusion matrix showed signs of lopsided representation of non-All Starrs (i.e., NBA players who did not make the AllStar team), we had to create two separate notebooks for under- and over-sampling to do our best to counteract this effect. If you compare the confusion matrices of both notebooks, you can see that under-sampling performed better with accuracy and recall and so we went with this pre-processing method for ALL OF OUR SUPERVISED AND UNSUPERVISED MODELS.
* Preliminary feature selection
We did preliminary feature selection through the first three files we mentioned ("Features_Ranking_RandFrrst", "Features...UnderSample", and "Features..."Oversample) where we ranked the top features that provided the most explanatory value of the target variable, AllStars. If the reader scrolls down for each file, you can see the rankings and how some of them are different from one another. We did not settle on these rankings, however. From our udnerstanding, the math was not adequate enough and so we needed something more comprehensive and decided to use Principal Components Analysis, a features extraction method for reducing the features set. Please open both files "PCA_Initial" and "PCA_Final". PCA Initial takes our inital featrue set of about 67 columns and helps us reduce the number to 10. These ten features explain almost 80% fo the variation in the target variable.  We provided a chart showing this pehnomenon as well as a table with the cumulative variance ratios and explained variance ratios for each of the first top ten PCAs. The second file, "PCA_Final", helps us identify WHICH OF THE TEN FEATURES EXPLAINS MOST OF THE VARIATION OF THE TARGET VARIABLE. We provide a table and chart showing their relative importances within the notebook. The following features represent our top ten variables and are presented in the order of importance: 

1.) Age
2.) True Shooting %
3.) Games Played
4.) Defensive Rebounding rate %
5.) Player Efficiency Rating (PER)
6.) Games Started during the regular season
7.) Three points attempted rate
8.) Offensive Rebounding rate %
9.) Free Throw Rate
10.) Minutes Played

Finally, we performed a K-Means analysis to observe more of the behavior of our top ten features in order to gain better insights. Our work can be seen in the "K_Means_Final" file. An elbow curve showed that we needed to cluster the features (which we used the first two PCAs and not all ten of them) to two centroids. We graphed the results according to AllStars. The results showed two genuinely distinct clusters for All Stars and Non-All Stars. 

* Description of how data was split into training and testing sets 

Again, for ALL OF OUR ANALYSES, we split the data 75%/25% for training and testing data sets for our models. This occurred for both the unsupervised and supervised portions of our analyses. All models were undersampled during this process as well.

* Explanation of model choice, indluce benefits and limitations.
We underwent created five supervised models for our analyses:

1.) Logistical Regression
2.) Support Vector Machine
3.) Decision Tree
4.) Random Forest (with the top ten features this time)
5.) Boosting

We chose these five models because they were suitable for binary classification (Will this NBA player be an AllStar or not?). For each supervised model, we USED THE TOP TEN FEATURES ACCORDING TO OUR UNSUPERVISED MODELS. We produced confusion matrices for all five supervised models. The accuracies were around 91%, which was high, and the recall, was around 92%, which is also high. We chose recall over precision because we thought that minimizing mislabeling a NBA AllStar as a non-AllStar was more important than the other scenario (i.e., mislabeling a non-AllStar as an All-Star). Our logic for this decision lies in the fact that if the NBA were to hire us to plan for the next AllStar game and we had a high rate of mislabeling AllStars then we miss making the preparations necessary for that player to attend the game, which would anger fans and decrease viewership. 

You can see all model performances in each of their files as well as a summary of them in an image below. Though there were no major discrepancies amongst the models in their performances (except for decision tree maybe), we chose random forest again (but this time with the top ten features) because it had the highest accuracy (92%) and recall values (94%). Please note: there are two separate recall values for NBA AllStars and non-NBA AllStars. When we were previously discussing recall, we were referring to the recall for NBA AllStars. 

One of the benefits of using a random forest model is that it is based on a bagging algorithm and uses and Ensemble Learning technique, whihc menas it creates many trees on the subset of data and combines the output of all trees. This method helps reduce the overfitting problem that we mentioned earleir that we concerned about (because there are way more non-AllStars than AllStars, it would naturally be easier to predict the former than the later) as well as reducing the variance and imrpoving accuracy (which is high at 92%).

Another benefit is that non-linear parameters do not hinder the performance of a Random Forest, which means it can outperform other models. And finally, Random Forests are very robust against outliers which we are certain are contained within the feature set. 

Despite some of the benefits of the Random Forest model, there are limitations. One disadvantage is that the model is very complex by creating many trees which requries more computational power and resources. This might not be appropriate for every company that does not have the resoruces to perform this type of analysis. Finally, it exhibits a longer training period through all of the tree it creates and the votes that it counts to produce the outcomes. 

## PCA KMeans 
### Initial And Final
#### Sample structure of the Machine Learning Model <a name="sample-structure-of-the-machine-learning-model"></a> 
NBA Season Logistical Pg 1 | | NBA Season Logistical Pg 2
|:----------------------------------:|:-:|:-----------------------------------:|
![Pic 8](https://user-images.githubusercontent.com/93271297/159190111-5cf01063-2bc6-4839-b9fe-bdd9ccf34378.png)| | ![Pic 9](https://user-images.githubusercontent.com/93271297/159190153-32425c4e-221e-468c-9665-dc58fdd492c0.png)|
	
NBA Season Logistical Pg 3 | | NBA Season Logistical Pg 4
|:-----------------------------------:|:-:|:-----------------------------------:|
![Pic 10](https://user-images.githubusercontent.com/93271297/159190176-7d375dcb-13cc-4cc1-9978-e76102dca178.png)| | ![Pic 11](https://user-images.githubusercontent.com/93271297/159190207-e3ce6d97-3647-4617-ba3f-7baef91bcd9f.png)|

NBA Season Logistical Pg 5 | | NBA Season Logistical Pg 6
|:-----------------------------------:|:-:|:-----------------------------------:|
![Pic 12](https://user-images.githubusercontent.com/93271297/159190232-01de99a1-1447-4d68-9152-c59b9ee89493.png)| | ![Pic 13](https://user-images.githubusercontent.com/93271297/159190243-393add01-a1c6-4c2a-9837-fbef5f873a5c.png)|

### Additional Information on PCA KMeans
The first KMeans Code diagram below shows the code for fitting the PCA into KMeans. The second KMeans Code diagrams shows that we used Allstar as the predictor variable.
KMeans Code For Fitting the PCA | | KMeans Code Using Allstars
|:----------------------------------:|:-:|:-----------------------------------:|
![Pic 26](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/K_Means_Code.png)| | ![Pic 27](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/K_Means_Code2.png)|

KMeans Elbow Curve | | KMeans Graph
|:-----------------------------------:|:-:|:-----------------------------------:|
![Pic 28](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/K_Means_Elbow_Curve.png)| | ![Pic 29](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/K_Means_Graph.png)|

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
