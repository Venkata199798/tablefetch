var seqel=document.getElementById("tabelform")
function usertabel(){
    URL="https://jsonplaceholder.typicode.com/users"
    fetch(URL)
    .then(res=>res.json())
    .then(data=>{
        for(let val of data){
            serialno=val.id
            name=val.name
            emai_1=val.email
            uname=val.username
            pname=val.phone
            web=val.website
            let target=document.createElement("tr")
            let tabeldata=document.createElement("td")
            tabeldata.textContent=serialno
            tabeldata.style.color="blue"
            let tabeldata_2=document.createElement("td")
            tabeldata_2.textContent=name
            tabeldata_2.style.color="blue"
            let tabeldata_3=document.createElement("td")
            tabeldata_3.textContent=emai_1
            tabeldata_3.style.color="blue"
            let tabeldata_4=document.createElement("td")
            tabeldata_4.textContent=uname
            tabeldata_4.style.color="blue"
            let tabeldata_5=document.createElement("td")
            tabeldata_5.textContent=pname
            tabeldata_5.style.color="blue"
            let tabeldata_6=document.createElement("td")
            tabeldata_6.textContent=web
            tabeldata_6.style.color="blue"
            target.append(tabeldata,tabeldata_2,tabeldata_3,tabeldata_4,tabeldata_5,tabeldata_6)
            seqel.append(target)
        }
    })
}