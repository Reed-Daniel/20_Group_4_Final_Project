![Pic 0](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Dashboard/images/NBA_Greats.jpg)

# NBA Player Statistics & Performance Over the Course of the Modern NBA
# Group 4 Final Project
# **Table of Contents** #
1. [Topic](#topic)
1. [Reason for Selecting the Topic](#reason-for-selecting-the-topic)
1. [Source Data](#source-data)
1. [Questions to Answer](#questions-to-answer)
1. [Technologies Used & Tools](#technologies-used-&-tools)
1. [FSD & ERD](#fsd-&-erd)
    1. [High Level](#high-level)
    1. [NBA Stats Database](#nba-stats-database-erd)
    1. [Machine Learning ERD](#machine-learning-erd)
    1. [Supervised Model](#supervised-model)
    1. [Unsupervised Model](#unsupervised-model)
1. [Database Model](#database-model)
    1. [Database Schema EX](#database-schema-ex)
    1. [Sample Structure of the Database Model](#sample-structure-of-the-database-model)
    1. [ETL-Clean](#etl-clean)
1. [Machine Learning Model](#machine-learning-model)
    1. [Description of Preliminary Data Preprocessing](#description-of-premlimiary-data-preprocessing)
    1. [Description of Preliminary Feature Engineering](#description-of-preliminary-feature-engineering)
    1. [Preliminary Feature Selection](#preliminary-feature-selection)
    1. [Description of How Data Was Split Into Training & Testing Sets](#description-of-how-data-was-split-into-training-&-testing-sets)
    1. [Explanation of Model Choice, Indluce Benefits & Limitations](#explanation-of-model-choice,-indluce-benefits-&-limitations)
    1. [File Source](#file-source)
    1. [PCA KMeans](#pca-kmeans)
    1. [Additional Informataion on PCA](#additional-informataion-on-PCA)
    1. [Sample Structure of the Machine Learning Model](#sample-structure-of-the-machine-learning-model)
1. [Exploratory Analysis](#exploratory-analysis)
1. [Presentation](#presentation)
1. [Dashboard](#dashboard)
1. [Summary of the Findings](summary-of-the-findings)
1. [References](#references)

## Topic <a name="topic"></a>
* The relationship between NBA player statistics and performance over the course of the modern NBA

## Reason for Selecting Topic <a name="reason-for-selecting-the-topic"></a>
* We would like to explore statistical data to determine if the NBA has a base-line for it's athletes, how that base line weighs against the top performers throughout the decades, and if you can predict the number of games a player would play per season

## Source Data <a name="source-data"></a>
* Our source data will be taken from Kaggle and includes NBA Players Stats since 1950 in the form of csv files

File Name |Number of Rows|Number of Columns  
|:----------------------------------:|:-----------:|:---------:|
Player.csv | 3,922 | 8 |
Season_Stats.csv | 24,690 | 52 |
Player_Data.csv | 4,550 | 8 |
NBA_All_Star_Players_All.csv | 943| 7
	
* For the purpose of our analysis we will only focus on years 1980-present as that is when the "modern" NBA began 
  
File Name |Number of Rows|Number of Columns  
|:----------------------------------:|-----------:|---------:|
players_df.shape | 3,919 | 7 |
seasons_df.shape | 18,297 | 52 |
per_game_df.shape | 18,297 | 11 |

## Questions to Answer <a name="questions-to-answer"></a>
* Does the NBA look the same decade by decade in terms of performance?
* What does a prototypical player look like in each decade?
	* How has that changed over time?
* Can you determine whether a NBA Player can be an AllStar based on their season statistics? In other words, is there a quantitative way to predict whether a player will be an AllStar?

## Technologies Used & Tools <a name="technologies-used-&-tools"></a>
Systems | Tools 
|:--------------------------:|:---------------------------:|
Data Cleaning & Analysis | Pandas <br /> Google CoLab <br /> Plotly <br />  <MatPlotLibbr /> hvPlot <br /> NumPy <br /> Panda Pickle |
ERD | Lucid Charts <br /> Quick Database Diagrams <br /> Power BI |
Database | PgAdmin4 <br /> AWS |
Machine Learning | SciKitLearn <br /> SQLAlchemy <br /> Seaborn <br /> YAML <br /> Google CoLab <br /> Classification Report Imbalanced <br /> Imblearn <br /> MarkupSafe <br /> Psycopg2 <br /> Supervised Learning Model <br /> Confusion Matrix <br /> boto3 <br /> json |
Dashboard | HTML <br /> CSS <br /> JavaScript <br /> GitHub Pages <br /> S3 <br /> d3 <br /> Flask |

# FSD & ERD <a name="fsd-&-erd"></a>
## High Level <a name="high-level"></a>
![Pic 1](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/ERD/High_Level%20ERD_r1.jpg)

## NBA Stats Database ERD <a name="nba-stats-database-erd"></a>
![Pic 2](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/ERD/nba-db_schema.png)

### Database Schema EX <a name="database-schema-ex"></a>
Database Schema | 
|:-----------------------------------:| 
![Pic 3](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/database_schema_ex.jpg) |

## NBA Machine Learning FSD <a name="machine-learning-erd"></a>
### Supervised Model <a name="supervised-model"></a>
![Pic 4](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Supervised%20Learning%20Model%20Diagram.jpeg) | | ![Pic 22](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Supervised_Model_Performances.png)|

### Unsupervised Model <a name="unsupervised-model"></a>
![Pic 5](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Unsupervised%20Model.jpeg)

# Database Model <a name="database-model"></a>
## Sample Structure of the Database Model <a name= "sample-structure-of-the-database-model"><a/>
### NBA Database
* Team members present a fully integrated database.
* Database stores static data for use during the project 
* Database interfaces with the project in some format (e.g., scraping updates the database, or database connects to the model) 
* Includes at least two tables (or collections, if using MongoDB) 
* Includes at least one join using the database language (not including any joins in Pandas) 
* Includes at least one connection string (using SQLAlchemy or PyMongo) Note: If you use a SQL database, you must provide your ERD with relationships.

### ETL, Postgres, Amazon AWS <a name="etl-clean"></a>
* Merge players dataframe to csv file (File downloaded players_clean.csv)
* Modern Season Stats dataframe to csv file (File downloaded modern_season_stats_clean.csv)
* Per game stats dataframe to csv tild (File download per_game_stats_clean.csv)

5 steps: 	
* 1) Perform data cleaning and output ETL documents 
* 2) Load schema into Postgres via pgAdmin using NBA Stats Database ERD
* 3) Upload data into PostgreSQL database
* 4) Create AWS RDS and connect to PostgreSQL
* 5) Connect AWS RDS to Python with SQLAlchemy	
	
	
 (1) ETL Clean Data Ready For Export to Postgres | 
|:----------------------------------:|
![Pic 5](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/ETL_cleaned_ex.jpg)| 
	
Export from QuickDBD (https://www.quickdatabasediagrams.com/), linked to schema: (https://app.quickdatbasediarmas.com/#/D/47InBZ).  Note:  If you have used non-SQL datatypes in your design, you will have to change these here. 

(3a) Players  | 
|:----------------------------------:|
![Pic 9](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Postgres_players_ex.jpg)|
	
(3b) Players with position not null |	
|:----------------------------------:|	
![Pic 10](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Postgres_players2_ex.jpg)|	

(3c) Per-game Stats |
|:----------------------------------:| 
![Pic 9](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Postgres_per_game_stats_ex.jpg)|

(3d) Modern Season Stats |
|:----------------------------------:|
![Pic 10](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Postgres_mod_season_stats_ex.jpg)|
	
(3e) Modern Season Stats - Postgres Databse Table (No Joins)| 
|:------------------------------------------------------:|
![Pic 6](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Postgres_mod_season_stats_ex.jpg)| 

(3f) Modern Season Stats - Postgres Databse Table (Join 1 - Per Game Stats)| 
|:----------------------------------:|
![Pic 7](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Postgres_join1_ex.jpg)| 

(3g) Modern Season Stats - Postgres Databse Table (Join 2 - On Players Stats)|
|:----------------------------------:|
![Pic 8](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Postgres_join2_ex.jpg)|
	
(4a) Amazon RDS Overview | 
|:----------------------------------:|
![Pic 5](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/database_aws_ex.jpg)| 

(4b) Loading Postgres Data to AWS RDS | 
|:----------------------------------:|
![Pic 5](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Postgres_Data_Import_AWS.jpg)| 	


### NBA Database - SQLAlchemy
(5) NBA Database - SQLAlchemy |
|:-----------------------------------:| 
![Pic 3](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/nba-db_SQLAlchemy_ex.jpg) |
	
# Machine Learning Model <a name="machine-learning-model"></a>
## Description of preliminary data preprocessing.
	
We imported data from our AWS SQL database account, which had undergone an intensive ETL process. We then used the describe method in Python to analyze the central tendencies of key data features, specifically features that would be important to us later on for the supervised models (i.e., 10 of them). We will discuss in more detail later how we arrived from 71 explanatory features to 10. 
	
Initially, our ten features were the following for Phase II:
	
1.)	Age 
2.)	True Shooting % 
3.)	Games Played 
4.)	Defensive Rebounding rate % 
5.)	Player Efficiency Rating (PER) 
6.)	Games Started during the regular season 
7.)	Three points attempted rate 
8.)	Offensive Rebounding rate % 
9.)	Free Throw Rate 
10.)	Minutes Played
	
However, there was an error in how we performed the random forrest importance ranking process and the Principal Components Analysis (PCA). We erroneously did the PCA first and then performed the forrest ranking importance in Phase II. But upon further reading, the steps were supposed to be in the reverse order with random forest feature importance ranking performed first and then PCA done afterwards. 
	
After performing this portion of the machine learning correctly, we ended up with a new top ten feature set (which explained about 65% of the target variable’s variation):
	
1.)	Points per Game
2.)	Total Points
3.)	Field Goals
4.)	Free Throws
5.)	Free Throw Attempted
6.)	Field Goals Attempted
7.)	Minutes Played per Game
8.)	Value Over Replacement Player (VORP)
9.)	Win-Share
10.)	 Two Pointers Made
	
In the file called “Exploratory_Analysis_Final”, the reader can see that we analyzed whether all ten features followed  a normal distribution. Our conclusions were that they did not and so we had to standardized them in both the unsupervised and supervised models. We had to combine two tables from our SQL database: “modern_season_stats” and “per_game_stats”. We performed a left join on both of them for the exploratory analysis and for the unsupervised and supervised models as well. 
	
Finally, we created a jupyter notebook called “baseline_analysis” where we used all 71 features and created 71 PCAs and performed a random forest analysis on them in order to understand what a baseline model would look like. When you look through the file you can see that the model is highly accurate at 92% with a recall value of 95% and an f-1 score of 55%. We used this as the baseline when we performed our supervised learning in order to improve the accuracy ratings of the other models. 


## Description of preliminary feature engineering and feature selection, including decision-making process.
	
As previously mentioned, we reversed two of the main processes in feature engineering and selection in Phase III and did them in the following order: 1.) Random Forest Features Importance Ranking, 2.) Princpal Components Analysis. After doing PCA, we then proceeded to perform K-Means clustering. Our work is in the following jupyter notebooks: “Features_Ranking_Final” and “PCA_KMeans_Redo_Final”. The first file denotes our features importance ranking. Again, we went from 71 features explaining the variation of the target variable, whether the NBA player was an All-Star or not, to 10 features explain about 64% of the variation of the target variable. 
	
If the reader proceeds to the second jupyter notebook, “PCA_KMeans_Redo_Final”, he can see our Principal Components Analysis and K-Means clustering results. We started with a PCA of three for all ten of our top ten features. PCA1 explained about 88% of the variation of the target variable, leaving PCAs 2 & 3 to explain 4.6% and 2.9% of the variation in the target variable. As a result, we went back and re-performed the PCA with two components instead of three. The rest of our results can be seen in the notebook. 
	
Finally, we did a K-Means clustering. Our elbow curve suggested we select a K=2. After that  we matched PCAs 1 & 2 against one another in a 2-D scatter plot with each point representing whether a player was an NBA All Star or not. As you can see, our analysis form two decently distinct clusters.


## Description of how data was split into training and testing sets.
	
Just like we did in Phase II, we split the sets into 75% training and 25% testing. This was after we undersampled the data in order to address overfitting issues inherent within the data (i.e., there is significant overrepresentation of non-NBA AllStars than NBA AllStars). So the undersampling significantly reduced the size of the sets in order to equalize the amount of representation between AllStar and non-AllStars within the target variable. 

## Explanation of model choice, including limitations and benefits.
In Phase II, we went with Random Forest, however, due to changes in the ten features that we used to apply to the supervised models, we went with Logistical Regression because it had the best accuracy metrics of all five models deployed. However, comparing the Logistical Regression’s confusion matrix with that of the Baseline model, the accuracy metrics were hardly different at all. 
	
Still, there were benefits with utilizing the Logistical Regression model. According to research, logistical regression models are easier to implement, interpret, and are more efficient to train than most other supervised machine learning models. In addition, it makes no assumptions about the distribution of classes in the feature space, which if we did not normalize the data, would have worked to our advantage. However, we did normalize the data and so this was not a concern for our project. 
	
There are disadvantages though to utilizing a logistical regression model. A main problem is that the model constructs linear boundaries when a feature may not follow a linear relationship with the target variable. 
 
## If changes occurred between the Segment 2 and Segment 3 deliverables

Again, we reordered the steps from previously doing the PCA first and then the Features Ranking second to reversing these steps in order to acquire the correct ten features for our model. The ten features we have for Phase III are different from the ones in Phase II so we reran all the unsupervised and supervised models as  a result. This time, Logistical Regression performed the best and so we went with this model instead of Random Forest, which is what we went with last time. 
	
## Description of how they have trained the model thus far, and any additional training that will take place
	
We will try to change the training/testing variables from the original 75%/25% mode to see if that improves the accuracy scores. We want to avoid making the model more complex because that will create additional overfitting problems. 

## Description of current accuracy score
	
The Logistical Regression model produced an accuracy rate of 92.2%, a recall for AllStars of 95%, and F-1 score of 55%. These were essentially the same as the scores for the baseline. 

## Additionally, the model obviously addresses the question or problem the team is solving.
	
The model seems to provide a decent attempt at predicting whether an NBA player would be an AllStar if he achieves certain milestones quantitatively. The actual selection process for selecting an NBA AllStar is very subjective with fans voting for their favorite players as the starters and then coaches and players selecting the back-up players. Even though they may vote based on player stats, there is still a subjective element to their decisions which makes it hard for our model to accurately predict an AllStar. 



## File Source <a name="file-source"></a>
1. Baseline_Analysis
2. Boosting
3. Decision_Tree
4. Exploratory_Analysis_Final
5. Features_Ranking_Final
6. PCA_KMeans_Redo_Final
7. Random_Forrest_Complete
8. Logistical_Regression
9. Support_Vector_Machine

## Phase III Images
### Baseline Analysis

	
	
## Phase II Images 
### Initial And Final
#### Sample structure of the Machine Learning Model <a name="sample-structure-of-the-machine-learning-model"></a> 
NBA Season Logistical Pg 1 | | NBA Season Logistical Pg 2
|:----------------------------------:|:-:|:-----------------------------------:|
![Pic 17](https://user-images.githubusercontent.com/93271297/159190111-5cf01063-2bc6-4839-b9fe-bdd9ccf34378.png)| | ![Pic 18](https://user-images.githubusercontent.com/93271297/159190153-32425c4e-221e-468c-9665-dc58fdd492c0.png)|
	
NBA Season Logistical Pg 3 | | NBA Season Logistical Pg 4
|:-----------------------------------:|:-:|:-----------------------------------:|
![Pic 19](https://user-images.githubusercontent.com/93271297/159190176-7d375dcb-13cc-4cc1-9978-e76102dca178.png)| | ![Pic 20](https://user-images.githubusercontent.com/93271297/159190207-e3ce6d97-3647-4617-ba3f-7baef91bcd9f.png)|

NBA Season Logistical Pg 5 | | NBA Season Logistical Pg 6
|:-----------------------------------:|:-:|:-----------------------------------:|
![Pic 21](https://user-images.githubusercontent.com/93271297/159190232-01de99a1-1447-4d68-9152-c59b9ee89493.png)| | ![Pic 22](https://user-images.githubusercontent.com/93271297/159190243-393add01-a1c6-4c2a-9837-fbef5f873a5c.png)|

### Additional Information on PCA <a name="additional-informataion-on-PCA"></a>
The first KMeans Code diagram below shows the code for fitting the PCA into KMeans. The second KMeans Code diagrams shows that we used Allstar as the predictor variable.
KMeans Code For Fitting the PCA | | KMeans Code Using Allstars
|:----------------------------------:|:-:|:-----------------------------------:|
![Pic 23](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/K_Means_Code.png)| | ![Pic 24](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/K_Means_Code2.png)|

KMeans Elbow Curve | PCA All PCA Curve | KMeans Graph
|:-----------------------------------:|:-------------------------------------:|:-------------------------------------:|
![Pic 25](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/K_Means_Elbow_Curve.png) | ![Pic 26](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/PCA_All_PCA_Curve.png)| ![Pic 30](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/K_Means_Graph.png)|

PCA Ten Confusion Matrix | PCA Ten Code | PCA Ten Code2
|:-----------------------------------:|:-------------------------------------:|:-------------------------------------:|
![Pic 31](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/PCA_Ten_CnfsnMtrx.png) | ![Pic 27](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/PCA_Ten_Code.png)| ![Pic 28](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/PCA_Ten_Code2.png)|
	
PCA Ten Graph | PCA Ten Importance | PCA Ten Table
|:-----------------------------------:|:-------------------------------------:|:-------------------------------------:|
![Pic 29](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/PCA_Ten_Graph.png) | ![Pic 30](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/PCA_Ten_Importance.png)| ![Pic 31](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/PCA_Ten_Table.png)|
	
# Exploratory Analysis <a name="exploratory-analysis"></a>
3PA & Games | | Assists & Games 
|:-----------------------------------:|:-:|:-----------------------------------:|
![Pic 32](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/ExploratoryFeatures_XLabel%3D3PA_YLabel%3DG.jpg)| | ![Pic 33](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/ExploratoryFeatures_XLabel%3DAST_YLabel%3DG.jpg)|

 Age & Games | | PF & Games 
|:-----------------------------------:|:-:|:-----------------------------------:|
![Pic 34](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/ExploratoryFeatures_XLabel%3DAge_YLabel%3DG.jpg)| | ![Pic 35](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/ExploratoryFeatures_XLabel%3DPF_YLabel%3DG.jpg)|

 PTS & Games | | TRB & Games 
|:-----------------------------------:|:-:|:-----------------------------------:|
![Pic 36](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/ExploratoryFeatures_XLabel%3DPTS_YLabel%3DG.jpg)| | ![Pic 37](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/ExploratoryFeatures_XLabel%3DTRB_YLabel%3DG.jpg)|
	
Initial Top 15 Features | | Final Top 10 Features 
|:-----------------------------------:|:-:|:-----------------------------------:|
![Pic 38](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Initial_Top_15_Features.jpg)| | ![Pic 39](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Final_Top_10_Features.jpg)|	

Final Confusion Matrix |  
|:-----------------------------------:|
![Pic 40](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/FinalConfusionMatrix.jpg)|

### Support Vector Machine
Spitting into Train and Test Sets
Support Vector Machine |  
|:-----------------------------------:|
![Pic 41](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/SVM_Code.png)|
	
Boosting Code | 
| :-----------------------------------:|
![Pic 42](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Boosting_Code.png)|

### Random Forest 
Spliting into Train and Test Sets
Randon Forest Undersample Code  | Randon Forest Undersampling Complete
|:----------------------------------:|:----------------------------------:|
![Pic 43](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/RndFrrst_Undersample_Code.png)| ![Pic 44](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Rand_Frrst_Complete.png)|

Randon Forest Undersample Confusion Matrix |  
|:-----------------------------------:|
![Pic 45](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/RndFrrst_Undersample_ConfMtrx.png)|

Randon Forest Undersample Graph  | Randon Forest Undersample Top Features
|:----------------------------------:|:----------------------------------:|
![Pic 46](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/RndFrrst_Undersample_Graph.png)| ![Pic 47](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/RndFrrst_Undersample_TopFeatures.png)|

Randon Forest Undersample Confusion Matrix |  
|:-----------------------------------:|
![Pic 48](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/RndFrrst_Undersample_ConfMtrx.png)|	

Supervised Model Performance |
|:-----------------------------------:|
![Pic 49](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Supervised_Model_Performances.png)|	

Exploratory Analysis (Set 1)  |
|:-----------------------------------:|
![Pic 50](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Exploratory_Analysis_Set1.png)|		

Exploratory Analysis (Set 2)  |
|:-----------------------------------:|
![Pic 51](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Exploratory_Analysis_Set2.png)|	
	
Exploratory Analysis (Set 3)  |
|:-----------------------------------:|
![Pic 52](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Exploratory_Analysis_Set3.png)|
	
# Presentation <a name="presentation"></a>
* Slides Presentations are drafted in Google Slides. 
* Content - The presentation outlines the project, including the following: 
	* Selected topic 
	* Reason why they selected their topic 
	* Description of their source of data 
	* Questions they hope to answer with the data 
	* Description of the data exploration phase of the project 
	* Description of the analysis phase of the project

(https://docs.google.com/presentation/d/1xHHqpMsB-wqEoGpUKD7ocdtU695N1SpS9atkVOunMoE/edit#slide=id.g11fae844228_2_68)

# Dashboard <a name="dashboard"></a>
* A blueprint for the dashboard is created and includes all of the following:
	* Storyboard on Google Slide(s) 
	* Description of the tool(s) that will be used to create final dashboard 
	Description of interactive element(s)

Below is a Storyboard layouts and a Mockup layouts
## Storyboard and Page 1 
![table_story](https://user-images.githubusercontent.com/93271297/162647780-cd837c55-d2c8-4a7a-b295-c49571e11c2a.png)

![slider_story](https://user-images.githubusercontent.com/93271297/162647856-44544a74-d9fc-411c-ac88-d3c339af448e.png)

## Storyboard Page 2 	
![project_story](https://user-images.githubusercontent.com/93271297/162647876-9edd6639-6b8b-43ea-8eff-087195ed9881.png)


## Storyboard Page 3 
![team_story](https://user-images.githubusercontent.com/93271297/162647867-9191a039-257a-489c-820b-8562abaae55b.png)


# Summary of the Findings <a name="summary-of-the-findings"></a>
* Does the NBA look the same decade by decade in terms of performance? <br />
	* <br />
* What does a prototypical player look like in each decade?<br />
	* <br />
* How has that changed over time?<br />
	* <br />
* Can you predict whether an NBA player can be an All-Star?<br />
	* <br />
* What are the most important stats in terms of determining an NBA All-Star?<br />
	* <br />

# References <a name="references"></a>
* Kaggle - NBA Game Data - Players.csv <br />
	(https://www.kaggle.com/datasets/nathanlauga/nba-games?select=players.csv&msclkid=1ac414e3b79411eca127c4f5fc6f0cf5)
* Kaggle - Python · NBA Players Seasons Stats since 1950 - season-stats.csv <br />
	(https://www.kaggle.com/code/samlow1/season-stats/data)

