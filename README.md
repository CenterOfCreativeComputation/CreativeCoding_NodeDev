**Requirements:**
VS Code, Git, Node, Bash type Terminal

**Steps, create directory structures:**
1. Install Node
2. Open your terminal program and navigate to where you want to develop your Node based creative coding projects,
3. Type: `mkdir CreativeCoding_NodeDev` (or name you want to use for your Node based dev work)
4. Type: `cd nodeDev`
5. Type: `npm init -y`
6. `mkdir src dist`
7. `cd src`
8. `mkdir p5 three`
9. `cd p5`
10. `mkdir Proj01`
11. `cd ../three`
12. `mkdir Proj01`

**install js modules and TypeScript type definitions**
1. `npm i typescript p5 three`
2. `npm i @types/p5`
3. `npm i @types/three`

**install webpack and utilities**
`npm i webpack webpack-cli ts-loader webpack-dev-server`

**create config files**
1. create new file in nodeDev named tsconfig.json
2. create new file in nodeDev named webpack.config.js

Add this to the tsconfig.json file:
`{
  "compilerOptions": {
    "allowJs": true,
    "module": "commonjs",
    "noImplicitAny": true,
    "esModuleInterop": true,
    "pretty": true,
    "outDir": "dist",
    "sourceMap": true,
    "strict": true,
    "target": "es6"
  }
}
`

Add this to the webpack.config.js file:
`const path = require("path");
 module.exports = {
    entry: "./src/p5/Proj01/sketch.ts",

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    devServer: {
        static: path.join(__dirname, "dist"),
        compress: true,
        port: 8080
    }
};`

cd into the dist directory
create index.html file.
Add the following to index.html:
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <!-- Css -->
    <link rel="stylesheet" type="text/css" href="./css/style.css">
    <!-- js Libraries -->
  
</head>
<body>
    <script type="module" src="./bundle.js"></script>
    
</body>
</html>`

cd to src/p5/Prog01 directory
create sketch.ts file
Add the following to sketch.ts
`import p5 from "p5"
/*
 * P5 Sketch
 */
const sketch = (p: p5) => {
    /*
     * P5 Setup
     */
    p.setup = () => {
        document.title = "Proj01 | MACT.2024";
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.background(p.color('#080808'));
    };

    /*
     * P5 Draw
     */
    p.draw = () => {
       
    };
};

export default new p5(sketch);`

cd to src/three/Prog01 directory
create sketch.ts file
Add the following to sketch.ts
// three example code from: https://github.com/Sean-Bradley/Three.js-TypeScript-Boilerplate
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.z = 2

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)

const geometry = new THREE.BoxGeometry()
const material = new THREE.MeshBasicMaterial({
    color: 0x00ff00,
    wireframe: true,
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
    render()
}

function animate() {
    requestAnimationFrame(animate)

    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    controls.update()

    render()
}

function render() {
    renderer.render(scene, camera)
}
animate()

Add these lines to the "scripts" in the package.json file:
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server --mode development",
    "build": "webpack --mode production"
    
Finally to run, type in the terminal: npm run dev
    
    


