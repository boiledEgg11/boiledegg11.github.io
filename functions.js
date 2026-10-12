var pet_time = 0;
function boiledOcTextChange() {
    if (pet_time < 3) {
        document.getElementById("boiled_oc_text").innerHTML = "yay &gt;&sol;&sol;&sol;&lt; &gt;";
        document.getElementById("boiled_oc_image").src = "boiled_oc_blush.png";
        document.getElementById("boiled_oc_tooltip_text").innerHTML = "she's happy!";
        setTimeout(() => {
            document.getElementById("boiled_oc_image").src = "boiled_oc_neutral.png";
            document.getElementById("boiled_oc_text").innerHTML = "Hello! >";
            if (pet_time < 2) {
                document.getElementById("boiled_oc_tooltip_text").innerHTML = "she wants more...";
            }
            else {
                document.getElementById("boiled_oc_tooltip_text").innerHTML = "she's had just right!";
                document.getElementById("boiled_oc_image").src = "boiled_oc_happy.png";
            }
        }, 5000);
        pet_time += 1;
    } 
    else {
        document.getElementById("boiled_oc_image").src = "boiled_oc_overwhelmed.png";
        document.getElementById("boiled_oc_text").innerHTML = "S...stop!>";
        document.getElementById("boiled_oc_tooltip_text").innerHTML = "she is a bit overwhelmed!";
    }
}