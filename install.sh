sudo apt-get update \
    && apt-get install -y python3-pip python3-dev gcc build-essential cmake python3 python3-venv python3-pip python3-scipy libsuitesparse-dev 

pip3 install virtualenv

python3 -m venv ./python38
source ./python38/bin/activate

# install packages
pip3 install -r requirements.txt

#compile task 1
cd ./sourcecode/src/vx/com/px/dataset/
sh Makefile.sh

cd ../../../../../../

#compile task 2
cd ./sourcecode/src/vx/pgff/graphtree/
sh Makefile.sh


