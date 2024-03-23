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

        function displayMods(){
            let max = document.getElementById("points").value;
            let drawnMods = randMods(max);
            if(drawnMods==false){
                document.getElementById("display").innerHTML = "Choose a different point value";
            }else{
                document.getElementById("display").innerHTML = drawnMods.join(" | ");
            }
        }
        
        function excludeMods(id){
          let boxID = "c" + id;
          let checkBox = document.getElementById(boxID);
          if(checkBox.checked == true) {
            excludeList.push(modName[id]);
          }
          if(checkBox.checked == false) {
            let index = excludeList.indexOf(modName[id]);
            excludeList.splice(index, 1);
          }
        }

        let modVal = [5, 5, 5, 5, 15, 20, 20, 15, 15, 15, 30, 10, 20, 50, 20];
        let modName = ["No Hook", "Smaller Backpack", "No Clover", "Pricey Pelts", "Boss Totems", "Tipped Scales", "All Totem Battles", "No Boss Rares", "More Difficult I", "More Difficult II", "Single Candle", "Annoying Starters", "Squirrel Fish", "Grizzly Bosses", "Final Boss"];
        let excludeList = [];