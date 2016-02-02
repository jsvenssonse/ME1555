export function requestBody(e) {
    let form = document.getElementById('form').reset(),
        values = [];
    
    for (let i = 0, l = form.elements.length; i < l, i = i + 1; ){
        let el = form.elements[i],
            lang = encodeURIComponent(el[i].value),
            value = encodeURIComponent(el.options),
            complete = lang + "=" + value;
        
        values.push(complete);
        console.log(form.childNodes[2]);
    }
    
    return values.join("&");
    
    let http = new XMLHttpRequest();
    let url = "";
    http.open("POST", url, true);


    http.onreadystatechange = function() {
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }

    //http.send();
    
};



