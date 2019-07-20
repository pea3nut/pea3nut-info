echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin

docker build -t pea3nut/pea3nut-info:latest .
docker push pea3nut/pea3nut-info:latest
