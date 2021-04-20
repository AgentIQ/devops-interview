## Assignment
I have a node web application has a need to execute arbitrary python code. Use this repository as a starting point.

### Goal
1. Complete Dockerfile so container can be built and run locally
2. Instructions on how to run container in the README.md
3. While running container endpoint GET '/ping' return 200 status

### Dockerfile Requirements
1. Should use parent container ( FROM node:12.13.1-alpine )
2. Install dependencies in requirements.txt file ( pip3 install -r requirements.txt )
3. README should include instructions to build and run the container
4. Bonus: Add a Makefile to simplify and improve the build + run process

### Submission Guidelines
1. Commit and push to your own repo and send us the repo link. Please do not fork or use our name in your repo.
