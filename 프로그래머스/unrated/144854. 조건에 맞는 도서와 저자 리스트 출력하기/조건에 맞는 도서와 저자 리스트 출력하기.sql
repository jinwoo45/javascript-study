-- 코드를 입력하세요
SELECT b.book_id,a.author_name,DATE_FORMAT(b.published_date, "%Y-%m-%d") as published_date FROM BOOK b
INNER JOIN AUTHOR a ON a.author_id = b.author_id
WHERE b.category = "경제" order by b.published_date asc;