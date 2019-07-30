import autoprefixer from 'autoprefixer';


export default ({ isProduction }) => ({
  loader: 'postcss-loader',
  options: {
    plugins: [
      autoprefixer()
    ],
    sourceMap: !isProduction,
  }
})