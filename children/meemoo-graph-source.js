{
  "info": {
    "title": "cam to gif",
    "author": "forresto",
    "description": "webcam to animated gif"
  },
  "nodes": [
    {
      "src": "http://forresto.github.com/meemoo-camcanvas/onionskin.html",
      "x": 128, "y": 45, "z": 0, "w": 343, "h": 280,
      "state": {
        "quality": 75,
        "width": 320,
        "height": 240
      },
      "id": 1
    },
    {
      "src": "http://forresto.github.com/meemoo-canvas2gif/canvas2gif.html",
      "x": 622, "y": 43, "z": 0, "w": 357, "h": 285,
      "state": {
        "delay": 200,
        "quality": 75
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