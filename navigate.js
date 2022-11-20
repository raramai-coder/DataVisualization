// function navigateTo(page,folders) {
//     let navLink = document.getElementById(page);
//     let siteURL = setSiteURL(folders);

//     switch(page){
//         case "home":
//         navLink.href = siteURL+"index.html";
//         break;
//         case "blog":
//         navLink.href = siteURL+ "Blogs.html";
//         break;
//         case "data-art":
//         navLink.href = siteURL+ "DataArt.html"; 
//         break;
//         case "data-vis":
//         navLink.href = siteURL+ "DataVisualisations/DataVis.html";
//         break;
//         case "design":
//         navLink.href = siteURL+ "Design.html";
//         break;
//         case "style":
//         navLink.href = siteURL+ "Design/styleGuide.html";
//         break;
//     }
// }

// function setSiteURL(folders) {
//     let siteURLPrefix = "";
    
//     if(folders==0){
//         return siteURLPrefix;
//     }

//     for (let index = 0; index < folders; index++) {
//        siteURLPrefix += "../";
        
//     }

//     return siteURLPrefix;
// }

const pages = [
	{ url: "../index.html", name: "Home", id: "home" },
	{ url: "../Blogs.html", name: "Blog", id: "blog" },
	{ url: "../Design.html", name: "Design", id: "design" },
	{ url: "../DataArt.html", name: "Data Art", id: "data-art" },
	{ url: "../DataVisualisations/DataVis.html", name: "Data Visualisation >", id: "data-vis" },
];

const navigationContainer = document.getElementById("nav-list");

pages.forEach(element => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.innerText = element.name;

    link.onclick= function() {
        link.href = element.url;
    }

    link.id = element.id;
   
    if (element.id == "data-vis") {
	    const button = document.createElement("div");
	    button.id = "data-vis-button";
        button.append(link);
        listItem.append(button);
    }else{
        listItem.append(link);
    }
    
    if (document.title == element.name) {
		link.classList.add("active");

        const line = document.createElement("div");
        line.classList.add("underline");

        listItem.append(line);
	}

    navigationContainer.append(listItem); 
  
});
