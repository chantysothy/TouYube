#!/bin/bash

sudo apt-get update

#this downloads nodejs
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt-get install -y nodejs 

#this installs youtube-dl
sudo apt-get install youtube-dl 
#this makes sure it's the latest.
sudo curl -L https://yt-dl.org/downloads/latest/youtube-dl -o /usr/local/bin/youtube-dl
sudo chmod a+rx /usr/local/bin/youtube-dl
