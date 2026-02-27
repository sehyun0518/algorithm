-- 코드를 입력하세요
SELECT ROUND(SUM(daily_fee) / COUNT(*), 0) as AVERAGE_FEE FROM CAR_RENTAL_COMPANY_CAR WHERE car_type = "SUV";