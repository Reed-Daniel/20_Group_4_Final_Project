-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- Link to schema: https://app.quickdatabasediagrams.com/#/d/47InBZ
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.


-- Players table
CREATE TABLE "players" (
    "Player" varchar   NOT NULL,
    "height" int   NOT NULL,
    "weight" int   NOT NULL,
    "born" int   NOT NULL,
    CONSTRAINT "pk_players" PRIMARY KEY (
        "Player"
     )
);

-- Player_data table
CREATE TABLE "player_data" (
    "name" varchar   NOT NULL,
    "year_start" int   NOT NULL,
    "year_end" int   NOT NULL,
    "position" varchar   NOT NULL,
    "height" varchar   NOT NULL,
    "height(inches)" int   NOT NULL,
    "weight" int   NOT NULL,
    "birth_date" varchar,
    "college" varchar,
    CONSTRAINT "pk_player_data" PRIMARY KEY (
        "name"
     )
);

-- modern_season_stats table
CREATE TABLE "modern_season_stats" (
    "Year" float   NOT NULL,
    "Player" varchar   NOT NULL,
    "Position" varchar   NOT NULL,
    "Age" int   NOT NULL,
    "Team" varchar   NOT NULL,
    "G" int   NOT NULL,
    "GS" int   NOT NULL,
    "MP" int   NOT NULL,
    "PER" float   NOT NULL,
    "TS%" float   NOT NULL,
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
    "FG" int   NOT NULL,
    "FGA" int   NOT NULL,
    "FG%" float   NOT NULL,
    "3P" int   NOT NULL,
    "3PA" int   NOT NULL,
    "3P%" float   NOT NULL,
    "2P" int   NOT NULL,
    "2PA" int   NOT NULL,
    "2P%" float   NOT NULL,
    "eFG%" float   NOT NULL,
    "FT" int   NOT NULL,
    "FTA" int   NOT NULL,
    "FT%" float   NOT NULL,
    "ORB" int   NOT NULL,
    "DRB" int   NOT NULL,
    "TRB" int   NOT NULL,
    "AST" int   NOT NULL,
    "STL" int   NOT NULL,
    "BLK" int   NOT NULL,
    "TOV" int   NOT NULL,
    "PF" float   NOT NULL,
    "PTS" int   NOT NULL,
    "id" int   NOT NULL,
    CONSTRAINT "pk_modern_season_stats" PRIMARY KEY (
        "id"
     )
);

-- per_game_stats table
CREATE TABLE "per_game_stats" (
    "Year" int   NOT NULL,
    "Player" varchar   NOT NULL,
    "Pos" varchar   NOT NULL,
    "MP(Game)" float   NOT NULL,
    "Points(Game)" float   NOT NULL,
    "Assists(Game)" float   NOT NULL,
    "Rebounds(Game)" float   NOT NULL,
    "Steals(Game)" float   NOT NULL,
    "Blocks(Game)" float   NOT NULL,
    "Turnover(Game)" float   NOT NULL,
    "id" int   NOT NULL,
    CONSTRAINT "pk_per_game_stats" PRIMARY KEY (
        "id"
     )
);

ALTER TABLE "players" ADD CONSTRAINT "fk_players_Player" FOREIGN KEY("Player")
REFERENCES "player_data" ("name");

ALTER TABLE "modern_season_stats" ADD CONSTRAINT "fk_modern_season_stats_Player" FOREIGN KEY("Player")
REFERENCES "players" ("Player");

ALTER TABLE "modern_season_stats" ADD CONSTRAINT "fk_modern_season_stats_id" FOREIGN KEY("id")
REFERENCES "per_game_stats" ("id");

