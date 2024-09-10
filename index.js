const config = [
    {
      "id": 1,
      "title": "Desmos Graphing",
      "url": "https://www.desmos.com/calculator"
    },

    {
      "id": 2,
      "title": "Desmos Scientfic",
      "url" : "https://www.desmos.com/scientific"
    },

    {
        "id": 6,
        "title": "Desmos 4-Function Calculator",
        "url": "https://www.desmos.com/fourfunction"
    },

    {  
        "id": 3,
        "title": "Desmos Matrix",
        "url": "https://www.desmos.com/matrix"
    },

    {
        "id": 4,
        "title": "Desmos 3D",
        "url": "https://www.desmos.com/3d"
    },

    {
        "id": 5,
        "title": "Desmos Geometry",
        "url": "https://www.desmos.com/geometry"
    }
];

var selector;

document.addEventListener("DOMContentLoaded",startUp);

async function pipWindow(url) {
    const pipWindow = await documentPictureInPicture.requestWindow();

    pipWindow.document.body.innerHTML = `<iframe src="${url}"></iframe>`;
    // Create new style element
    const style = document.createElement('style');
    style.innerHTML = `
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        display: block;
    }
    `;
    pipWindow.document.head.appendChild(style);
}

function openPIP() {
    const selectedId = parseInt(selector.value);
    const selectedConfig = config.find(item => item.id === selectedId);
    if (selectedConfig) {
        pipWindow(selectedConfig.url);
    } else {
        alert("Invalid selection");
    }
}

function startUp(){;
    selector = document.getElementById("cal");
    for(desmosConfigs in config){
        let newItem = document.createElement("option");
        newItem.textContent = config[desmosConfigs].title;
        newItem.value = config[desmosConfigs].id;
        selector.appendChild(newItem);
    }
}