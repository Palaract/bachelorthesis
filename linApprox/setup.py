from setuptools import setup, find_packages

setup(
    name='linApprox',
    version='0.1',
    packages=find_packages(),
    install_requires=[
        'numpy',
        'gurobipy'
    ],
    author='Willy Mroczowski',
    author_email='willy@mroczowski.de',
    description='Piecewise linear approximation functions for interfacing with gurobipy and cobra',
    long_description=open('README.md').read(),
    long_description_content_type='text/markdown',
    url='http://github.com/palaract/linApprox',
    classifiers=[
        'Programming Language :: Python :: 3',
        'License :: OSI Approved :: MIT License',
    ],
)
