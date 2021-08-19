var i = 100500;
            function toggleState(item){
               if(item.className == "on")
                {
                  item.className="off";
                  item.value="Following";
                  i++;
                document.getElementById('followers').value = i;
               } else {
                  item.className="on";
                  item.value="Follow";
                  i--;
                document.getElementById('followers').value = i;
               }
            }