use viatech;



INSERT INTO users (name,password)
VALUES ("username","pass");


-- INSERT INTO projects (name,UserId)
-- VALUES ("project one"),("project two");

 INSERT INTO projects (name)
 VALUES ("project one"),("project two");


INSERT INTO stages (name)
VALUES ("fd"),("md"),("mt"),("yt");

INSERT INTO projectStages (ProjectId,StageId)
VALUES (1,1),(2,1);

INSERT INTO runs (name,analyst_initials,run_date,accept_or_reject,
qc_initials,qc_date,datapacket_reviewed,flags,comments)
VALUES ("run123","CAW","1/2/11","ACCEPT","ASZ","1/3/11","YES",4,"this is a comment"),
("runabss3","KSW","1/4/11","ACCEPT","SJD","1/9/11","YES",4,"another comment");

 INSERT INTO stageRuns (StageId,RunId)
 VALUES (1,1);

INSERT INTO reagents (name,lotnumber)
VALUES ("MOD-40 23","ANT-01");

 INSERT INTO runReagents (RunId,ReagentId)
 VALUES (1,1);