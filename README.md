## process image project

# script commands:

- "npm test" will transpile ts code and test js files from ./build folder
- "npm run dev" will start server with typescript with watch mode from ./src folder
- "npm start" will transpile ts code to js and start js server from ./build folder

# infos

- ts configured with ES2021 as code uses replaceAll method
- linter works before transpilation

## Parameters:

filename : add image to public/images folder to resize
width : width of the image after resize
height : height of the image after resize

# endpoint exaxmple:

- http://localhost:3000
- http://localhost:3000/api/image?filename=fjord&width=200&height=200
