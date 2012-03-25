{
  "info": {
    "title": "cam doodle",
    "author": "forresto",
    "description": "webcam to doodle"
  },
  "nodes": [
    {
      "src": "http://forresto.github.com/meemoo-camcanvas/onionskin.html",
      "x": 127, "y": 57, "z": 0, "w": 342, "h": 283,
      "state": {
        "quality": 75,
        "width": 320,
        "height": 240
      },
      "id": 1
    },
    {
      "src": "http://forresto.github.com/meemoo-paint/paint.html",
      "x": 634, "y": 53, "z": 0, "w": 377, "h": 342,
      "state": {
        "linewidth": 2
      },
      "id": 2
    }
  ],
  "edges": [
    {
      "source": [ 1, "image" ],
      "target": [ 2, "image" ]
    }
  ]
}