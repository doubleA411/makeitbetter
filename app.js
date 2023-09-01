const form =
  "https://docs.google.com/forms/d/e/1FAIpQLSfe_E9xfKNW5ZksXG9jZKgZK16-gCtYBdEfd-t4j97fwIA4MQ/viewform?usp=pp_url&entry.1579058291=ex&entry.1050726868=exid";

function preprocess(url) {
  var split_up = url.split("?");

  var og_url = split_up[0].replace("viewform", "formResponse");

  var uniq_ids = split_up[1]
    .split("&")
    .slice(1)
    .map((i) => {
      const id = i.split("=");
      return id[0];
    });

  console.log(og_url);
  console.log(uniq_ids);
}

preprocess(form);
