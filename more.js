//function myFunction() {
   // document.getElementById("todoApp");
  //}
//var myNodelist = document.getElementsByTagName("LI");
//var i;
// Loop through all list items and create a close button for each
//for (i = 0; i < myNodelist.length; i++) {
  //var span = document.createElement("SPAN");
  //var txt = document.createTextNode("\u00D7");
  //span.className = "close";
  //span.appendChild(txt);
  //myNodelist[i].appendChild(span);
//}
// Click on a close button to hide the current list item
//var close = document.getElementsByClassName("close");
//for (i = 0; i < close.length; i++) {
  //close[i].onclick = function() {
   // var div = this.parentElement;
   // div.style.display = "none";
  //}
//}
// Add a new list item when clicking on the "Add" button
//function newElement() {
 // var li = document.createElement("li");
 // var inputValue = document.getElementById("inputbox").value;
 // var t = document.createTextNode(inputValue);
  //li.appendChild(t);
  //if (inputValue === '') {
  //  alert("You must write something!");
  //} else {
  //  document.getElementById("list").appendChild(li);
  //}
  //document.getElementById("inputbox").value = "";
  // Add close button to newly added item
  //var span = document.createElement("SPAN");
  //var txt = document.createTextNode("\u00D7");
  //span.className = "close";
  //span.appendChild(txt);
  //li.appendChild(span);
  // Attach event listener to close button of newly added item
  //span.onclick = function() {
  //  var div = this.parentElement;
  //  div.style.display = "none";
  //}
//}
// Mark list item as checked when clicked
//var list = document.querySelector('ul');
//list.addEventListener('click', function(ev) {
  //if (ev.target.tagName === 'LI') {
  //  ev.target.classList.toggle('checked');
  //}
//}, false);

//class Werewolf:
  //  def __init__(self, name):
        //self.name = name
        //self.is_werewolf = False
        //self.activities = []
    //def transform(self):
       // self.is_werewolf = True
    //def revert(self):
       // self.is_werewolf = False
   // def add_activity(self, activity):
        //self.activities.append(activity)
    //def view_activities(self):
        //for activity in self.activities:
          //  print(activity)
//def main():
   // werewolf = Werewolf("Fenrir")
   // print(f"{werewolf.name} is a werewolf: {werewolf.is_werewolf}")
   // werewolf.transform()
   // print(f"{werewolf.name} is a werewolf: {werewolf.is_werewolf}")
   // werewolf.revert()
   // print(f"{werewolf.name} is a werewolf: {werewolf.is_werewolf}")
   // werewolf.add_activity("Hunted a deer")
   // werewolf.add_activity("Destroyed a nearby village")
   // werewolf.add_activity("Attacked a traveler")
   // print("\nActivities:")
   // werewolf.view_activities()
//if __name__ == '__main__':
  //  main()






let werewolf = null;
const createWerewolf = () => {
  const name = document.getElementById("name").value;
  if (name !== "") {
    werewolf = new Werewolf(name);
    document.getElementById("werewolf-info").innerHTML = `Name: ${werewolf.name}`;
  }
};
const transform = () => {
  if (werewolf) {
    werewolf.transform();
    document.getElementById("werewolf-info").classList.add("transformed");
    document.getElementById("werewolf-info").innerHTML = `Name: ${werewolf.name}<br>Status: Transformed`;
  }





};
const revert = () => {
  if (werewolf) {
    werewolf.revert();
    document.getElementById("werewolf-info").classList.remove("transformed");
    document.getElementById("werewolf-info").innerHTML = `Name: ${werewolf.name}<br>Status: Normal`;
  }
};




const addActivity = () => {
  const activity = document.getElementById("activity-input").value;
  if (werewolf && activity !== "") {
   // werewolf.addActivity(activity);
    const newActivity = document.createElement("ul");
    newActivity.appendChild(document.createTextNode(activity));
    document.getElementById("activities-list").appendChild(newActivity);
    document.getElementById("activity-input").value = "";
    
  }}

  

class Werewolf {
  constructor(name) {
    this.name = name;
    this.is_werewolf = false;
    this.activities = [];
  
};


  addEvent(event) {
    this.events.push(event);
  }
  transform() {
    this.is_werewolf = true;
  }
  revert() {
    this.is_werewolf = false;
    
  
  }}
;

  //const werewolf = {
   // events: [],
    //addEvent(event) {
    ///  this.events.push(event);
   // }
 // };
 // const form = document.querySelector('form');
  //const input = document.querySelector('#event');
  //form.addEventListener('submit', (event) => {
  //  event.preventDefault();
  //  const eventValue = input.value.trim();
   // werewolf.addEvent(eventValue);
  //  console.log(werewolf.events);
  //  input.value = '';
 // });