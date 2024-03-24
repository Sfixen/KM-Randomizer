      /*
      IDs:
      No Hook - 0
      Smaller Backpack - 1
      No Clover - 2
      Pricey Pelts - 3
      Boss Totems - 4
      Tipped Scales - 5
      All Totem Battles - 6
      No Boss Rares - 7
      More Difficult I - 8
      More Difficult II - 9
      Single Candle - 10
      Annoying Starters - 11
      Squirrel Fish - 12
      Grizzly Bosses - 13
      Final Boss - 14
      */
      function randMods(max){
        let mods = [];
        let val = 0;
        let att = 0;
        while(val != max && att < 100){
            mods = [];
            val = 0;
            let modValRand = [...modVal];
            let modNameRand = [...modName];
            while(val < max && modValRand.length > 0){
                let x = Math.floor(Math.random() * modValRand.length);
  
                if(excludeList.includes(modNameRand[x]) == false){
                    if(val + modValRand[x] <= max){
                    val += modValRand[x];
                    mods.push(modNameRand[x]);
                    }   
                }
                modValRand.splice(x, 1);
                modNameRand.splice(x, 1);
            }
            att++;
        }
        if(att < 100){
            return mods;
        }else{
            return false;
        }
      }
  
      function randomize(){
        bigCheck();
        let max = document.getElementById("points").value;
        let drawnMods = randMods(max);
        if(drawnMods==false){
            document.getElementById("display").innerHTML = "Choose a different point value";
        }else{
            document.getElementById("display").innerHTML = drawnMods.join(" | ");
        }
      }
  
      function check(id){
        radioID = "radio" + id;
        let radioOptions = document.getElementsByName(radioID);
  
        for (let i = 0; i < radioOptions.length; i++){
          if (radioOptions[i].checked){
            switch(radioOptions[i].value){
              case "0":
                excludeList.push(modName[id]);
                break;
              case "1":
                console.log("Included" + radioID);
                break;
              case "2":
                console.log("None" + radioID);
                break;
            }
            break;
          }
        }
      }
  
      function bigCheck(){
        excludeList = [];
        for(let i=0; i < 15; i++){
          check(i);
        }
      }
  
      let modVal = [5, 5, 15, 20, 15, 30, 20, 5, 5, 20, 15, 15, 10, 50, 20];
      let modName = ["No Hook", "No Clover", "Boss Totems", "All Totem Battles", "More Difficult I", "Single Candle", "Squirrel Fish", "Smaller Backpack", "Pricey Pelts", "Tipped Scales", "No Boss Rares", "More Difficult II", "Annoying Starters", "Grizzly Bosses", "Final Boss"];
      let excludeList = [];