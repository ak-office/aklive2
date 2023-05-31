  			const api_url = "/JioTV/get.json";
			   let j = 40;
			   let i = 21;
			   async function view(id,target) {
			const m3u8 = "/JioTV/play.php?" +id+ "/"+target;
			    window.open(m3u8, "_self");
			   }
			   async function getapi(url, j, i) {
			    const response = await fetch(url);
			    const ch_list = document.getElementById("ch_list");
			    let data = await response.json();
			    for (i; i < j; i++) {
			     var div = document.createElement("div");
			     var img = document.createElement("img");
			     var img_val = "https://jiotv.catchup.cdn.jio.com/dare_images/images/" + data.result[i].logoUrl;
			     img.setAttribute("src", img_val);
			     div.id = data.result[i].channel_id;
			     div.target = data.result[i].logoUrl.substring(0,data.result[i].logoUrl.indexOf("."));
			     div.addEventListener("click", function() {
			      view(this.id,this.target);
			     });
			     var name = document.createElement("div");
			     name.className = "tvv-name";
			     img.className = "loading";
			     name.innerHTML = data.result[i].channel_name;
			     div.className = "tvv-item";
			     div.appendChild(img);
			     div.appendChild(name);
			     ch_list.appendChild(div);
			    }
			   }
			   getapi(api_url, 20, 1);
			   function loadMore() {
			    if (i !== 975) {
			     getapi(api_url, j, i)
			     if (i != 20) {
			      i = j + 1;
			     }
			     j = j + 20;
			     console.log("clicked");
			    } else {
			     alert("All channels listed!")
			    }
			   }
			   function loadAll() {
			    if (i !== 975) {
			     getapi(api_url, 975, 1)
			     i = 975;
			     console.log("clicked");
			    } else {
			     alert("All channels listed!")
			    }
			   }