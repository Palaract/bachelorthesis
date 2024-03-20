# Bachelorthesis

This repository contains the `linApprox` package, tests and documentation for the bachelor's thesis: `Building tools to study the relation of glucose
availability and metabolic phenotype in bioreactors`.

## Contents
```
.
├── benchmarks
│   ├── adaptive_static_segmentation.py
│   ├── bayesian_optimization.py
│   ├── benchmark.py
│   ├── dynamic_bounds_fitting.py
│   └── static_segmentation.py
├── docs
├── examples
│   ├── cycle_iml.py
│   ├── cycle_toy.py
│   ├── iML1515.xml
│   ├── model.json
│   └── override.py
├── linApprox
│   ├── LICENSE
│   ├── linApprox
│   │   ├── approximation.py
│   │   ├── functions.py
│   │   └── __init__.py
│   ├── README.md
│   ├── setup.py
│   └── tests
│       ├── __init__.py
│       └── test_approximation.py
├── models
│   ├── model_1
│   │   ├── main_pwl.py
│   │   ├── main.py
│   │   ├── MCA_toy-model1.png
│   │   └── model.json
│   └── model_2
│       ├── main_pwl.py
│       ├── main.py
│       ├── MCA_toy-model5.png
│       └── model.json
├── default.nix
├── pydoc-markdown.yml
├── README.md
└── requirements.txt
```
The `benchmarks` directory contains the code for the different approximation strategies as well as a `benchmark.py` which tests all the strategies.

The `docs` directory contains the documentation inclusive the API specification for the `linApprox` package.

The `examples` directory contains the simulation of bioreactor crowding for IML1515 and Toy model 1. Noteworthy is the override file which makes usage with COBRApy possible as long as the upstream pull request has not been merged.

The `linApprox` directory contains a python package which can be installed by executing `pip install .` in its directory root. It provides the possibility to approximate functions defined in python with linear functions and also add them to a Gurobi or COBRA model.

The `models` folder contains the two toy models, provided by Samira van den Bogaard with scripts to execute flux balance analysis on them.

The remaining files are the requirements for all scripts used here, a `.nix` file for providing a hassle-free development shell in NixOS, an instructions PDF on how to install and license Gurobi in Linux and a pydoc-markdown.yml file to generate the API specification for use with the docs.

## Installation
The repository is built in a way, that every script should be executable if an environment is provided with the necessary dependencies.

First copy the repository to your local computer and change into the project:
```bash
git clone https://github.com/Palaract/bachelorthesis.git
cd bachelorthesis
```
After that, make sure you have Gurobi installed and properly licensed. You can find instructions for doing that in the `GurobiInstructions.pdf`

### NixOS
If you are using NixOS, you can just do:
```bash
nix-shell
```
### Linux or Windows
Create a virtual environment:
```bash
python -m venv .venv
```

Active the virtual environment like so:
```bash
./.venv/Scripts/activate # Windows

source .venv/bin/activate # Linux
```
Install all the dependencies:
```bash
pip install -r requirements.txt
```

Please note, that if you want to run the simulation in `examples/cycle_iml.py` you will have to install PyQT6 as a system package to use the QT aggregator. 

Also note, that before using scripts which import from `linApprox`, you install it by changing into the directory `linApprox` and execute `pip install .`

## Building the docs
If you want to build the documentation yourself, make sure you have nodejs version 20 installed. After that, change into the `docs` directory and run:
```bash
npm install
```
Then run:
```bash
npm run dev
```
to start the development server. If you want to build a production version, just execute:
```bash
npm build
```
If you also want to have the latest `linApprox` API reference, change into the root directory of the project and execute the following commands:
```bash
pip install pydoc-markdown

pydoc-markdown
```

## General information
More information regarding the project and the linApprox API reference can be found in the thesis itself and on the documentation website: https://bachelor.wm-co.de