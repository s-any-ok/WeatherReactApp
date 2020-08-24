module.exports = {
  getSunTime(timestamp) {
    const date = new Date(timestamp * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const seconds = "0" + date.getSeconds();
    const timestampDate =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    return timestampDate;
  },
};
