document.addEventListener("DOMContentLoaded", (e)=>{
    console.log(e.target)
    // init d'un tableau ==> array
    el_main = document.querySelector("section")
    const tables = ["HTML", true, 2023]
    tables.push("CSS") // ajoute un element a la fin
    tables.pop() // supprime le dernier element ajoute
    tables.shift() // supprime le premier element ajoute
    tables.unshift("javascript", "c#") //ajouter des elements
    let developer = ["Agrid", "Severus", "Dumbledore"]
    let big_table = ["java",...developer, ...tables] //spread operator
    //lenght compter les elements d'un tableau, index des elements
    console.log(big_table)
    // destructuring table
    let [a, b, c] = developer
    console.log(c)
    tables.includes("xml") ? console.log("ok") : console.log("perdu")
    // objet
    /*         <section>
            <h2>Jack Nicholson</h2>
                <img src="https://media.tenor.com/SohzwfaC-doAAAAd/jack-nicholson-nods.gif" alt="Jack Nicholson">
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eos?
                </p>
        </section>
    */
    const pictures = {
        //propriété d'objet 
        // clé : valeur
        first_name : "Jack Nicholson", 
        image : "https://media.tenor.com/SohzwfaC-doAAAAd/jack-nicholson-nods.gif",
        content : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, eos?"
    }

/*pictures.array.forEach((element, value) => {
    console.log(`${element} : ${value}`)
    
});*/




    console.log(pictures.first_name)
    let print_out = Object.values(pictures) // Object.keys(pictures)
    console.log(print_out)
    const objet_film = `<section>
                        <h2> ${pictures.first_name} </h2>
                        <img src=" ${pictures.image}" "alt="film Nicholson">
                        <p> ${pictures.first_name} </p>
                        </section>`
    el_main.innerHTML += objet_film

            // les itérations for,while, forEach, data, do while
            let i = 0;
         /*   for(i = 0; i < 10; i = i +1){
                console.log(`passage de ${i}\n`)
            }*/
           /* while (i<10){
                i++;
                console.log(`passage de ${i}\n`)
            }*/

            /*do{
                i = i + 1
                console.log(i)
            }while ( i < 10) */
            
         /*   for(i=0;i<big_table.length;i++){
                console.log(i+" "+big_table[i]+"\n")
            }*/

            for(let index in big_table){
                let value = big_table[1]
                console.log(i+" "+big_table[i]+"\n")
            }
})