# sw-movies

This is a star wars movies characters description site.
The porpuse of this site is tp show all the characters of a star wars film in a table.

to start using it, please download and install <a href="https://www.docker.com/" target="_blank">docker</a> on your machine.

after cloning the projcet, open terminal in the project's root foldr and type
```
docker-compose up
```

This should start building the docker images and will then deploy the containers.
If this process fails for some reason, try building each docker image respectively:
Using the terminal, change dir to the api and run 
```
docker build .
```
than do the same to in react client directory.

run the docker compose command again 

The api should be available on port 5000 and the client on port 3000.

May the force by with you, always
