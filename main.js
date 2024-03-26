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
            for(let i=0; i < modVal.length; i++){
              if (includeList.includes(modName[i])){
                val += modVal[i];
                mods.push(modName[i]);
              }
            }
            while(val < max && modValRand.length > 0){
                let x = Math.floor(Math.random() * modValRand.length);
  
                if(excludeList.includes(modNameRand[x]) == false && includeList.includes(modNameRand[x]) == false){
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
          let modIDs = [];

          for(let i=0; i < mods.length; i++){
            modIDs.push(modName.indexOf(mods[i]))
          }
          console.log(modIDs);
          return modIDs;
        }else{
          return "false";
        }
      }
  
      function randomize(){
        clearColor();
        bigCheck();
        let max = document.getElementById("points").value;
        let drawnMods = randMods(max);
        console.log(drawnMods)
        if(drawnMods=="false"){
            document.getElementById("pointValue").innerHTML = "Choose a different point value!";
        }else{

          for(let i=0; i < drawnMods.length; i++){
            applyStyles("#F8FFD1", "invert(93%) sepia(11%) saturate(589%) hue-rotate(28deg) brightness(105%) contrast(103%)", drawnMods[i]);
            console.log("done")
          }

          document.getElementById("pointValue").innerHTML = " ";
          console.log("displayed!");
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
                includeList.push(modName[id]);
                break;
              case "2":
                break;
            }
            break;
          }
        }
      }
  
      function bigCheck(){
        excludeList = [];
        includeList = [];
        for(let i=0; i < 15; i++){
          check(i);
        }
      }

      function applyStyles(color, filter, id) {
        // Select elements with class 'mod'
        const modElements = document.querySelectorAll(`.mod${id}`);
        
        // Apply styles to elements with class 'mod'
        modElements.forEach(element => {
            element.style.color = color;
            element.style.borderColor = color;
        });
    
        // Select img elements within td.mod under tr.icon
        const imgElements = document.querySelectorAll(`tr > td.mod${id} > img`);
        
        // Apply filter style to img elements
        imgElements.forEach(element => {
            element.style.filter = filter;
        });
    }

      function radioColor(id){
        clearColor();
        radioID = "radio" + id;
        let radioOptions = document.getElementsByName(radioID);
  
        for (let i = 0; i < radioOptions.length; i++){
          if (radioOptions[i].checked){
            switch(radioOptions[i].value){
              case "0":
                applyStyles("#511F3F", "invert(13%) sepia(14%) saturate(6533%) hue-rotate(288deg) brightness(88%) contrast(89%)", id);
                break;
              case "1":
                applyStyles("#F8FFD1", "invert(93%) sepia(11%) saturate(589%) hue-rotate(28deg) brightness(105%) contrast(103%)", id);
                break;
              case "2":
                applyStyles("#A32632", "invert(16%) sepia(78%) saturate(2313%) hue-rotate(335deg) brightness(102%) contrast(92%)", id);
                break;
            }
            break;
          }
        }
      }

      function clearColor(){
        for(let i=0; i < modName.length; i++){
          let radioOptions = document.getElementsByName(`radio${i}`);
          if(radioOptions[2].checked)
            applyStyles("#A32632", "invert(16%) sepia(78%) saturate(2313%) hue-rotate(335deg) brightness(102%) contrast(92%)", i);
        }
      }

      //WORKS BUT SOME WEIRD ERROR
      function clearButton(){
        let radios = document.querySelectorAll('input[type="radio"][value="2"]');
        
        for (let i = 0; i < radios.length; i++) {
          radios[i].checked = true;
          applyStyles("#A32632", "invert(16%) sepia(78%) saturate(2313%) hue-rotate(335deg) brightness(102%) contrast(92%)", i);
        }
      }
      
  
      let modVal = [5, 5, 15, 20, 15, 30, 20, 5, 5, 20, 15, 15, 10, 50, 20];
      let modName = ["No Hook", "No Clover", "Boss Totems", "All Totem Battles", "More Difficult I", "Single Candle", "Squirrel Fish", "Smaller Backpack", "Pricey Pelts", "Tipped Scales", "No Boss Rares", "More Difficult II", "Annoying Starters", "Grizzly Bosses", "Final Boss"];
      let excludeList = [];
      let includeList = [];