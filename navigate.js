function navigateTo(page,folders) {
    let navLink = document.getElementById(page);
    let siteURL = setSiteURL(folders);

    switch(page){
        case "home":
        navLink.href = siteURL+"index.html";
        break;
        case "blog":
        navLink.href = siteURL+ "Blogs.html";
        break;
        case "data-art":
        navLink.href = siteURL+ "DataArt.html";
        break;
        case "data-vis":
        navLink.href = siteURL+ "DataVis.html";
        break;
        case "design":
        navLink.href = siteURL+ "Design.html";
        break;
    }
}

function setSiteURL(folders) {
    let siteURLPrefix = "";
    
    if(folders==0){
        return siteURLPrefix;
    }

    for (let index = 0; index < folders; index++) {
       siteURLPrefix += "../";
        
    }

    return siteURLPrefix;
}