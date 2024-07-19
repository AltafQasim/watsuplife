module.exports = {
  test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
  loader: "file-loader",
  options: {
    name: "static/media/[name].[hash:8].[ext]",
  },
};
