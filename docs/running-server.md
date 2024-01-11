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