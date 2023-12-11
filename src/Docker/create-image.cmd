docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t kursovaya/app ../..
