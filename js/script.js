function add_link_trace(title, link){
    var link_container = document.createElement("div");
    link_container.className = "link_container"

    var link_button = document.createElement("button");
    link_button.className = "link_button";
    link_button.onclick = function(){
        window.open(link);
    };
    
    var copy_button = document.createElement("button");
    copy_button.className = "link_copy_button";
    copy_button.onclick = function(){
        copy_to_clipboard(link);
    }

    // copy_button.innerHTML = "&#x2398;";
    link_button.innerHTML = title;
    
    var container = document.getElementById("links_list");
    link_container.append(link_button);
    link_container.append(copy_button);
    container.append(link_container);
}

function copy_to_clipboard(link){
    navigator.clipboard.writeText(link);
}

function init_page(){
    add_link_trace("Youtube", YOUTUBE_LINK);
    add_link_trace("Itch.io", ITCHIO_LINK);
    add_link_trace("Github", GITHUB_LINK);
    add_link_trace("Linkedin", LINKEDN_LINK);
}
