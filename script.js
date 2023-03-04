// // working of New Post button.....................
const body = document.querySelector("#bd")
const new_post = document.querySelector(".new_post");
let main_page = document.querySelector(".m");
let second_page = document.querySelector(".h");

// // adding event listner to new_post
function accessModalForm() {
  second_page.classList.remove('hide')
  main_page.classList.add('hide')
  body.classList.add('white')
  body.classList.remove('black')
  // window.location.href = "modal.html"
}
new_post.addEventListener('click', accessModalForm);
let num = 1;

// // .......................................

//accessinng data added in form page 
var close_btn = document.getElementById('backbutton');
const heading = document.querySelector("#heading");
const textbox = document.querySelector("#textbox");
const publish_btn = document.querySelector("#btn1");
var cancel_btn = document.getElementById('btn2');

// // working for close button
close_btn.addEventListener('click', closeForm);
cancel_btn.addEventListener('click', closeForm);

function closeForm(e) {
  e.preventDefault();
  second_page.classList.add('hide')
  main_page.classList.remove('hide')
  body.classList.remove('white')
  body.classList.add('black')
}


// accessing information added by user 
publish_btn.addEventListener('click', addTheData)
function addTheData(e) {
  e.preventDefault();

  // taking date and time with date function ............
  let main_date = new Date();
  let day = main_date.getDate();
  console.log(day);
  let mon = main_date.getMonth();
  console.log(mon);
  let yr = main_date.getFullYear();
  console.log(yr);

  // function to get time ------------------
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }
  let time = (formatAMPM(new Date));
  let final_date = `${day}` + "/" + `${mon}` + "/" + `${yr}` + " at " + `${time}`;
  // console.log (final_date)
  let create_date = "Created At : " + `${final_date}`



  let head_value = heading.value;
  let descip_value = textbox.value;
  // console.log (head_value);
  // console.log (descip_value);

  // creating Element to add in DOCUMent 
  const cont = document.createElement('div');
  const head_div = document.createElement('div');
  const dis_div = document.createElement('div');
  // const flex_div = document.createElement('div');
  const edit_but = document.createElement('button');
  const delete_but = document.createElement('button');
  const date_div = document.createElement('button');

  // giving classes to created Element 
  cont.classList.add("main_div_num");
  // cont.classList.add("delete_button_num");
  head_div.classList.add("post_head_num");
  dis_div.classList.add("post_div_num");
  edit_but.classList.add("edit_button_num");
  delete_but.classList.add("delete_button_num");
  date_div.classList.add("date_div_num")
  // adding values in created element 
  head_div.innerText = head_value;
  dis_div.innerText = descip_value;
  edit_but.innerText = "Edit Post";
  delete_but.innerText = "Delete Post"
  date_div.innerText = create_date;
  // adding the element to add in Document 
  cont.appendChild(head_div);
  cont.appendChild(dis_div);

  cont.appendChild(edit_but);
  cont.appendChild(delete_but);
  cont.appendChild(date_div);

  main_page.appendChild(cont);

  second_page.classList.add('hide')
  main_page.classList.remove('hide')
  body.classList.remove('white')
  body.classList.add('black')


  // handling the delete button in inner function 

  var deleteButtons = document.getElementsByClassName("delete_button_num");


  for (var i = 0; i < deleteButtons.length; i++) {
    var button = deleteButtons[i];
    button.addEventListener("click", function () {
      var parentDiv = this.parentNode;
      parentDiv.remove();
    });
  }

  var editButtons = document.getElementsByClassName("edit_button_num");
  var hv = document.getElementsByClassName("post_head_num");
  var dv = document.getElementsByClassName("post_div_num");

  // for (var i = 0; i < editButtons.length; i++) {
  //   var button = editButtons[i];
  //   button.addEventListener("click", function() {
  //     // alert("hello");


  //     second_page.classList.remove ('hide')
  //     main_page.classList.add ('hide')
  //     body.classList.add ('white')
  //     body.classList.remove ('black')

  //     button[i].innerText = "Save Post"

  //   });
  // }



}











































































































































































































































































































































































































































































































































































































































































































































