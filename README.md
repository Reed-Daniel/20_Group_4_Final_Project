# NBA Player Statistics & Performance Over the Course of the Modern NBA
# Group 4 Final Project
# **Table of Contents** #
1. [Topic](#topic)
1. [Reason for Selecting the Topic](#reason-for-selecting-the-topic)
1. [Source Data](#source-data)
1. [Questions to Answer](#questions-to-answer)
1. [Project & Communication Protocols](#project-communication-protocols)
1. [Technologies Used & Tools](#technologies-used-&-tools)
   1. [Technology Used](#technology-used)
   1. [Tools](#tools)
1. [FSD & ERD](#fsd-&-erd)
    1. [High Level](#high-level)
    1. [NBA Stats Database](#nba-stats-database-erd)
    1. [Machine Learni	ng ERD](#machine-learning-erd)
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
    2. [PCA KMeans](#pca-kmeans)
    3. [Additional Informataion on PCA](#additional-informataion-on-PCA)
    4. [Sample Structure of the Machine Learning Model](#sample-structure-of-the-machine-learning-model)
1. [Exploratory Analysis](#exploratory-analysis)
1. [Presentation](#presentation)
1. [Dashboard](#dashboard)

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

## Technologies Used & Tools <a name="technologies-used-&-tools"></a>
### Technologies Used <a name="technology-used"></a>
#### Data Clean & Analysis
* Pandas will be used to clean and perform exploratory analysis
* Other Python dependencies like Numpy, Plotly, hvplot, MatPlotLib will be imported as needed to assist in our data cleaning

#### Database Storage
* PostgreSQL is where we will be storing our database

#### Machine Learning
* We used PowerBi for our preliminary data inspection to assist in determining our input variables and our desired output
* SciKitLearn library will be used to create a classifier
	* Balanced_accuracy_score
	* Confusion_matrix
	* Classification_report_imbalanced
* Tensorflow

#### Dashboard
* The dashboard will be comprised of HTML, CSS, and JavaScript components to create an interactive dashboard allowing users to select player information from drop downs fields
* Results and visualizations will be displayed on Github pages and a Tableau dashboard if further storytelling is needed  

### Tools <a name="tools"></a>
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

## NBA Stats Database ERD <a name="nba-stats-database-erd"></a>
![Pic 2](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/ERD/nba-db_schema.png)

### Database Schema EX <a name="database-schema-ex"></a>
Database Schema | 
|:-----------------------------------:| 
![Pic 3](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/database_schema_ex.jpg) |

## NBA Machine Learning FSD <a name="machine-learning-erd"></a>
### Supervised Model <a name="supervised-model"></a>
Supervised Model | Supervised Model Performance |
|:-----------------------------------:| |:-----------------------------------:|
![Pic 4](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/ERD/SupervisedModelDiagram.jpg) | | ![Pic 22](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Supervised_Model_Performances.png)|

### Unsupervised Model <a name="unsupervised-model"></a>
![Pic 5](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/ERD/UnsupervisedModelDiagram.jpg)

# Database Model <a name="database-model"></a>
## Sample Structure of the Database Model <a name= "sample-structure-of-the-database-model"><a/>
### NBA Database
* Team members present a fully integrated database.
* Database stores static data for use during the project 
* Database interfaces with the project in some format (e.g., scraping updates the database, or database connects to the model) 
* Includes at least two tables (or collections, if using MongoDB) 
* Includes at least one join using the database language (not including any joins in Pandas) 
* Includes at least one connection string (using SQLAlchemy or PyMongo) Note: If you use a SQL database, you must provide your ERD with relationships.

### ETL Clean <a name="etl-clean"></a>
* Merge players dataframe to csv file (File downloaded players_clean.csv)
* Modern Season Stats dataframe to csv file (File downloaded modern_season_stats_clean.csv)
* Per game stats dataframe to csv tild (File download per_game_stats_clean.csv)

ETL Clean EX | 
|:----------------------------------:|
![Pic 6](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/ETL_cleaned_ex.jpg)| 
	
Export from QuickDBD (https://www.quickdatabasediagrams.com/), linked to schema: (https://app.quickdatbasediarmas.com/#/D/47InBZ).  Note:  If you have used non-SQL datatypes in your design, you will have to change these here. 

Amazon RDS | 
|:----------------------------------:|
![Pic 7](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/database_aws_ex.jpg)| 

Postgres Data Import AWS | 
|:----------------------------------:|
![Pic 8](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Postgres_Data_Import_AWS.jpg)| 

Modern Season Stats - Postgres Databse Table (No Joins)| 
|:------------------------------------------------------:|
![Pic 9](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Postgres_mod_season_stats_ex.jpg)| 

Modern Season Stats - Postgres Databse Table (Join 1 - Per Game Stats)| 
|:----------------------------------:|
![Pic 10](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Postgres_join1_ex.jpg)| 

Modern Season Stats - Postgres Databse Table (Join 2 - On Players Stats)|
|:----------------------------------:|
![Pic 11](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Postgres_join2_ex.jpg)|

Modern Game Stats |
|:----------------------------------:| 
![Pic 12](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Postgres_per_game_stats_ex.jpg)|

Modern Season Stats |
|:----------------------------------:|
![Pic 13](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Postgres_mod_season_stats_ex.jpg)|
	
Players  | 
|:----------------------------------:|
![Pic 14](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Postgres_players_ex.jpg)|
	
Players with position not null |	
|:----------------------------------:|	
![Pic 15](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/Postgres_players2_ex.jpg)|	

### NBA Database - SQLAlchemy
NBA Database - SQLAlchemy |
|:-----------------------------------:| 
![Pic 16](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/nba-db_SQLAlchemy_ex.jpg) |
	
# Machine Learning Model <a name="machine-learning-model"></a>
## Description of preliminary data preprocessing <a name="description-of-premlimiary-data-preprocessing"></a>
We imported data from our AWS SQL database account, which had undergone an intensive ETL process. We then used the describe method in Python to analyze the central tendencies of key data features, specifically features that would be important to us later on for the supervised models (i.e., 10 of them). All features seem to have followed a normal distribution. Our analysis can be found in the "Explorartory_Analysis_Clean_Datasets.ipynb" file. We performed additional preprocessing of the data in the other jupyter notebook files that we produced for this project. All of them run the same code so if the reader will turn to the Features_Ranking_RandFrrst" file, you can see that we created data frame for all three tables used (seasons, players, and per_game) and merged them all together. From there, we separated the dataframe into two separate frames: feature set and target varaible. Our target variable was whether a player made it as an AllStar during a season while the features were the other 67 columns. For the feature set, we took out certain columns (like "id" and "team") that we thought would not be helfpul for the analysis. Afterwards, we then used the dummies variables to encode the position variable. Again this is seen in the "Features_Ranking_RandFrrst" file as well as the other 11 jupyter notebooks that we have posted. 

## Description of preliminary feature engineering <a name="description-of-preliminary-feature-engineering"></a>
For the preliminary feature engineering, wesplit the remaining data set into X_train, X_test, y_train, and y_test. We did a 75%/25% split for testing and training sets for ALL FILES. Again if the reader scrolls down "Features_Ranking_RandFrrst", then you can see the code that we used to perform this task.  We then standardized the feature sets for both the training and testing sets. This was important because many of the values were different (heights, points, ages, etc.) and so we needed a way to normalize them so that the analysis would not be affected degrees of magnitude for certain variables (for instance, season points is in the 1000s for most players and so changes in that variable would have a more dominate effect on the target than changes in age which are in increments of 1 per change of season had). Finally, because this first random forrest model's confusion matrix showed signs of lopsided representation of non-All Starrs (i.e., NBA players who did not make the AllStar team), we had to create two separate notebooks for under- and over-sampling to do our best to counteract this effect. If you compare the confusion matrices of both notebooks, you can see that under-sampling performed better with accuracy and recall and so we went with this pre-processing method for ALL OF OUR SUPERVISED AND UNSUPERVISED MODELS.

## Preliminary feature selection<a name="preliminary-feature-selection"></a>
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

## Description of how data was split into training and testing sets <a name="description-of-how-data-was-split-into-training-&-testing-sets"></a>

Again, for ALL OF OUR ANALYSES, we split the data 75%/25% for training and testing data sets for our models. This occurred for both the unsupervised and supervised portions of our analyses. All models were undersampled during this process as well.

## Explanation of model choice, indluce benefits and limitations <a name="explanation-of-model-choice,-indluce-benefits-&-limitations"></a>
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

## File Source <a name="file-source"></a>
1. Features_Ranking RandFrrst.ipynb
2. Features_Ranking_RandFrrst_OverSample.ipynb
3. Features_Ranking_RandFrrst_UnderSample.ipynb
4. K_Means_Final.ipynb
5. Logistical_Regression.ipynb
6. PCA_Final.ipynb
7. PCA_Initial.ipynb
8. Random_Forrest_Complete.ipynb
9. Support_Vector_Machine.ipynb
10. Decision_Tree.ipynb
11. Exploratory_Analysis_Clean_Datasets.ipynb
12. Boosting.ipynb

## PCA KMeans <a name="pca-kmeans"></a> 
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

(https://docs.google.com/presentation/d/1xHHqpMsB-wqEoGpUKD7ocdtU695N1SpS9atkVOunMoE/edit#slide=id.g11fae844228_2_85)

# Dashboard <a name="dashboard"></a>
* A blueprint for the dashboard is created and includes all of the following:
	* Storyboard on Google Slide(s) 
	* Description of the tool(s) that will be used to create final dashboard ✓ Description of interactive element(s)

Below is a Storyboard layouts and a Mockup layouts
## Storyboard and Page 1 - Player Information
![Pic 53](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/StoryboardPage1.jpg)

## Storyboard Page 2 - NBA Stats	
![Pic 54](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/StoryboardPage2.jpg)	

## Storyboard Page 3 - NBA News	
![Pic 55](https://github.com/krmcclelland/20_Group_4_Final_Project/blob/main/Images/StoryboardPage3.jpg)	
