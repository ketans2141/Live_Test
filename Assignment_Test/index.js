const input = document.querySelector("#input");
const searchBtn = document.querySelector(".search_btn");
const main = document.querySelector(".main");


searchBtn.addEventListener("click", function (name) {
    main.innerHTML="";
  fetch(` https://api.tvmaze.com/search/shows?q=${input.value}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        let result = `<div class="box">
         <img src="${data[i]["show"]["image"].medium}" >
        <div>
           <h4>Name:${data[i]["show"].name}</h4>
           <h4>Start Date: ${data[i]["show"].premiered}</h4>
           <h4>Language:${data[i]["show"].language}</h4>
        </div>
        <button class="show_details">Show Details</button>
    </div>`
        main.innerHTML += result;
      }

      let showDetails=document.querySelector(".show_details");
    
      showDetails.addEventListener("click",function(){
        main.style.display="none" 

        fetch(` https://api.tvmaze.com/shows/1?embed[]=seasons&embed[]=cast`)
        .then((res) => res.json())
        .then((data) => {
          console.log(showDetails);


          
        let finalresult=`<div class="new_div">
        <div class="img_content">
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <h1>Name</h1>
            <p>Generes</p>
            <p>language</p>
            <p>status</p>
          </div>
        </div>
        <div>
          <h2>Summary</h2>
          <p>para</p>
          <h2>Seasons</h2>
        </div>
      </div>`


      });

    })  

})

})
