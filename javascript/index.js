let currentData;
async function fetchItem(){

    let response = await fetch("http://localhost:3000/data")
    let data = await response.json();
    currentData=data;
    showItem(data);
}
fetchItem();

function showItem(data){
 document.getElementById("show-item").innerHTML= null;
    data.map((item,index) => {
        let box = document.createElement('div');

        let ind = document.createElement('p');
        ind.innerHTML = index;

        let name = document.createElement('p');
        name.innerHTML = item.name;

        let btn = document.createElement('button');
        btn.innerHTML = "Delete";

        btn.addEventListener('click',()=>{
            deleteHandler(item);
        });

        box.append(ind,name,btn)
        document.getElementById("show-item").appendChild(box);
    })

}

async function addTodoHandler(){
    let text = document.getElementById("inp").value;
    console.log("fhjjk");
    let nwobj = {
        id: currentData.length+1,
        name:text,
        status: false
    }

    let response = await fetch("http://localhost:3000/data",{
        method: "POST",
        body: JSON.stringify(nwobj),
        headers: {"Content-Type": "application/json"}
    });

    console.log(response.json());
    
    fetchItem();
}

function deleteHandler(item){
    fetch(`http://localhost:3000/data/${item.id}`,{
    method:'DELETE'
}).then(response=>{
    return response.json()
}).then(data=> 
// this is the data we get after putting our data,
console.log(data)
);
}