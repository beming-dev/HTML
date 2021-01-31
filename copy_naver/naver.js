let readable_topic = document.getElementsByClassName("readable_topic");
let readable_topic_box = document.getElementsByClassName("readable_topic_box");
let readable_topic_box1 = document.getElementsByClassName(
  "readable_topic_box1"
);
let readable_topic_box2 = document.getElementsByClassName(
  "readable_topic_box2"
);
let next_btn = document.getElementById("next_btn");
let prev_btn = document.getElementById("prev_btn");

[...readable_topic].forEach((element, e_index) => {
  element.addEventListener("click", (e) => {
    element.className += " clicked";
    [...readable_topic].forEach((content, c_index) => {
      if (c_index != e_index) {
        content.classList.remove("clicked");
      }
    });
  });
});

next_btn.addEventListener("click", (e) => {
  readable_topic_box[0].style.transform = "translate3d(-750px, 0, 0)";
  readable_topic_box1[0].style.visibility = "hidden";
  readable_topic_box2[0].style.visibility = "visible";
});

prev_btn.addEventListener("click", (e) => {
  readable_topic_box[0].style.transform = "translate3d(0, 0, 0)";
  readable_topic_box1[0].style.visibility = "visible";
  readable_topic_box2[0].style.visibility = "hidden";
});
