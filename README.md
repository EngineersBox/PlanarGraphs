# PlanarGraphs

An undirected graph in discrete mathematics is a collection of verticies (V) and edges (E), generally defined as G=(V,E). A planar graph is any graph that can be drawn with no verticies crossing over. An example of this is the K4 graph:
![K4 Planar Graph](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FwQa6X.gif&f=1&nofb=1)

There are several ways to determine whether a graph is planar or not, two of these are:
- Kuratowski's theorem
- Euler's characteristic

#### Kuratowski's Theorem

To understand Kuratowski's theorem, we first need to understand two lemmas:

##### Lemma 1:
>An elementary subdivision of a non-empty graph G=(V,E) is obtained from G by removing the edge between the veriticies *(u,v)* and adding a new vertex *w* (that is not already part of the graph), add then adding the edges *(u,w)* and *(v,w)*.

##### Lemma 2:
>A subdivision of graph G=(V,E) is a graph obtained from G by applying the following recursive definition:
>1. G is a subdivision of G
>2. If H1 is an elementary subdivision of G and H2 is an elementary subdivision of H1, then H2 is a subdivision of G.

Now we can look at Kuratowski's theorem, that states:
>A graph G=(V,E) is planar if and only if G does not contain a subgraph H that is isomorphic to a subdivision of K5 or K3,3.

To see this in action, lets look at the Peterson graph:
![Peterson Graph](https://ibb.co/W34y2HL)
Which has an isomorphic subdivision to K3,3:
![K3,3 Isomorphic Subdivision Peterson Graph](https://ibb.co/tMkRy43)

#### Euler's Characterisic

Planar graphs have a specific property known as faces, these are areas bounded by edges in the graph and the space outside the graph. For example, here are all the faces (labeled with fn for each) of a graph:
![Planar Graph Faces](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FuxTmT.png&f=1&nofb=1)

Euler's characteristc states:
>Let G=(V,E) be a connected planar graph and v=|V|, e=|E|, r=|faces(G)|. Then,
>*v-e+r=2*

## Implementation

Now that we understand planar graph and how to determine them, let's look at this repo. This is a JavaScrip + p5.js implementation of a game where a random planar graph is generated with mixed up locations for the veritcies, your job is to un-mix them so that no edges cross over.

Here the QuadTree code from my [QuadTree repo](https://github.com/EngineersBox/QuadTrees) is used to generate a random quadtree with n verticies and a capacity of 1. A graph is then generated by created edges between all quads with Von Neumann neighbours with Manhattan distance 1. Then the verticies are given random locations of the canvas to produce the mixed up state.
