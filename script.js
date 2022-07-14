const btn = document.querySelector("#send")

btn.addEventListener(click,function(e){
    e.preventdefault();

    const name = document.querySelector("name");

    const value = name.value;

    console.log(value)

})
