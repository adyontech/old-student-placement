import Vue from "vue";
import moment from "moment";
import he from "he";
Vue.filter("ago", date => {
  return moment(date).fromNow();
});
Vue.filter("truncate", data => {
  return data.substring(0, 100) + "...";
});
Vue.filter("removeHTML", data => {
  return he.decode(data.replace(/<[^>]+>/g, ""));
});
Vue.filter("titleCase", data => {
  data = data.trim();
  return data
    .toLowerCase()
    .split(" ")
    .map(function(word) {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
});
Vue.filter("capitalCase", data => {
  return data.charAt(0).toUpperCase() + data.slice(1);
});
Vue.filter("decodeHTML", data => {
  return he.decode(data);
});
