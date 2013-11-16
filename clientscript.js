/*To install them:
Plugins > Plugin Manager > Add Plugin > ClientScripting.dll > Open > Plugins > Script Window > Client Scripts. Copy paste all of this into the box. Press Ok. Profit!*/
//Type ~start the play!
events = ({
      beforeSendMessage: function(message, channel) {
          var command = "",
              commandData = "",
              index = -1;
 
          if (message.charAt(0) === "~") {
              command = message.substr(1);
              index   = command.indexOf(" ");
 
              if (index != -1) {
                  command     = command.substr(0, index);
                  commandData = command.substr(index + 1);
              }
 
              command = command.toLowerCase();
			  
			  if (command === "start") {
			  sys.stopEvent();
			  client.printLine("Professor Sycamore: Welcome to the world of pokemon! This is the Kalos region and you will begin your journey by choosing your starter pokemon!");
			  client.printLine("~chespin: To have the grass type pokemon! Evolution chain: Chespin > Quilladin > Chesnaught. ");
			  client.printLine("~fennekin: To have the fire type pokemon! Evolution chain: Fennekin > Braixen >Delphox. ");
			  client.printLine("~froakie: To have the water pokemon! Evolution chain: Froakie > Frogadier > Greninja. ");
			  client.printLine("Professor Sycamore: Remember, this will be your starter pokemon! It will also be the only pokemon you will get until Aria wants to update!");
			  return;
			  }
			  if (command === "chespin") {
			  sys.stopEvent();
			  client.printLine("Professor Sycamore: All right! You now have a Chespin!");
			  client.printLine("Professor Sycamore: Type ~help to see who you can to do. If you don't want to do that right now. Please type /leavelab");
              return;
}
if (command === "fennekin") {
sys.stopEvent();
client.printLine("Professor Sycamore: All right! You now have a Fennekin!");
client.printLine("Professor Sycamore: Type ~help to see who you can to do. If you don't want to do that right now. Please type /leavelab");
return;
}
if (command === "froakie") {
sys.stopEvent();
client.printLine("Professor Sycamore: All right! You now have a Froakie!");
client.printLine("Professor Sycamore: Type ~help to see who you can to do. If you don't want to do that right now. Please type /leavelab");
return;			  
}
if (command === "leavelab") {
sys.stopEvent();
client.printLine("Professor Sycamore: Bye now, Oh and Aria will guide you the rest of the way and be your narrator.");
client.printLine("Aria: As you leave Professor Sycamore's lab...");
client.printLine("Aria: A wild Caterpie appeared! it has 4 HP!");
client.printLine("Aria: What will you do? ~attackcaterpie, ~run, or ~bag");
return;
}
if (command === "attackcaterpie") {
sys.stopEvent();
client.printLine("Aria: TURN 1");
client.printLine("Aria: Your pokemon used Tackle!");
client.printLine("Aria: It did 2 damage!");
client.printLine("Aria: The wild Caterpie has 2 HP left!");
client.printLine("Aria: The wild Caterpie used Tackle!");
client.printLine("Aria: Your pokemon only has 9 HP left!");
client.printLine("Aria: TURN 2");
client.printLine("Aria: Your pokemon used Tackle!");
client.printLine("Aria: It did 2 damage!");
client.printLine("Aria: The wild Caterpie fainted!");
client.printLine("Aria: You gained 2 EX points!");
client.printLine("Aria: Thank You for playing the demo! The completed version will be out in a long time! Type ~end to see credits.");
return;
}
if (command === "end") {
sys.stopEvent();
client.printLine("Creators of the Pokemon RPG are:");
client.printLine("Aria");
client.printLine("Type ~start to start over and try again!");
return;
}
if (command === "run") {
sys.stopEvent();
client.printLine("Aria: You got away safely!");
client.printLine("Aria: Thank You for playing the demo! The completed version will be out in a long time! Type ~end to see credits.");
return;
}
if (command === "~bag") {
sys.stopEvent();
client.printLine("Aria: This command isn't working yet.");
client.printLine("Aria: Thank You for playing the demo! The completed version will be out in a long time! Type ~end to see credits.");
return;
			  }
			  }
			  }
			  })
