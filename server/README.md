# Breaking down the Dockerfile
FROM python:3 -- indicates dependency; docker containers don't have languages automatically loaded, need to instruct image to include python:3, which is an official repo hosted on dockerhub registry 
ENV PYTHONBUFFERED 1
RUN mkdir /code -- issues instruction that is executed and committed as part of image (making a new folder called code)
WORKDIR /code
ADD requirements.txt /code/ -- similar to copy; duplicates contents of file into docker image (import input file _ python code that Docker image executes)
RUN pip install -r requirements.txt -- issues instruction that is executed and committed as part of image (pip install dependencies listed in requirements.txt)
ADD . /code/
CMD ["python", "backend.py" ] -- there can only be one CMD per dockerfile; command you intend image to do when you run an instance of it as a container - it isn't executed as part of the build process for an image