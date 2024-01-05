## Table of contents
- [Rules](#rules)
- [Folder Structure](#folder-structure)
- [Check Points](#check-points)
- [Running server](#running-server)
    - [Docker](#docker)
    - [Docker compose](#docker-compose)

This base code have set uped prequently used library modules like cache, s3 uploader etc.
Check the .env.example file to run the project.
If you dont want, or doesnot need for your project, just makes unnecessary modules commented on app.module.ts 


# Rules<a id="rules"></a>
1. Use "yarn"
2. Use "prisma"
3. Use docker compose for dev

# Folder Structure <a id="folder-structure"></a>
Each module will have below files
controller / service / repository / dto

## 1. Controller
Handler for req, res

## 2. Service
Business logic is heare

## 3. Repository
1. Only for database related code. **Not business logic**
2. The functions on repository Shouldn't throw exceptions not to make the limitation usability

## 4. DTO
validation, sanitization, type change, etc..

# Check points <a id="check-points"></a>
## Production
1. Set the right connection pool size.
Recommanded connection pool size is "default pool size (num_physical_cpus * 2 + 1) ÷ number of application instances."

# Running server <a id="running-server"></a>
## Docker<a id="docker"></a>
Dev
```
docker build -t any-tag-you-want -f Dockerfile.dev . 

docker run -p 3000:3000 -v $(pwd):/app any-tag-you-want
```

## Docker Compose<a id="docker-compose"></a>
### DEV/LOCAL
```
// Need to install because docker use volume
1. Run "yarn install"

2. Set ".env.dev" file

3. Run "docker compose -f docker-compose-dev.yml up"
```

# TODO
- cache
- socialLogin
- fcm
- socket


# Thinking
1. Make sure what type of value will be used on each layers
entity, DTO, VO etc..