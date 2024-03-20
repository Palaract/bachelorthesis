---
title: 'Introduction'
sidebar_position: 6
sidebar_title: 'Introduction'
---

# Overview and recap of the problem
To be able to speed up Flux Balance Analysis (FBA) we need to understand the core principle why it can be fast or slow depending on the circumstances. Static FBA (sFBA) is merely a one-time linear programming problem. The goal is to optimize the overdefined system of linear equations so that it provides a value based on an objective function. This type of computation is generally relatively fast, because the methods for it are known for a long time and have been improved to a point where one can use these easily. If you want to know more about the methods in linear programming and delve deeper into the vocabulary, you can finde more [on Gurobis website](https://www.gurobi.com/resources/linear-programming-lp-a-primer-on-the-basics/). Overall, in terms of a computer scientist, the methods have a good [time complexity](https://or.stackexchange.com/a/5924), which makes solving problems with them fast and easy. Dynamic FBA (dFBA) on the other hand brings another dimension into account (liek time) and depending on what is to be achieved, functions have to be used as a constraint which are computationally intensive because of the fact that they are non-linear and therefore cannot be incorporated into a matrix anymore. This means that they have to be evaluated for every step in time which gets computationally very intense for a lot of calculations.
