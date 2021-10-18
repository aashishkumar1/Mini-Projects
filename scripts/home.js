
  async function news()
  {
      let res = await fetch("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=773d6fd5f0654c178b4d76a44149e8fe");

      let data = await res.json();
      console.log(data);
      display(data);

  }
  news();

  let cont = document.getElementById("container");
  function display(data1)
  {  cont.innerHTML = null;
     data1.articles.forEach((newsdata) => {
        let div = document.createElement("div")
        let img = document.createElement("img");

        let  p = document.createElement("p");
        div.setAttribute("id","image");

        img.src = newsdata.urlToImage;

        p.innerHTML = newsdata.title;
        div.addEventListener("onclick",function(){

            window.location.href = "news.html";
        });

        div.append(img,p);
        cont.append(div);

     });
  }
  
