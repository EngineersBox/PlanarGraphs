class Graph {

    /**
     * Create a new graph
     * 
     * @param {Array} verticies 
     * @param {Dict} edges 
     */
    constructor(verticies=[], edges=new Dict()) {
        this.verticies = verticies;
        this.edges = edges;
    }

    /**
     * Add a vertex to the graph
     * 
     * @param {*} vertex
     */
    addVertex(vertex) {
        this.verticies.push(vertex);
    }

    /**
     * Remove a vertex from the graph
     * 
     * @param {*} vertex
     */
    removeVertex(vertex) {
        this.verticies = this.verticies.filter(a => a != vertex);
        let entries = this.edges.entries();
        for (let val of entries) {
            if (val.K == vertex) {
                this.removeEdge(vertex);
            }
            if (vertex in val.V) {
                this.removeEdge(val.K, vertex);
            }
        }
    }

    /**
     * Add an edge to the graph
     * 
     * @param {*} vertex_a 
     * @param {*} vertex_b 
     */
    addEdge(vertex_a, vertex_b) {
        if (!(vertex_a in this.verticies)) {
            this.addVertex(vertex_a);
        }
        if (!(vertex_b in this.verticies)) {
            this.addVertex(vertex_b);
        }
        let c_edge = this.edges.get(vertex_a);
        c_edge = c_edge ? cedge : [];
        c_edge.push(vertex_b);
        this.edges.put(vertex_a, c_edge);
    }

    removeEdge(vertex_a, vertex_b) {
        let val = this.edges.get(vertex_a);
        if (val) {
            this.edges.put(vertex_a, val.filter(a => a != vertex_b));
        } else {
            this.edges.remove(vertex_a);
        }
    }

    copy() {
        return new Graph(this.verticies.slice(), this.edges.slice());
    }

}