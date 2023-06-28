-- 코드를 입력하세요
SELECT o.ANIMAL_ID, o.NAME 
FROM ANIMAL_OUTS o 
LEFT JOIN ANIMAL_INS i on i.animal_id = o.animal_id 
WHERE i.NAME is null AND o.NAME is not null
ORDER BY i.ANIMAL_ID ASC;