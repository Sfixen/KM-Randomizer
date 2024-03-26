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

      //Function for selecting random mods
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
          return modIDs;
        }else{
          return "false";
        }
      }
  
      //Function thats called when clicking the "randomize" button
      function randomize(){
        clearColor();
        bigCheck();
        let max = document.getElementById("points").value;
        let drawnMods = randMods(max);
        if(drawnMods=="false"){
            document.getElementById("pointValue").innerHTML = "Choose a different point value!";
        }else{

          for(let i=0; i < drawnMods.length; i++){
            applyStyles("#F8FFD1", "invert(93%) sepia(11%) saturate(589%) hue-rotate(28deg) brightness(105%) contrast(103%)", drawnMods[i]);
          }

          document.getElementById("pointValue").innerHTML = " ";
        }
      }
  
      //Function for checking which option is selected in a radio
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
  
      //Function for checking all of the radios
      function bigCheck(){
        excludeList = [];
        includeList = [];
        for(let i=0; i < 15; i++){
          check(i);
        }
      }

      //Changing the color of the text and image
      function applyStyles(color, filter, id) {
        const modElements = document.querySelectorAll(`.mod${id}`);
        
        modElements.forEach(element => {
            element.style.color = color;
            element.style.borderColor = color;
        });
    
        const imgElements = document.querySelectorAll(`tr > td.mod${id} > img`);
        
        imgElements.forEach(element => {
            element.style.filter = filter;
        });
    }

    //Changes the color of a <td> based on which radio option is selected
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

      //Resets the colors back to red
      function clearColor(){
        for(let i=0; i < modName.length; i++){
          let radioOptions = document.getElementsByName(`radio${i}`);
          if(radioOptions[2].checked)
            applyStyles("#A32632", "invert(16%) sepia(78%) saturate(2313%) hue-rotate(335deg) brightness(102%) contrast(92%)", i);
        }
      }

      //Function thats called when the clear button is pressed, sets all radio inputs to option 3 - "none"
      function clearButton(){
        let radios = document.querySelectorAll('input[type="radio"][value="2"]');
        
        for (let i = 0; i < radios.length; i++) {
          radios[i].checked = true;
          applyStyles("#A32632", "invert(16%) sepia(78%) saturate(2313%) hue-rotate(335deg) brightness(102%) contrast(92%)", i);
        }
      }
      
      //Arrays
      let modVal = [5, 5, 15, 20, 15, 30, 20, 5, 5, 20, 15, 15, 10, 50, 20];
      let modName = ["No Hook", "No Clover", "Boss Totems", "All Totem Battles", "More Difficult I", "Single Candle", "Squirrel Fish", "Smaller Backpack", "Pricey Pelts", "Tipped Scales", "No Boss Rares", "More Difficult II", "Annoying Starters", "Grizzly Bosses", "Final Boss"];
      let excludeList = [];
      let includeList = [];