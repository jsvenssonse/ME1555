
/*Issue is i cant access the proper children, so continue 
 to console log to do the order properly in the loop */
export function requestBody(e) {
    
    let form = document.getElementById('form'),
        values = [];
    
    let select = document.getElementById('lang');
    console.log(select.length);

    e.preventDefault();    
    
    //Loop through elements and put them together and then push into an array.
    for (let i = 0, l = select.length; i < l, i = i + 1; ){
        let el = select[i],
            lang = encodeURIComponent(el[i]),
            value = encodeURIComponent(el.document.getElementsByTagName("option")[i].value),
            complete = lang + "=" + value;
        
        values.push(select[i]);
        
    }
    
     
           
    return values.join("&");
    
    let http = new XMLHttpRequest();
    let url = "";
    http.open("POST", url, true);

    //Alert if it works 
    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
        


    //http.send();
    
};



