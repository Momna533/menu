

const menu = [
    {title:"aaaaaa",
    category:"all",
    desc:"aaaaaaaaaaaaaaaaaaaa"
    },
    {title:"bbbbbb",
    category:"breakfast",
    desc:"bbbbbbbbbbbbbbbbbbbb"
    },
    {title:"ccccccccc",
    category:"lunch",
    desc:"cccccccccccccccccc"
    },
    {title:"aaaaaa",
    category:"breakfast",
    desc:"aaaaaaaaaaaaaaaaaaaa"
    },
    {title:"aaaaaa",
    category:"lunch",
    desc:"aaaaaaaaaaaaaaaaaaaa"
    },
    {title:"aaaaaa",
    category:"breakfast",
    desc:"aaaaaaaaaaaaaaaaaaaa"
    },
    {title:"aaaaaa",
    category:"dinner",
    desc:"aaaaaaaaaaaaaaaaaaaa"
    },
    {title:"aaaaaa",
    category:"appitizer",
    desc:"aaaaaaaaaaaaaaaaaaaa"
    },
]

const bigContainer = document.querySelector(".big_container");
const container = document.querySelector(".btn_container");

window.addEventListener("DOMContentLoaded",()=>{
    displayMenu(menu);
    displayMenuBtns();
   
});


function displayMenu(menuItems){
    let display = menuItems.map((item)=>{
        return `<div class="small_container">
        <h1>${item.title}</h1>
        <h2>${item.category}</h2>
        <h2>${item.desc}</h2>
    </div>`
    })
    display = display.join("");
    bigContainer.innerHTML = display;
}
function displayMenuBtns(){
    const categories = menu.reduce(function(values,item){
        if(!values.includes(item.category)){
            values.push(item.category)
       }
       return values;
    },["all"])
    const categoryBtns = categories.map((category)=>{
        return `  <button class="filter" 
        data-id="${category}">${category}</button>
        `
    }).join("")
    container.innerHTML = categoryBtns;
    const btns = container.querySelectorAll(".filter");
    btns.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            const category = e.currentTarget.dataset.id;
            const categoryBtns = menu.filter((menuItem)=>{
                if(menuItem.category === category){
                    return menuItem;
                }
            })
            if(category === "all"){
                displayMenu(menu)
            }else{
                displayMenu(categoryBtns)
            }
        })
    })
}