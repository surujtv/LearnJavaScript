var arrItems = [45,56,23,47,89,67]
    for(var a=0; a<arrItems.length; a++){
        for(var b=a+1; b<arrItems.length; b++){
            
            // 45 < 56
            //[56,45,23,47,89,67]            
            // 56 < 89
            //[89,45,23,47,56,67]
            //First Iteration

            // 45 < 47
            //[89,47,23,45,56,67]
            // 47 < 56
            // [89,56,23,45,47,67]
            // 56 < 67
            // [89,67,23,45,47,56]
            //Second Iteration
            
            // 23 < 45
            // [89,67,45,23,47,56]
            // 45 < 47
            // [89,67,47,23,45,56]
            // 47 < 56
            // [89,67,56,23,45,47]
            // Third Iteration

            // 23 < 45  
            // [89,67,56,45,23,47]
            // 45 < 47
            // [89,67,56,47,23,45]
            // Fourth Iteration
            
            // 23 < 45
            // [89,67,56,47,45,23]

            if (arrItems[a]<arrItems[b]) {
                var temp = arrItems[a]
                arrItems[a] = arrItems[b]
                arrItems[b] = temp
            }
        }
    }
    console.log(arrItems)