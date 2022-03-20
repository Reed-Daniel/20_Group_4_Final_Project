-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/47InBZ
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


-- Players table
CREATE TABLE "players" (
    "players" varchar   NOT NULL,
    "Player" varchar   NOT NULL,
    "height" float   NOT NULL,
    "weight" float   NOT NULL,
    "id" INT   NOT NULL,
    CONSTRAINT "pk_players" PRIMARY KEY (
        "id"
     )
);

-- Player_data table
CREATE TABLE "player_data" (
    "Name" varchar   NOT NULL,
    "year_start" date   NOT NULL,
    "year_end" date   NOT NULL,
    "position" varchar   NOT NULL,
    "height" float   NOT NULL,
    "weight" float   NOT NULL,
    "birth_date" date   NOT NULL,
    "id" INT   NOT NULL,
    CONSTRAINT "pk_player_data" PRIMARY KEY (
        "id"
     )
);

-- modern_season_stats table
CREATE TABLE "modern_season_stats" (
    "Year" INT   NOT NULL,
    "Player" varchar   NOT NULL,
    "Position" varchar   NOT NULL,
    "Age" float   NOT NULL,
    "Team" varchar   NOT NULL,
    "G" float   NOT NULL,
    "GS" float   NOT NULL,
    "MP" float   NOT NULL,
    "PER" float   NOT NULL,
    "TS_Percent" float   NOT NULL,
    "3PAr" float   NOT NULL,
    "FTr" float   NOT NULL,
    "ORB%" float   NOT NULL,
    "DRB%" float   NOT NULL,
    "TRB%" float   NOT NULL,
    "AST%" float   NOT NULL,
    "STL%" float   NOT NULL,
    "BLK%" float   NOT NULL,
    "TOV%" float   NOT NULL,
    "USG%" float   NOT NULL,
    "OWS" float   NOT NULL,
    "DWS" float   NOT NULL,
    "WS" float   NOT NULL,
    "WS/48" float   NOT NULL,
    "OBPM" float   NOT NULL,
    "DBPM" float   NOT NULL,
    "BPM" float   NOT NULL,
    "VORP" float   NOT NULL,
    "FG" float   NOT NULL,
    "FGA" float   NOT NULL,
    "FG%" float   NOT NULL,
    "3P" float   NOT NULL,
    "3PA" float   NOT NULL,
    "3P%" float   NOT NULL,
    "2P" float   NOT NULL,
    "2PA" float   NOT NULL,
    "2P%" float   NOT NULL,
    "eFG%" float   NOT NULL,
    "FT" float   NOT NULL,
    "FTA" float   NOT NULL,
    "FT%" float   NOT NULL,
    "ORB" float   NOT NULL,
    "DRB" float   NOT NULL,
    "TRB" float   NOT NULL,
    "AST" float   NOT NULL,
    "STL" float   NOT NULL,
    "BLK" float   NOT NULL,
    "TOV" float   NOT NULL,
    "PF" float   NOT NULL,
    "PTS" float   NOT NULL,
    "ID" INT   NOT NULL,
    CONSTRAINT "pk_modern_season_stats" PRIMARY KEY (
        "ID"
     )
);

ALTER TABLE "players" ADD CONSTRAINT "fk_players_id" FOREIGN KEY("id")
REFERENCES "player_data" ("id");

ALTER TABLE "player_data" ADD CONSTRAINT "fk_player_data_id" FOREIGN KEY("id")
REFERENCES "modern_season_stats" ("ID");

ALTER TABLE "modern_season_stats" ADD CONSTRAINT "fk_modern_season_stats_ID" FOREIGN KEY("ID")
REFERENCES "players" ("id");

